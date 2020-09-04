<?php

/**
 * Classes
 */
include_once('classes/Aplayer.php');


/**
 * Router
 */
add_action('rest_api_init', function () {
    register_rest_route('jasmine/v1', '/meting/aplayer', array(
        'methods' => 'GET',
        'callback' => 'meting_aplayer',
    ));
});

function meting_aplayer() {
    $type = $_GET['type'];
    $id = $_GET['id'];
    $wpnonce = $_GET['_wpnonce'];
    $meting_pnonce = $_GET['meting_pnonce'];
    if ((isset($wpnonce) && !check_ajax_referer('wp_rest', $wpnonce, false)) || (isset($nonce) && !wp_verify_nonce($nonce, $type . '#:' . $id))) {
        $output = array(
            'status' => 403,
            'success' => false,
            'message' => 'Unauthorized client.'
        );
        $response = new WP_REST_Response($output, 403);
    } else {
        $Meting_API = new \Sakura\API\Aplayer();
        $data = $Meting_API->get_data($type, $id);
        if ($type === 'playlist') {
            $response = new WP_REST_Response($data, 200);
            $response->set_headers(array('cache-control' => 'max-age=3600'));
        } elseif ($type === 'lyric') {
            $response = new WP_REST_Response();
            $response->set_headers(array('cache-control' => 'max-age=3600'));
            echo $data;
        } else {
            $response = new WP_REST_Response();
            $response->set_status(301);
            $response->header('Location', $data);
        }
    }
    return $response;
}