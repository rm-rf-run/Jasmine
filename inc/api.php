<?php

/**
 * Classes
 */
include_once('classes/Aplayer.php');
include_once('classes/Bilibili.php');
include_once('classes/QQ.php');

use Jamine\API\QQ;

/**
 * Router
 */
add_action('rest_api_init', function () {
    register_rest_route('Jasmine/v1', '/qqinfo/json', array(
        'methods' => 'GET',
        'callback' => 'get_qq_info',
    ));
    register_rest_route('Jasmine/v1', '/qqinfo/avatar', array(
        'methods' => 'GET',
        'callback' => 'get_qq_avatar',
    ));
    register_rest_route('Jasmine/v1', '/bangumi/bilibili', array(
        'methods' => 'POST',
        'callback' => 'bgm_bilibili',
    ));
    register_rest_route('Jasmine/v1', '/meting/aplayer', array(
        'methods' => 'GET',
        'callback' => 'meting_aplayer',
    ));
});

/**
 * QQ info
 */
function get_qq_info(WP_REST_Request $request) {
    if (!check_ajax_referer('wp_rest', '_wpnonce', false)) {
        $output = array(
            'status' => 403,
            'success' => false,
            'message' => 'Unauthorized client.'
        );
    } elseif ($_GET['qq']) {
        $qq = $_GET['qq'];
        $output = QQ::get_qq_info($qq);
    } else {
        $output = array(
            'status' => 400,
            'success' => false,
            'message' => 'Bad Request'
        );
    }

    $result = new WP_REST_Response($output, $output['status']);
    $result->set_headers(array('Content-Type' => 'application/json'));
    return $result;
}

/**
 * QQ头像链接解密
 */
function get_qq_avatar() {
    $encrypted = $_GET["qq"];
    $imgurl = QQ::get_qq_avatar($encrypted);
    if (akina_option('qq_avatar_link') == 'type_2') {
        $imgdata = file_get_contents($imgurl);
        $response = new WP_REST_Response();
        $response->set_headers(array(
            'Content-Type' => 'image/jpeg',
            'Cache-Control' => 'max-age=86400'
        ));
        echo $imgdata;
    } else {
        $response = new WP_REST_Response();
        $response->set_status(301);
        $response->header('Location', $imgurl);
    }
    return $response;
}

function bgm_bilibili() {
    if (!check_ajax_referer('wp_rest', '_wpnonce', false)) {
        $output = array(
            'status' => 403,
            'success' => false,
            'message' => 'Unauthorized client.'
        );
        $response = new WP_REST_Response($output, 403);
    } else {
        $page = $_GET["page"] ?: 2;
        $bgm = new \Jasmine\API\Bilibili();
        $html = preg_replace("/\s+|\n+|\r/", ' ', $bgm->get_bgm_items($page));
        $response = new WP_REST_Response($html, 200);
    }
    return $response;
}

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
        $Meting_API = new \Jasmine\API\Aplayer();
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