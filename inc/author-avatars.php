<?php
class Simple_Local_Avatars
{
    public function __construct()
    {
        add_action('init', array($this, 'register_my_avatar'));

        add_filter('get_avatar', array($this, 'get_avatar'), 10, 5);

        add_filter('avatar_defaults', array($this, 'avatar_defaults'));
    }

    public function get_avatar($avatar = '', $id_or_email, $size = 50, $default = '', $alt = false)
    {

        if (is_numeric($id_or_email)) {
            $user_id = (int) $id_or_email;
        } elseif (is_string($id_or_email) && ($user = get_user_by('email', $id_or_email))) {
            $user_id = $user->ID;
        } elseif (is_object($id_or_email) && !empty($id_or_email->user_id)) {
            $user_id = (int) $id_or_email->user_id;
        }

        if (empty($user_id)) {
            return $avatar;
        }

        $local_avatars = get_user_meta($user_id, 'simple_local_avatar', true);

        if (empty($local_avatars) || empty($local_avatars['full'])) {
            return $avatar;
        }

        $size = (int) $size;

        if (empty($alt)) {
            // $alt = get_the_author_meta('display_name', $user_id);
            $alt = get_bloginfo('name');
        }

        $author_class = is_author($user_id) ? ' current-author' : '';
        $img_file  = 'data:image/jpg;base64,' .base64_encode(file_get_contents($local_avatars['full']));
        $avatar       = "<img alt='" . esc_attr($alt) . "' src='" . $img_file . "' data-src='". $img_file ."' class='avatar avatar-{$size}{$author_class} photo lazyload' height='{$size}' width='{$size}' />";

        return apply_filters('simple_local_avatar', $avatar);
    }

    public function register_my_avatar()
    {
        $user_id = get_current_user_id();
        if(jasmine_option('focus_logo') && $user_id){
            update_user_meta($user_id, 'simple_local_avatar', array('full' => jasmine_option('focus_logo')));
        }else{
            delete_user_meta($user_id, 'simple_local_avatar');
        }
    }

    public function avatar_defaults($avatar_defaults)
    {
        remove_action('get_avatar', array($this, 'get_avatar'));
        return $avatar_defaults;
    }

    public function avatar_delete($user_id)//删除生成的图片
    {
        $old_avatars = get_user_meta($user_id, 'simple_local_avatar', true);
        $upload_path = wp_upload_dir();

        if (is_array($old_avatars)) {
            foreach ($old_avatars as $old_avatar) {
                $old_avatar_path = str_replace($upload_path['baseurl'], $upload_path['basedir'], $old_avatar);
                @unlink($old_avatar_path);
            }
        }

        delete_user_meta($user_id, 'simple_local_avatar');
    }

}

$simple_local_avatars = new Simple_Local_Avatars;

function get_simple_local_avatar($id_or_email, $size = '50', $default = '', $alt = false)
{
    global $simple_local_avatars;
    if(jasmine_option('focus_logo')){
        $avatar = $simple_local_avatars->get_avatar('', $id_or_email, $size, $default, $alt);
    }else{
        $avatar = get_avatar($id_or_email, $size, $default, $alt);
    }
    return $avatar;
}