<?php
/**
 * This class represents the post row on relation table ( this represents the wordpress
 * type post, not to be confused with post_type )
 *
 * @author Naveen Muthusamy <naveen@wordlift.io>
 * @since 3.32.0
 *
 * @package Wordlift
 * @subpackage Wordlift\Relation
 */

namespace Wordlift\Relation;

use Wordlift\Object_Type_Enum;

class Term_Relation extends Relation  {
	
	function get_type() {
		return Object_Type_Enum::TERM;
	}
}