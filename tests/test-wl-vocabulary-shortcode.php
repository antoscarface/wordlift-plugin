<?php
/**
 * Tests: [wl_vocabulary] shortcode.
 *
 * @since      3.18.0
 * @package    Wordlift
 * @subpackage Wordlift/tests
 */

/**
 * Define the {@link Wordlift_Vocabulary_Shortcode_Test} class.
 *
 * @since      3.18.0
 * @package    Wordlift
 * @subpackage Wordlift/tests
 */
class Wordlift_Vocabulary_Shortcode_Test extends Wordlift_Unit_Test_Case {
	/**
	 * The {@link Wordlift_Configuration_Service} instance.
	 *
	 * @since  3.18.0
	 * @access private
	 * @var \Wordlift_Configuration_Service $configuration_service The {@link Wordlift_Configuration_Service} instance.
	 */
	protected $configuration_service;

	/**
	 * Set up the test.
	 */
	function setUp() {
		parent::setUp();

		$this->configuration_service = $this->get_wordlift_test()->get_configuration_service();
	}

	/**
	 * Test the default configuration.
	 *
	 * @since 3.18.0
	 *
	 * @return void
	 */
	function test_default_configuration() {

		// Create posts to test against
		$post_1 = $this->factory->post->create(
			array(
				'post_type'   => 'post',
				'post_status' => 'publish',
			)
		);

		$post_2 = $this->factory->post->create(
			array(
				'post_type'   => 'post',
				'post_status' => 'publish',
			)
		);

		$post_3 = $this->factory->post->create(
			array(
				'post_type'   => 'post',
				'post_status' => 'publish',
			)
		);

		// Set the entity_type term to posts.
		wp_set_object_terms( $post_1, 'person', Wordlift_Entity_Type_Taxonomy_Service::TAXONOMY_NAME );
		wp_set_object_terms( $post_2, 'thing', Wordlift_Entity_Type_Taxonomy_Service::TAXONOMY_NAME );
		wp_set_object_terms( $post_3, 'event', Wordlift_Entity_Type_Taxonomy_Service::TAXONOMY_NAME );

		$posts_data = array(
			get_the_permalink( $post_1 ) => get_the_title( $post_1 ),
			get_the_permalink( $post_2 ) => get_the_title( $post_2 ),
			get_the_permalink( $post_3 ) => get_the_title( $post_3 ),
		);

		// Get the shortcode markup
		$vacabulary = new Wordlift_Vocabulary_Shortcode( $this->configuration_service );
		$markup     = $vacabulary->render( array() );

		// Test the markup.
		$this->assertNotNull( $markup );

		// Check that the posts are included in the markup.
		foreach ( $posts_data as $permalink => $title ) {
			$this->assertContains( $title, $markup );
			$this->assertContains( $permalink, $markup );
		}
	}

	/**
	 * Test the category param.
	 *
	 * @since 3.18.0
	 *
	 * @return void
	 */
	function test_cat_param() {

		// Create posts to test against
		$post_1 = $this->factory->post->create(
			array(
				'post_type'   => 'post',
				'post_status' => 'publish',
			)
		);

		$post_2 = $this->factory->post->create(
			array(
				'post_type'   => 'post',
				'post_status' => 'publish',
			)
		);

		$post_3 = $this->factory->post->create(
			array(
				'post_type'   => 'post',
				'post_status' => 'publish',
			)
		);

		// Create test category
		$cat_id = wp_create_category( 'Test Category' );

		// Set the entity_type term to posts.
		wp_set_object_terms( $post_1, 'person', Wordlift_Entity_Type_Taxonomy_Service::TAXONOMY_NAME );
		wp_set_object_terms( $post_2, 'thing', Wordlift_Entity_Type_Taxonomy_Service::TAXONOMY_NAME );
		wp_set_object_terms( $post_3, 'event', Wordlift_Entity_Type_Taxonomy_Service::TAXONOMY_NAME );

		// Set the category to the first two posts.
		wp_set_object_terms( $post_1, $cat_id, 'category' );
		wp_set_object_terms( $post_2, $cat_id, 'category' );

		// Get the shortcode markup
		$vacabulary = new Wordlift_Vocabulary_Shortcode( $this->configuration_service );
		$markup     = $vacabulary->render(
			array(
				'cat'     => $cat_id,
				'orderby' => 'ID',
			)
		);

		// Test the markup.
		$this->assertNotNull( $markup );

		$this->assertContains( get_the_title( $post_1 ), $markup );
		$this->assertContains( get_the_title( $post_2 ), $markup );
		$this->assertNotContains( get_the_title( $post_3 ), $markup );

		$this->assertContains( get_permalink( $post_1 ), $markup );
		$this->assertContains( get_permalink( $post_2 ), $markup );
		$this->assertNotContains( get_permalink( $post_3 ), $markup );
	}

	/**
	 * Test together the limit and cat params.
	 *
	 * @since 3.18.0
	 *
	 * @return void
	 */
	function test_cat_and_limit_params_together() {

		// Create posts to test against
		$post_1 = $this->factory->post->create(
			array(
				'post_type'   => 'post',
				'post_status' => 'publish',
			)
		);

		$post_2 = $this->factory->post->create(
			array(
				'post_type'   => 'post',
				'post_status' => 'publish',
			)
		);

		$post_3 = $this->factory->post->create(
			array(
				'post_type'   => 'post',
				'post_status' => 'publish',
			)
		);

		// Create test category
		$cat_id = wp_create_category( 'Test Category' );

		// Set the entity_type term to posts.
		wp_set_object_terms( $post_1, 'person', Wordlift_Entity_Type_Taxonomy_Service::TAXONOMY_NAME );
		wp_set_object_terms( $post_2, 'thing', Wordlift_Entity_Type_Taxonomy_Service::TAXONOMY_NAME );
		wp_set_object_terms( $post_3, 'event', Wordlift_Entity_Type_Taxonomy_Service::TAXONOMY_NAME );

		// Set the category to the first two posts.
		wp_set_object_terms( $post_1, $cat_id, 'category' );
		wp_set_object_terms( $post_2, $cat_id, 'category' );

		// Get the shortcode markup
		$vacabulary = new Wordlift_Vocabulary_Shortcode( $this->configuration_service );
		$markup     = $vacabulary->render(
			array(
				'limit'   => 1,
				'cat'     => $cat_id,
				'orderby' => 'ID',
			)
		);

		// Test the markup.
		$this->assertNotNull( $markup );

		// Even if two posts are in that category, only one should be included because of `limit param`.
		$this->assertContains( get_the_title( $post_1 ), $markup );
		$this->assertNotContains( get_the_title( $post_2 ), $markup );
		$this->assertNotContains( get_the_title( $post_3 ), $markup );

		$this->assertContains( get_permalink( $post_1 ), $markup );
		$this->assertNotContains( get_permalink( $post_2 ), $markup );
		$this->assertNotContains( get_permalink( $post_3 ), $markup );
	}
}
