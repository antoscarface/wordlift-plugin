<?php
/**
 * @see https://github.com/insideout10/wordlift-plugin/issues/879
 *
 * @since 3.20.0
 */
?>
<style>
    /* WordLift Dashboard */
    #wl-dashboard-v2 header {
        padding: .5em;
        background: #f1f1f1;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #wl-dashboard-v2 header h3 {
        margin: 0;
        font-weight: 500;
    }

    #wl-dashboard-v2 header > *:nth-child(3) {
        flex: auto;
        text-align: right;
    }

    #wl-dashboard-v2 header img {
        vertical-align: middle;
    }

    #wl-dashboard-v2 .dashicons {
        color: #007aff;
    }

    #wl-dashboard-v2 .inside > div {
        border: 1px solid #eee;
        padding: 2px;
        margin-bottom: 12px;
    }

    #wl-dashboard-v2 header ~ * {
        margin: .5em;
    }

    /* Remove the margin from `p`, use the margin on the container */
    #wl-dashboard-v2 header ~ * p {
        margin: 0;
    }

    #wl-todays-tip {
        background: #f1f1f1;
        border: 1px solid #eeeeee;
        margin: 0 -12px 12px;
    }

    #wl-dashboard-v2 .wl-dashboard__block__body {
        display: flex;
        flex-wrap: wrap;
    }

    #wl-dashboard-v2 .wl-dashboard__block__body > div
        , #wl-dashboard__show-more ~ label > span {
        padding: 4px 8px 4px 0;
        box-sizing: border-box;
    }

    #wl-dashboard-v2 .wl-dashboard__block__body > div:nth-child(odd)
        , #wl-dashboard__show-more ~ label > span {
        text-align: right;
        width: 120px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    #wl-dashboard-v2 .wl-dashboard__block__body > div:nth-child(even) {
        flex: calc(100% - 120px);
        background: #ebf6ff;
    }

    #wl-dashboard-v2 .wl-dashboard__block__body > label {
        flex: 100%;
        background: linear-gradient(to right, white 120px, #ebf6ff 120px 100%);
    }

    #wl-dashboard-v2 .wl-dashboard__block__body--locked {
        margin: 50px;
        text-align: center;
        font-size: 1.4em;
    }

    #wl-dashboard-v2 .wl-dashboard__legend::after {
        content: ' ';
        width: 10px;
        height: 10px;
        display: inline-block;
        border-radius: 10px;
        margin: 0 6px;
    }

    #wl-dashboard-v2 .wl-dashboard__bar {
        height: 10px;
        border-radius: 0 10px 10px 0;
    }

    #wl-dashboard-v2 .wl-dashboard__legend--entities::after, #wl-dashboard-v2 .wl-dashboard__bar--entities {
        background: rgb(0, 154, 255);
        background: linear-gradient(90deg, rgb(0, 154, 255) 0%, rgb(0, 179, 255) 50%, rgb(0, 206, 255) 100%);
    }

    #wl-dashboard-v2 .wl-dashboard__legend--posts::after, #wl-dashboard-v2 .wl-dashboard__bar--posts {
        background: rgb(0, 66, 212);
        background: linear-gradient(90deg, rgba(0, 66, 212, 1) 0%, rgba(0, 110, 238, 1) 50%, rgba(68, 147, 255, 1) 100%);
    }

    /* Hide the checkbox. */
    #wl-dashboard__show-more {
        display: none;
    }

    #wl-dashboard__show-more ~ label {
        color: #0073aa;
        transition-property: border, background, color;
        transition-duration: .05s;
        transition-timing-function: ease-in-out;
        text-decoration: none;
    }

    #wl-dashboard__show-more ~ div
        , #wl-dashboard__show-more ~ label > span:nth-child(2)
        , #wl-dashboard__show-more:checked ~ label > span:nth-child(1) {
        display: none;
    }

    #wl-dashboard__show-more:checked ~ div
        , #wl-dashboard__show-more:checked ~ label > span:nth-child(2)
        , #wl-dashboard__show-more ~ label > span:nth-child(1) {
        display: block;
    }
</style>
<?php
// Print out the Today's Tip block.
Wordlift_Admin_Dashboard_V2::get_todays_tip_block();

// Backlinks isn't ready yet.
// <h3> ... echo __( 'Backlinks', 'wordlift' ); ... </h3>
?>


<?php
$configuration_service = Wordlift_Configuration_Service::get_instance();

