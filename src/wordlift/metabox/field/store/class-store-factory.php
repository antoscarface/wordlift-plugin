<?php
namespace Wordlift\Metabox\Field\Store;

use Wordlift\Metabox\Wl_Abstract_Metabox;

class Store_Factory {


	/**
	 * @param $type
	 *
	 * @return Store
	 */
	public static function get_instance(  $type ) {

		if ( Wl_Abstract_Metabox::POST === $type ) {
			return new Post_Metabox_Field();
		}
		else if ( Wl_Abstract_Metabox::TERM === $type) {
			return new Term_Metabox_Field();
		}
		return null;
	}

}