<?php

use Wordlift\Cache\Ttl_Cache;

/**
 * Delete the existing invalid values for about jsonld column.
 * The values might be empty or string `null` inserted by wpdb:prepare()
 *
 * @since 3.44.4
 */
class Wordlift_Install_3_44_4 extends Wordlift_Install {

	/**
	 * {@inheritdoc}
	 */
	protected static $version = '3.44.5';

	public function install() {

		global $wpdb;

		$wpdb->query(
			"
			UPDATE {$wpdb->prefix}wl_entities
			SET about_jsonld = NULL
			WHERE about_jsonld = '' OR about_jsonld = 'null'
		"
		);

		Ttl_Cache::flush_all();
	}
}