$country_code = $configuration_service->get_country_code();
?>
<div>
    <header>
        <span class="dashicons dashicons-editor-help"></span>
        <h3><?php echo __( 'Search rankings', 'wordlift' ); ?></h3>
        <div class="pull-right">
			<?php echo esc_html( __( Wordlift_Countries::get_country_name( $country_code ) ) ); ?>
            <img width="16" height="16" src="<?php echo Wordlift_Countries::get_flag_url( $country_code ); ?>">
            <img width="16" height="16"
                 src="<?php echo plugin_dir_url( dirname( dirname( __FILE__ ) ) ) . 'images/woorank-16x16.png'; ?>">
        </div>
    </header>
	<?php
	if ( in_array( $configuration_service->get_package_type(), array( 'editorial', 'business' ) ) ) { ?>
        <div class="wl-dashboard__block__body">
            <div><?php echo esc_html( _x( 'Keywords', 'Dashboard', 'wordlift' ) ); ?>:
                <a href="<?php echo admin_url( 'edit-tags.php?taxonomy=wl_search_keywords' ); ?>"><?php echo wp_count_terms( Wordlift_Search_Keyword_Taxonomy::TAXONOMY_NAME ); ?></a>
            </div>
            <div><?php echo esc_html( _x( 'Average position', 'Dashboard', 'wordlift' ) ); ?>:
                <a href="<?php echo admin_url( 'admin.php?page=wl_search_rankings' ); ?>"><?php echo $average_position_string; ?></a>
            </div>
        </div>
	<?php } else { ?>
        <div class="wl-dashboard__block__body wl-dashboard__block__body--locked">
            <span class="dashicons dashicons-lock"></span>
			<?php echo esc_html( _x( 'Upgrade to Editorial or Business edition to see the Search Rankings.', 'Dashboard', 'wordlift' ) ); ?>
        </div>
	<?php } ?>
</div>

<div>
    <header>
        <span class="dashicons dashicons-editor-help"></span>
        <h3><?php echo __( 'Top entities', 'wordlift' ); ?></h3>
        <span class="wl-dashboard__legend wl-dashboard__legend--entities"><?php echo esc_html( _x( 'Links with entities', 'Dashboard', 'wordlift' ) ); ?></span>
        <span class="wl-dashboard__legend wl-dashboard__legend--posts"><?php echo esc_html( _x( 'Post with entities', 'Dashboard', 'wordlift' ) ); ?></span>
    </header>
    <div class="wl-dashboard__block__body">
		<?php
		$top_entities = $this->get_top_entities();
		if ( ! empty( $top_entities ) ) {
			$max = $top_entities[0]->total;
			$i   = 0;
			foreach ( $this->get_top_entities() as $post ) {
				$permalink    = get_permalink( $post->ID );
				$title        = $post->post_title;
				$entities_100 = 100 * $post->entities / $max;
				$posts_100    = 100 * $post->posts / $max;
				?>
                <div><a href="<?php echo esc_attr( $permalink ); ?>"><?php echo esc_html( $title ); ?></a></div>
                <div>
                    <div class="wl-dashboard__bar wl-dashboard__bar--posts" style="width: <?php echo $posts_100 ?>%;">
                    </div>
                    <div class="wl-dashboard__bar wl-dashboard__bar--entities"
                         style="width: <?php echo $entities_100 ?>%;">
                    </div>
                </div>
				<?php
				if ( 4 === $i ++ ) {
					?>
                    <input id="wl-dashboard__show-more" type="checkbox">
                    <label for="wl-dashboard__show-more">
                        <span>
						    <?php echo esc_html( __( 'Show more', 'Dashboard', 'wordlift' ) ); ?>
                        </span>
                        <span>
                            <?php echo esc_html( __( 'Hide', 'Dashboard', 'wordlift' ) ); ?>
                        </span>
                    </label>
					<?php
				}
			}
		}
		?>
    </div>
</div>

<div>
    <header>
        <span class="dashicons dashicons-editor-help"></span>
        <h3><?php echo __( 'Enriched posts', 'wordlift' ); ?></h3>
    </header>
    <div>
		<?php echo $this->dashboard_service->count_annotated_posts(); ?>
        / <?php echo $this->dashboard_service->count_posts(); ?>

        <a href=""><?php echo esc_html( _x( 'Enrich', 'Dashboard', 'wordlift' ) ); ?></a>
    </div>
</div>

<div>
    <header>
        <span class="dashicons dashicons-editor-help"></span>
        <h3><?php echo __( 'Created entities', 'wordlift' ); ?></h3>
    </header>
    <div>
		<?php echo $this->entity_service->count(); ?>

        <a href=""><?php echo esc_html( _x( 'Vocabulary', 'Dashboard', 'wordlift' ) ); ?></a>
    </div>
</div>

<div>
    <header>
        <span class="dashicons dashicons-editor-help"></span>
        <h3><?php echo __( 'Average entity rating', 'wordlift' ); ?></h3>
    </header>
    <div>
		<?php echo $this->dashboard_service->average_entities_rating(); ?>

        <a href=""><?php echo esc_html( _x( 'Pimp', 'Dashboard', 'wordlift' ) ); ?></a>
    </div>
</div>

<div>
    <header>
        <span class="dashicons dashicons-editor-help"></span>
        <h3><?php echo __( 'Graph data', 'wordlift' ); ?></h3>
    </header>
    <div>
		<?php echo esc_html( _x( 'Created triples', 'Dashboard', 'wordlift' ) ); ?>
        : <?php echo $this->dashboard_service->count_triples(); ?><br/>
		<?php echo esc_html( _x( 'Ratio on Wikidata', 'Dashboard', 'wordlift' ) ); ?>:
		<?php echo $this->dashboard_service->count_triples() * 100 / 947690143; ?>
    </div>
</div>
