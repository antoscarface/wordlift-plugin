<?php

use Wordlift\Cache\Ttl_Cache;

/**
 * A base abstract class for shortcode REST backend which does
 * some common tasks.
 *
 * @since 3.5.4
 */
abstract class Wordlift_Shortcode_REST {

	/**
	 * The endpoint starting with `/` set by extending classes.
	 */
	const ENDPOINT = '';

	/**
	 * The cache_ttl, set by extending classes.
	 */
	const CACHE_TTL = 86400; // 24 hours

	public function __construct() {

		$scope = $this;

		// Register rest route with callback
		add_action( 'rest_api_init', function () use ( $scope ) {
			register_rest_route( WL_REST_ROUTE_DEFAULT_NAMESPACE, $scope::ENDPOINT, array(
				'methods'  => WP_REST_Server::READABLE,
				'callback' => array( $scope, 'rest_callback' )
			) );
		} );

		// Optimizations: disable unneeded plugins on this specific REST call. WPSeo is slowing down the responses quite a bit.
		add_action( 'plugins_loaded', function () use ( $scope ) {

			if ( ! defined( 'REST_REQUEST' ) || ! REST_REQUEST || ! $scope->is_endpoint() ) {
				return;
			}

			remove_action( 'plugins_loaded', 'rocket_init' );
			remove_action( 'plugins_loaded', 'wpseo_premium_init', 14 );
			remove_action( 'plugins_loaded', 'wpseo_init', 14 );
		}, 0 );

		add_action( 'init', function () use ( $scope ) {

			if ( ! defined( 'REST_REQUEST' ) || ! REST_REQUEST || ! $scope->is_endpoint() ) {
				return;
			}

			remove_action( 'init', 'wp_widgets_init', 1 );
			remove_action( 'init', 'gglcptch_init' );
		}, 0 );

	}

	public abstract function get_data( $request );

	public function rest_callback( WP_REST_Request $request ) {

		// Respond from origin if TTL is 0
		if ( static::CACHE_TTL == 0 ) {

			$data     = $this->get_data( $request );
			$response = rest_ensure_response( $data );
			$response->header( 'X-WordLift-Cache', 'MISS' );

			return $response;
		}

		// Create the cache key.
		$cache_key_params = $request->get_params();
		unset( $cache_key_params['uniqid'] );
		unset( $cache_key_params['rest_route'] );
		$cache_key = array( 'request_params' => $cache_key_params );

		// Create the TTL cache and try to get the results.
		$cache         = new Ttl_Cache( static::ENDPOINT, static::CACHE_TTL );
		$cache_results = $cache->get( $cache_key );

		if ( isset( $cache_results ) ) {

			$response = rest_ensure_response( $cache_results );
			$response->header( 'X-WordLift-Cache', 'HIT' );

			return $response;
		}

		$data     = $this->get_data( $request );
		$response = rest_ensure_response( $data );
		$response->header( 'X-WordLift-Cache', 'MISS' );

		// Put the result before sending the json to the client, since sending the json will terminate us.
		$cache->put( $cache_key, $data );

		return $response;

	}

	private function is_endpoint() {
		$compare_route = WL_REST_ROUTE_DEFAULT_NAMESPACE . static::ENDPOINT;

		// Directly accessing $_SERVER['REQUEST_URI'] or $_GET['rest_route'] here as it's too early to use global $wp reliably

		if ( $_SERVER['REQUEST_URI'] && strpos( $_SERVER['REQUEST_URI'], $compare_route ) ) {
			return true;
		}
		if ( ! empty( $_GET['rest_route'] ) && strpos( $_GET['rest_route'], $compare_route ) ) {
			return true;
		}

		return false;
	}

}
