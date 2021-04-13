<?php

namespace Wordlift\Videoobject\Provider\Client;
/**
 * @since 3.30.0
 * @author Naveen Muthusamy <naveen@wordlift.io>
 * This acts as factory for constructing api clients
 */
class Client_Factory {

	const YOUTUBE = 'youtube';

	const VIMEO = 'vimeo';

	public static function get_client_factory( $config ) {
		if ( self::YOUTUBE === $config ) {
			return new Youtube_Client();
		} else if ( self::VIMEO === $config ) {
			return new Vimeo_Client();
		}
	}
}