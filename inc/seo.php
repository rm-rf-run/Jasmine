<?php
//给wordpress添加关键词与描述
add_action('wp_head', 'wp_keywords'); // 添加关键字
add_action('wp_head', 'wp_description'); // 添加页面描述

/**
+----------------------------------------------------------
 * 站点关键字
+----------------------------------------------------------
 * @return string
+----------------------------------------------------------
 */
function wp_keywords()
{
    global $s, $post;
    $keywords = '';
    if (is_single()) {
        //如果是文章页，关键词则是：标签+分类ID
        if (get_the_tags($post->ID)) {
            foreach (get_the_tags($post->ID) as $tag) {
                $keywords .= $tag->name . ', ';
            }

        }
        foreach (get_the_category($post->ID) as $category) {
            $keywords .= $category->cat_name . ', ';
        }

        $keywords = substr_replace($keywords, '', -2);
    } elseif (is_home()) {
        $keywords = esc_attr(get_option('jasmine_home_keywords')); //主页关键词设置
    } elseif (is_tag()) {
        //标签页关键词设置
        $keywords = single_tag_title('', false);
    } elseif (is_category()) {
//分类页关键词设置
        $keywords = single_cat_title('', false);
    } elseif (is_search()) {
//搜索页关键词设置
        $keywords = esc_html($s, 1);
    } else {
//默认页关键词设置
        $keywords = trim(wp_title('', false));
    }
    if ($keywords) {
        //输出关键词
        echo "<meta name=\"keywords\" content=\"$keywords\" />\n";
    }
}

/**
+----------------------------------------------------------
 * 站点描述
+----------------------------------------------------------
 * @return string
+----------------------------------------------------------
 */
function wp_description()
{
    global $s, $post;
    $description = '';
    $blog_name   = get_bloginfo('name');
    if (is_singular()) {
        //文章页如果存在描述字段，则显示描述，否则截取文章内容
        if (!empty($post->post_excerpt)) {
            $text = $post->post_excerpt;
        } else {
            $text = $post->post_content;
        }
        $description = trim(str_replace(array(
            "\r\n",
            "\r",
            "\n",
            "　",
            " ",
        ), " ", str_replace("\"", "'", strip_tags($text))));
        if (!($description)) {
            $description = $blog_name . "-" . trim(wp_title('', false));
        }

    } elseif (is_home()) { //首页显示描述设置
        $description = $blog_name . "-" . esc_attr(get_option('jasmine_home_description')); // 首頁要自己加
    } elseif (is_tag()) {
//标签页显示描述设置
        $description = $blog_name . "有关 '" . single_tag_title('', false) . "' 的文章";
    } elseif (is_category()) {
//分类页显示描述设置
        $description = $blog_name . "有关 '" . single_cat_title('', false) . "' 的文章";
    } elseif (is_archive()) {
//文档页显示描述设置
        $description = $blog_name . "在: '" . trim(wp_title('', false)) . "' 的文章";
    } elseif (is_search()) {
//搜索页显示描述设置
        $description = $blog_name . ": '" . esc_html($s, 1) . "' 的搜索結果";
    } else {
//默认其他页显示描述设置
        $description = $blog_name . "有关 '" . trim(wp_title('', false)) . "' 的文章";
    }
    //输出描述
    $description = mb_substr($description, 0, 220, 'utf-8') . '..';
    echo "<meta name=\"description\" content=\"$description\" />\n";
}
