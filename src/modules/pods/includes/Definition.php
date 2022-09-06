<?php

namespace Wordlift\Modules\Pods;

use Wordlift\Vocabulary\Terms_Compat;

class Definition {

	/**
	 * @var Schema
	 */
	private $schema;

	public function __construct( $schema ) {

		$this->schema = $schema;

		add_action(
			'admin_init',
			function () {
				$this->register_on_all_valid_post_types();
				$this->register_on_all_supported_taxonomies();
			}
		);
	}


	public function register_on_all_valid_post_types() {
		$supported_types = \Wordlift_Entity_Service::valid_entity_post_types();
		foreach ( $supported_types as $supported_type ) {
			$this->register_pod( $supported_type, 'post_type', $supported_type );
		}

	}

	public function register_pod( $name, $object_equals, $object_type_equals ) {
		$pod            = $this->pod( $name, $object_equals, $object_type_equals );
		$schema_classes = \Wordlift_Schema_Service::get_instance();

		$schema = $this->schema->get();

		foreach ( $schema as $type => $data ) {
			if ( is_array( $data['custom_fields'] ) && count( $data['custom_fields'] ) > 0 ) {
				$this->group(
					$type,
					$pod,
					$this->group_fields(
						...$this->custom_fields_to_pod_fields( $data['custom_fields'] )
					)
				);
			}
		}

	}

	private function text( $name ) {
		return array(
			'name'                   => $name,
			'label'                  => ucwords( $name ),
			'description'            => '',
			'weight'                 => 0,
			'type'                   => 'text',
			'sister_id'              => '-- Select One --',
			'rest_route'             => '/pods/v1/fields',
			'required'               => '0',
			'text_allowed_html_tags' => 'strong em a ul ol li b i',
			'text_max_length'        => '255',
			'roles_allowed'          => 'administrator',
			'rest_pick_response'     => 'array',
			'rest_pick_depth'        => '1',
		);
	}


	private function repeatable( $field, $repeatable_label = 'Add New' ) {
		$field['repeatable']               = 1;
		$field['repeatable_add_new_label'] = $repeatable_label;

		return $field;
	}

	private function website( $name ) {
		return array(
			'name'               => $name,
			'label'              => ucwords( $name ),
			'description'        => '',
			'weight'             => 0,
			'type'               => 'website',
			'sister_id'          => '-- Select One --',
			'rest_route'         => '/pods/v1/fields',
			'required'           => '0',
			'repeatable'         => '0',
			'roles_allowed'      => 'administrator',
			'rest_pick_response' => 'array',
			'rest_pick_depth'    => '1',
			'website_format'     => 'normal',
			'website_allow_port' => '0',
			'website_clickable'  => '0',
			'website_new_window' => '0',
			'website_nofollow'   => '0',
			'website_max_length' => '255',
			'website_html5'      => '0',
		);
	}


	private function group_fields( ...$fields ) {
		$result = array();
		array_map(
			function ( $item ) use ( &$result ) {
				$field_name            = $item['name'];
				$result[ $field_name ] = $item;
			},
			$fields
		);

		return $result;
	}

	private function group( $name, $pod, $group_fields ) {
		$group = array(
			'name'        => $name,
			'label'       => sprintf( 'WordLift - %s', ucwords( $name ) ),
			'description' => '',
			'weight'      => 0,

		);
		pods_register_group( $group, $pod['name'], $group_fields );
	}

	private function pod( $name, $type, $object ) {
		$pod = array(
			'name'        => $name,
			'label'       => ucwords( $name ),
			'description' => '',
			'type'        => $type,
			'storage'     => 'meta',
			'object'      => $object,
		);

		pods_register_type( $pod['type'], $pod['name'], $pod );

		return $pod;
	}

	private function register_on_all_supported_taxonomies() {
		$taxonomies = Terms_Compat::get_public_taxonomies();
		foreach ( $taxonomies as $taxonomy ) {
			$this->register_pod( $taxonomy, 'taxonomy', $taxonomy );
		}
	}


