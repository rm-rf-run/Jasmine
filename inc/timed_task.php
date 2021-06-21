<?php
// 定时任务
add_filter( 'cron_schedules', 'cron_add_weekly' );

function cron_add_weekly( $schedules ) {
    // Adds once weekly to the existing schedules.
    $schedules['thirtyly'] = array(
        'interval' => 30,
        'display' => __( 'Once thirtyly' )
    );
    return $schedules;
}
//哔哩哔哩定时任务开始
register_activation_hook( __FILE__, 'bilbil_activation' );

function bilbil_activation() {
    if (! wp_next_scheduled ( 'bilbil_daily_event')) {
        wp_schedule_event( time(), 'thirtyly', 'bilbil_daily_event');
    }
}

add_action( 'bilbil_daily_event', 'do_bilbil_daily', 10, 2 );
function do_bilbil_daily() {
    if (jasmine_option('jasmine_bilbil_uid')) {
        try {
            $bilbil_uid = jasmine_option('jasmine_bilbil_uid');
            $b1 = file_get_contents("compress.zlib://https://api.bilibili.com/x/space/acc/info?mid=" . $bilbil_uid . "&jsonp=jsonp");
            $b2 = file_get_contents("compress.zlib://https://api.bilibili.com/x/relation/stat?vmid=" . $bilbil_uid . "&jsonp=jsonp");
            $results1 = json_decode($b1, true);
            $results = json_decode($b2, true);
            $gravatar = 'data:image/jpg;base64,' . chunk_split(base64_encode(file_get_contents($results1['data']['face'])));
            $topPhoto = 'data:image/jpg;base64,' . chunk_split(base64_encode(file_get_contents($results1['data']['top_photo'])));
            update_option('jasmine_bilbil_uid', $bilbil_uid);
            update_option('jasmine_bilbil_following', $results['data']['following']);
            update_option('jasmine_bilbil_follower', $results['data']['follower']);
            update_option('jasmine_bilbil_gravatar', $gravatar);
            update_option('jasmine_bilbil_name', $results1['data']['name']);
            update_option('jasmine_bilbil_level', $results1['data']['level']);
            update_option('jasmine_bilbil_type', $results1['data']['vip']['type']);
            update_option('jasmine_bilbil_describe', $results1['data']['sign']);
            update_option('jasmine_bilbil_top_photo', $topPhoto);
            error_log("哔哩哔哩定时任务完成");
        }catch (Exception $exception){
            error_log('哔哩哔哩定时任务出错，错误提示：'.$exception->getMessage());
        }
    }
}

register_deactivation_hook( __FILE__, 'my_deactivation' );

function my_deactivation() {
    wp_clear_scheduled_hook( 'my_hourly_event' );
}
// 哔哩哔哩定时任务结束