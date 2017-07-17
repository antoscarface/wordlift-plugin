<?php
/**
 * Tests: Admin Entity Type Settings Service.
 *
 * @since      3.11.0
 * @package    Wordlift
 * @subpackage Wordlift/tests
 */

/**
 * Define the {@link Wordlift_Admin_Entity_Type_Settings} class.
 *
 * @since      3.11.0
 * @package    Wordlift
 * @subpackage Wordlift/tests
 */
class Test_Wordlift_Admin_Entity_Type_Settings_Service extends Wordlift_Unit_Test_Case {

	/**
	 * Test the storage nd retrieval of settings.
	 *
	 * @since 3.11.0
	 */
	function test_settings_storage() {

		$settings_service = new Wordlift_Admin_Entity_Type_Settings();

		$term = get_term_by( 'slug', 'event', Wordlift_Entity_Types_Taxonomy_Service::TAXONOMY_NAME );

		$this->assertFalse( false === $term );

		// Test null is returned when there are no settings at allowed.
		$this->assertNull( $settings_service->get_setting( $term->term_id ) );

		// Test proper structure is created in the option when a setting is added.
		$settings_service->set_setting( $term->term_id, 'bla', 'description for bla' );

		$option = get_option( 'wl_entity_type_settings', array() );
		$this->assertEquals( 1, count( $option ) );

		$this->assertEquals( 'bla', $option[ $term->term_id ]['title'] );
		$this->assertEquals( 'description for bla', $option[ $term->term_id ]['description'] );

		// Test the get_setting API.
		$setting = $settings_service->get_setting( $term->term_id );
		$this->assertEquals( 'bla', $setting['title'] );
		$this->assertEquals( 'description for bla', $setting['description'] );
	}

	/**
	 * Test the form generated by the partial in the settings page
	 *
	 * @since 3.11.0
	 */
	function test_partial_rendering() {
		// Test with no overriding settings.

		$term = get_term_by( 'name', 'event', Wordlift_Entity_Types_Taxonomy_Service::TAXONOMY_NAME );

		$this->assertFalse( false === $term );

		$term_id  = $term->term_id;
		$settings = null;

		ob_start();
		include plugin_dir_path( dirname( __FILE__ ) . '/../src/wordlift.php' ) . 'admin/partials/wordlift-admin-entity-type-settings.php';
		$output = ob_get_clean();

		// Test for empty title value
		$count = preg_match( '/<input name="title"[^>]*>/', $output, $matches );
		$this->assertEquals( 1, $count );
		$this->assertTrue( false !== strpos( $matches[0], 'value=""' ) );

		// Test for empty description value
		$count = preg_match( '#<textarea name="description"[^>]*>(.*)</textarea>#', $output, $matches );
		$this->assertEquals( 1, $count );
		$this->assertEquals( '', $matches[1] );

		// Test with settings.
		$settings = array( 'title' => 'bla', 'description' => 'bla desc' );

		ob_start();
		include plugin_dir_path( dirname( __FILE__ ) . '/../src/wordlift.php' ) . 'admin/partials/wordlift-admin-entity-type-settings.php';
		$output = ob_get_clean();

		$count = preg_match( '/<input name="title"[^>]*>/', $output, $matches );
		$this->assertEquals( 1, $count );
		$this->assertTrue( false !== strpos( $matches[0], 'value="bla"' ) );

		$count = preg_match( '#<textarea name="description"[^>]*>(.*)</textarea>#', $output, $matches );
		$this->assertEquals( 1, $count );
		$this->assertEquals( 'bla desc', $matches[1] );

		// Test html and attribute escaping
		$settings = array( 'title' => 'b"la', 'description' => 'bla de>sc' );

		ob_start();
		include plugin_dir_path( dirname( __FILE__ ) . '/../src/wordlift.php' ) . 'admin/partials/wordlift-admin-entity-type-settings.php';
		$output = ob_get_clean();

		$count = preg_match( '/<input name="title"[^>]*>/', $output, $matches );
		$this->assertEquals( 1, $count );
		$this->assertTrue( false !== strpos( $matches[0], 'value="b&quot;la"' ) );

		$count = preg_match( '#<textarea name="description"[^>]*>(.*)</textarea>#', $output, $matches );
		$this->assertEquals( 1, $count );
		$this->assertEquals( 'bla de&gt;sc', $matches[1] );

	}

}