	private function get_field_by_type( $name, $type ) {

		if ( 'uri' === $type ) {
			return $this->website( $name );
		} elseif ( 'string' === $type ) {
			return $this->text( $name );
		} elseif ( 'double' === $type ) {
			return $this->number( $name, 2 );
		} elseif ( 'date' === $type ) {
			return $this->datetime( $name );
		} elseif ( 'multiline' === $type ) {
			return $this->multiline( $name );
		} else {
			return $this->text( $name );
		}
	}

	private function datetime( $name ) {
		return array(
			'name'                    => $name,
			'label'                   => ucwords( $name ),
			'description'             => '',
			'weight'                  => 2,
			'type'                    => 'datetime',
			'sister_id'               => '-- Select One --',
			'rest_route'              => '/pods/v1/fields',
			'required'                => '0',
			'repeatable'              => '0',
			'datetime_type'           => 'format',
			'datetime_format'         => 'ymd_slash',
			'datetime_time_type'      => '24',
			'datetime_time_format'    => 'h_mma',
			'datetime_time_format_24' => 'hh_mm',
			'datetime_allow_empty'    => '1',
			'datetime_html5'          => '0',
			'roles_allowed'           => 'administrator',
			'rest_pick_response'      => 'array',
			'rest_pick_depth'         => '1',
		);
	}


	private function number( $name, $decimals = 0 ) {
		return array(
			'name'               => $name,
			'label'              => ucwords( $name ),
			'description'        => '',
			'weight'             => 1,
			'type'               => 'number',
			'sister_id'          => '-- Select One --',
			'rest_route'         => '/pods/v1/fields',
			'required'           => '0',
			'repeatable'         => '0',
			'number_format_type' => 'number',
			'number_format'      => 'i18n',
			'number_decimals'    => $decimals,
			'number_format_soft' => '0',
			'number_step'        => '2',
			'number_max_length'  => '0',
			'number_html5'       => '0',
			'roles_allowed'      => 'administrator',
			'rest_pick_response' => 'array',
			'rest_pick_depth'    => '1',
		);
	}


	private function multiline( $name ) {
		return array(
			'name'                        => $name,
			'label'                       => ucwords( $name ),
			'description'                 => '',
			'weight'                      => 3,
			'type'                        => 'paragraph',
			'sister_id'                   => '-- Select One --',
			'rest_route'                  => '/pods/v1/fields',
			'required'                    => '0',
			'repeatable'                  => '0',
			'paragraph_allowed_html_tags' => 'strong em a ul ol li b i',
			'paragraph_max_length'        => '-1',
			'roles_allowed'               => 'administrator',
			'rest_pick_response'          => 'array',
			'rest_pick_depth'             => '1',
		);
	}

	private function may_be_repeatable( $custom_field, $field ) {
		$repeatable = isset( $custom_field['constraints']['cardinality'] ) && INF === $custom_field['constraints']['cardinality'];
		if ( $repeatable ) {
			return $this->repeatable( $field );
		}

		return $field;
	}


	/**
	 * @return array
	 * A function which defines these pods on the edit post screen.
	 */

	private function custom_field_to_pod_field( $custom_field ) {

		$name = str_replace( 'http://schema.org/', '', $custom_field['predicate'] );
		$type = isset( $custom_field['type'] ) ? $custom_field['type'] : 'string';

		return $this->may_be_repeatable( $custom_field, $this->get_field_by_type( $name, $type ) );
	}

	private function wordlift_css_class( $field ) {
		$field['class'] = 'wordlift';

		return $field;
	}


	private function custom_fields_to_pod_fields( $custom_fields ) {
		return array_values(
			array_map(
				function ( $item ) {
					return $this->wordlift_css_class( $this->custom_field_to_pod_field( $item ) );
				},
				$custom_fields
			)
		);
	}


}
