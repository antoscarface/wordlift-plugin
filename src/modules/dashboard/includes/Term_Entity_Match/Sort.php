<?php

namespace Wordlift\Modules\Dashboard\Term_Entity_Match;

use Wordlift\Modules\Dashboard\Match\Match_Sort;

/**
 * Class Sort
 *
 * @package Wordlift\Modules\Dashboard\Term_Entity_Match
 */
class Sort extends Match_Sort {

	/**
	 * Get field name.
	 *
	 * @return string
	 */
	public function get_field_name() {
		$tmp_sort_field_name = substr( $this->sort, 1 );
		if ( 'id' === $tmp_sort_field_name ) {
			return 't.term_id';
		} elseif ( 'ingredient_term' === $tmp_sort_field_name ) {
			return 't.name';
		} elseif ( 'matched_ingredient' === $tmp_sort_field_name ) {
			return 't.match_name';
		} elseif ( 'occurrences' === $tmp_sort_field_name ) {
			// phpcs:ignore Generic.CodeAnalysis.EmptyStatement.DetectedElseif
			// @todo
		}

		return 't.name';
	}
}
