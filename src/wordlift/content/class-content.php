<?php

namespace Wordlift\Content;

interface Content {

	/**
	 * Get the actual content.
	 *
	 * @return mixed Get the actual content.
	 */
	function get_bag();

	/**
	 * Get the content id.
	 *
	 * @return mixed
	 */
	function get_id();

	/**
	 * Get the content type.
	 *
	 * @return mixed
	 */
	function get_object_type_enum();

}
