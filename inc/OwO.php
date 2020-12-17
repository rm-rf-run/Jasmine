<?php
//评论OwO表情
function my_load_scripts($hook)
{

    wp_enqueue_style('owo', get_template_directory_uri() . '/inc/OwO/OwO.min.css', array(), '1.1.0', 'all');

}
add_action('wp_enqueue_scripts', 'my_load_scripts');

//定义OwO json，图片地址
define('OwO_API', get_template_directory_uri() . '/inc/OwO/OwO.min.json');
define('OwO_alu', get_template_directory_uri() . '/inc/OwO/alu');
define('OwO_paopao', get_template_directory_uri() . '/inc/OwO/paopao');
define('OwO_bili', get_template_directory_uri() . '/inc/OwO/bili');

function comment_add_owo($comment_text)
{
    $smiles_path = OwO_bili . "/";
    $return_smiles = array();
    $biliname = array('baiyan', 'fadai', 'koubi', 'qinqin', 'weiqu', 'bishi', 'fanu', 'kun', 'se', 'weixiao', 'bizui', 'ganga', 'lengmo', 'shengbing', 'wunai', 'chan', 'guilian', 'liubixue', 'shengqi', 'xiaoku', 'daku', 'guzhang', 'liuhan', 'shuizhao', 'xieyanxiao', 'dalao', 'haixiu', 'liulei', 'sikao', 'yiwen', 'dalian', 'heirenwenhao', 'miantian', 'tiaokan', 'yun', 'dianzan', 'huaixiao', 'mudengkoudai', 'tiaopi', 'zaijian', 'doge', 'jingxia', 'nanguo', 'touxiao', 'zhoumei', 'facai', 'keai', 'outu', 'tuxue', 'zhuakuang');
    for ($i = 0; $i < count($biliname); $i++) {
        $img_size = getimagesize($smiles_path . $biliname[$i] . ".png");
        $img_height = $img_size["1"];
        $return_smiles['@['.$biliname[$i].']'] = '<span class="emotion-inline emotion-item"><img src="https://cdn.jsdelivr.net/gh/rm-rf-run/cdn@1.0/img/bili/' .$biliname[$i].'.png" class="img" alt="'.$biliname[$i].'" style="animation-duration: ' . ($img_height / 32 * 40) . 'ms;
        animation-timing-function: steps(' . ($img_height / 32) . ');
        transform: translateY(-' . ($img_height - 32) . 'px);
        height: ' . $img_height . 'px;"></span>';
    }

    $data_OwO = array(
        '@(暗地观察)' => '<img src="' . OwO_alu . '/暗地观察.png" alt="暗地观察" style="vertical-align: middle;">',
        '@(便便)'   => '<img src="' . OwO_alu . '/便便.png" alt="便便" style="vertical-align: middle;">',
        '@(不出所料)' => '<img src="' . OwO_alu . '/不出所料.png" alt="不出所料" style="vertical-align: middle;">',
        '@(不高兴)'  => '<img src="' . OwO_alu . '/不高兴.png" alt="不高兴" style="vertical-align: middle;">',
        '@(不说话)'  => '<img src="' . OwO_alu . '/不说话.png" alt="不说话" style="vertical-align: middle;">',
        '@(抽烟)'   => '<img src="' . OwO_alu . '/抽烟.png" alt="抽烟" style="vertical-align: middle;">',
        '@(呲牙)'   => '<img src="' . OwO_alu . '/呲牙.png" alt="呲牙" style="vertical-align: middle;">',
        '@(大囧)'   => '<img src="' . OwO_alu . '/大囧.png" alt="大囧" style="vertical-align: middle;">',
        '@(得意)'   => '<img src="' . OwO_alu . '/得意.png" alt="得意" style="vertical-align: middle;">',
        '@(愤怒)'   => '<img src="' . OwO_alu . '/愤怒.png" alt="愤怒" style="vertical-align: middle;">',
        '@(尴尬)'   => '<img src="' . OwO_alu . '/尴尬.png" alt="尴尬" style="vertical-align: middle;">',
        '@(高兴)'   => '<img src="' . OwO_alu . '/高兴.png" alt="高兴" style="vertical-align: middle;">',
        '@(鼓掌)'   => '<img src="' . OwO_alu . '/鼓掌.png" alt="鼓掌" style="vertical-align: middle;">',
        '@(观察)'   => '<img src="' . OwO_alu . '/观察.png" alt="观察" style="vertical-align: middle;">',
        '@(害羞)'   => '<img src="' . OwO_alu . '/害羞.png" alt="害羞" style="vertical-align: middle;">',
        '@(汗)'    => '  <img src="' . OwO_alu . '/汗.png" alt="汗" style="vertical-align: middle;">',
        '@(黑线)'   => '<img src="' . OwO_alu . '/黑线.png" alt="黑线" style="vertical-align: middle;">',
        '@(欢呼)'   => '<img src="' . OwO_alu . '/欢呼.png" alt="欢呼" style="vertical-align: middle;">',
        '@(击掌)'   => '<img src="' . OwO_alu . '/击掌.png" alt="击掌" style="vertical-align: middle;">',
        '@(惊喜)'   => '<img src="' . OwO_alu . '/惊喜.png" alt="惊喜" style="vertical-align: middle;">',
        '@(看不见)'  => '<img src="' . OwO_alu . '/看不见.png" alt="看不见" style="vertical-align: middle;">',
        '@(看热闹)'  => '<img src="' . OwO_alu . '/看热闹.png" alt="看热闹" style="vertical-align: middle;">',
        '@(抠鼻)'   => '<img src="' . OwO_alu . '/抠鼻.png" alt="抠鼻" style="vertical-align: middle;">',
        '@(口水)'   => '<img src="' . OwO_alu . '/口水.png" alt="口水" style="vertical-align: middle;">',
        '@(哭泣)'   => '<img src="' . OwO_alu . '/哭泣.png" alt="哭泣" style="vertical-align: middle;">',
        '@(狂汗)'   => '<img src="' . OwO_alu . '/狂汗.png" alt="狂汗" style="vertical-align: middle;">',
        '@(蜡烛)'   => '<img src="' . OwO_alu . '/蜡烛.png" alt="蜡烛" style="vertical-align: middle;">',
        '@(脸红)'   => '<img src="' . OwO_alu . '/脸红.png" alt="脸红" style="vertical-align: middle;">',
        '@(内伤)'   => '<img src="' . OwO_alu . '/内伤.png" alt="内伤" style="vertical-align: middle;">',
        '@(喷水)'   => '<img src="' . OwO_alu . '/喷水.png" alt="喷水" style="vertical-align: middle;">',
        '@(喷血)'   => '<img src="' . OwO_alu . '/喷血.png" alt="喷血" style="vertical-align: middle;">',
        '@(期待)'   => '<img src="' . OwO_alu . '/期待.png" alt="期待" style="vertical-align: middle;">',
        '@(亲亲)'   => '<img src="' . OwO_alu . '/亲亲.png" alt="亲亲" style="vertical-align: middle;">',
        '@(傻笑)'   => '<img src="' . OwO_alu . '/傻笑.png" alt="傻笑" style="vertical-align: middle;">',
        '@(扇耳光)'  => '<img src="' . OwO_alu . '/扇耳光.png" alt="扇耳光" style="vertical-align: middle;">',
        '@(深思)'   => '<img src="' . OwO_alu . '/深思.png" alt="深思" style="vertical-align: middle;">',
        '@(锁眉)'   => '<img src="' . OwO_alu . '/锁眉.png" alt="锁眉" style="vertical-align: middle;">',
        '@(投降)'   => '<img src="' . OwO_alu . '/投降.png" alt="投降" style="vertical-align: middle;">',
        '@(吐)'    => '<img src="' . OwO_alu . '/吐.png" alt="吐" style="vertical-align: middle;">',
        '@(吐舌)'   => '<img src="' . OwO_alu . '/吐舌.png" alt="吐舌" style="vertical-align: middle;">',
        '@(吐血倒地)' => '<img src="' . OwO_alu . '/吐血倒地.png" alt="吐血倒地" style="vertical-align: middle;">',
        '@(无奈)'   => '<img src="' . OwO_alu . '/无奈.png" alt="无奈" style="vertical-align: middle;">',
        '@(无所谓)'  => '<img src="' . OwO_alu . '/无所谓.png" alt="无所谓" style="vertical-align: middle;">',
        '@(无语)'   => '<img src="' . OwO_alu . '/无语.png" alt="无语" style="vertical-align: middle;">',
        '@(喜极而泣)' => '<img src="' . OwO_alu . '/喜极而泣.png" alt="喜极而泣" style="vertical-align: middle;">',
        '@(献花)'   => '<img src="' . OwO_alu . '/献花.png" alt="献花" style="vertical-align: middle;">',
        '@(献黄瓜)'  => '<img src="' . OwO_alu . '/献黄瓜.png" alt="献黄瓜" style="vertical-align: middle;">',
        '@(想一想)'  => '<img src="' . OwO_alu . '/想一想.png" alt="想一想" style="vertical-align: middle;">',
        '@(小怒)'   => '<img src="' . OwO_alu . '/小怒.png" alt="小怒" style="vertical-align: middle;">',
        '@(小眼睛)'  => '<img src="' . OwO_alu . '/小眼睛.png" alt="小眼睛" style="vertical-align: middle;">',
        '@(邪恶)'   => '<img src="' . OwO_alu . '/邪恶.png" alt="邪恶" style="vertical-align: middle;">',
        '@(咽气)'   => '<img src="' . OwO_alu . '/咽气.png" alt="咽气" style="vertical-align: middle;">',
        '@(阴暗)'   => '<img src="' . OwO_alu . '/阴暗.png" alt="阴暗" style="vertical-align: middle;">',
        '@(赞一个)'  => '<img src="' . OwO_alu . '/赞一个.png" alt="赞一个" style="vertical-align: middle;">',
        '@(长草)'   => '<img src="' . OwO_alu . '/长草.png" alt="长草" style="vertical-align: middle;">',
        '@(中刀)'   => '<img src="' . OwO_alu . '/中刀.png" alt="中刀" style="vertical-align: middle;">',
        '@(中枪)'   => '<img src="' . OwO_alu . '/中枪.png" alt="中枪" style="vertical-align: middle;">',
        '@(中指)'   => '<img src="' . OwO_alu . '/中指.png" alt="中指" style="vertical-align: middle;">',
        '@(肿包)'   => '<img src="' . OwO_alu . '/肿包.png" alt="肿包" style="vertical-align: middle;">',
        '@(皱眉)'   => '<img src="' . OwO_alu . '/皱眉.png" alt="皱眉" style="vertical-align: middle;">',
        '@(装大款)'  => '<img src="' . OwO_alu . '/装大款.png" alt="装大款" style="vertical-align: middle;">',
        '@(坐等)'   => '<img src="' . OwO_alu . '/坐等.png" alt="坐等" style="vertical-align: middle;">',
        '@[啊]'    => '<img src="' . OwO_paopao . '/啊.png" alt="啊" style="vertical-align: middle;">',
        '@[爱心]'   => '<img src="' . OwO_paopao . '/爱心.png" alt="爱心" style="vertical-align: middle;">',
        '@[鄙视]'   => '<img src="' . OwO_paopao . '/鄙视.png" alt="鄙视" style="vertical-align: middle;">',
        '@[便便]'   => '<img src="' . OwO_paopao . '/便便.png" alt="便便" style="vertical-align: middle;">',
        '@[不高兴]'  => '<img src="' . OwO_paopao . '/不高兴.png" alt="不高兴" style="vertical-align: middle;">',
        '@[彩虹]'   => '<img src="' . OwO_paopao . '/彩虹.png" alt="彩虹" style="vertical-align: middle;">',
        '@[茶杯]'   => '<img src="' . OwO_paopao . '/茶杯.png" alt="茶杯" style="vertical-align: middle;">',
        '@[吃瓜]'   => '<img src="' . OwO_paopao . '/吃瓜.png" alt="吃瓜" style="vertical-align: middle;">',
        '@[吃翔]'   => '<img src="' . OwO_paopao . '/吃翔.png" alt="吃翔" style="vertical-align: middle;">',
        '@[大拇指]'  => '<img src="' . OwO_paopao . '/大拇指.png" alt="大拇指" style="vertical-align: middle;">',
        '@[蛋糕]'   => '<img src="' . OwO_paopao . '/蛋糕.png" alt="蛋糕" style="vertical-align: middle;">',
        '@[嘚瑟]'   => '<img src="' . OwO_paopao . '/嘚瑟.png" alt="嘚瑟" style="vertical-align: middle;">',
        '@[灯泡]'   => '<img src="' . OwO_paopao . '/灯泡.png" alt="灯泡" style="vertical-align: middle;">',
        '@[乖]'    => '<img src="' . OwO_paopao . '/乖.png" alt="乖" style="vertical-align: middle;">',
        '@[哈哈]'   => '<img src="' . OwO_paopao . '/哈哈.png" alt="哈哈" style="vertical-align: middle;">',
        '@[汗]'    => '<img src="' . OwO_paopao . '/汗.png" alt="汗" style="vertical-align: middle;">',
        '@[呵呵]'   => '<img src="' . OwO_paopao . '/呵呵.png" alt="呵呵" style="vertical-align: middle;">',
        '@[黑线]'   => '<img src="' . OwO_paopao . '/黑线.png" alt="黑线" style="vertical-align: middle;">',
        '@[红领巾]'  => '<img src="' . OwO_paopao . '/红领巾.png" alt="红领巾" style="vertical-align: middle;">',
        '@[呼]'    => '<img src="' . OwO_paopao . '/呼.png" alt="呼" style="vertical-align: middle;">',
        '@[花心]'   => '<img src="' . OwO_paopao . '/花心.png" alt="花心" style="vertical-align: middle;">',
        '@[滑稽]'   => '<img src="' . OwO_paopao . '/滑稽.png" alt="滑稽" style="vertical-align: middle;">',
        '@[惊恐]'   => '<img src="' . OwO_paopao . '/惊恐.png" alt="惊恐" style="vertical-align: middle;">',
        '@[惊哭]'   => '<img src="' . OwO_paopao . '/惊哭.png" alt="惊哭" style="vertical-align: middle;">',
        '@[惊讶]'   => '<img src="' . OwO_paopao . '/惊讶.png" alt="惊讶" style="vertical-align: middle;">',
        '@[开心]'   => '<img src="' . OwO_paopao . '/开心.png" alt="开心" style="vertical-align: middle;">',
        '@[酷]'    => '<img src="' . OwO_paopao . '/酷.png" alt="酷" style="vertical-align: middle;">',
        '@[狂汗]'   => '<img src="' . OwO_paopao . '/狂汗.png" alt="狂汗" style="vertical-align: middle;">',
        '@[蜡烛]'   => '<img src="' . OwO_paopao . '/蜡烛.png" alt="蜡烛" style="vertical-align: middle;">',
        '@[懒得理]'  => '<img src="' . OwO_paopao . '/懒得理.png" alt="懒得理" style="vertical-align: middle;">',
        '@[泪]'    => '<img src="' . OwO_paopao . '/泪.png" alt="泪" style="vertical-align: middle;">',
        '@[冷]'    => '<img src="' . OwO_paopao . '/冷.png" alt="冷" style="vertical-align: middle;">',
        '@[礼物]'   => '<img src="' . OwO_paopao . '/礼物.png" alt="礼物" style="vertical-align: middle;">',
        '@[玫瑰]'   => '<img src="' . OwO_paopao . '/玫瑰.png" alt="玫瑰" style="vertical-align: middle;">',
        '@[勉强]'   => '<img src="' . OwO_paopao . '/勉强.png" alt="勉强" style="vertical-align: middle;">',
        '@[你懂的]'  => '<img src="' . OwO_paopao . '/你懂的.png" alt="你懂的" style="vertical-align: middle;">',
        '@[怒]'    => '<img src="' . OwO_paopao . '/怒.png" alt="怒" style="vertical-align: middle;">',
        '@[喷]'    => '<img src="' . OwO_paopao . '/喷.png" alt="喷" style="vertical-align: middle;">',
        '@[钱]'    => '<img src="' . OwO_paopao . '/钱.png" alt="钱" style="vertical-align: middle;">',
        '@[钱币]'   => '<img src="' . OwO_paopao . '/钱币.png" alt="钱币" style="vertical-align: middle;">',
        '@[弱]'    => '<img src="' . OwO_paopao . '/弱.png" alt="弱" style="vertical-align: middle;">',
        '@[三道杠]'  => '<img src="' . OwO_paopao . '/三道杠.png" alt="三道杠" style="vertical-align: middle;">',
        '@[沙发]'   => '<img src="' . OwO_paopao . '/沙发.png" alt="沙发" style="vertical-align: middle;">',
        '@[生气]'   => '<img src="' . OwO_paopao . '/生气.png" alt="生气" style="vertical-align: middle;">',
        '@[胜利]'   => '<img src="' . OwO_paopao . '/胜利.png" alt="胜利" style="vertical-align: middle;">',
        '@[手纸]'   => '<img src="' . OwO_paopao . '/手纸.png" alt="手纸" style="vertical-align: middle;">',
        '@[睡觉]'   => '<img src="' . OwO_paopao . '/睡觉.png" alt="睡觉" style="vertical-align: middle;">',
        '@[酸爽]'   => '<img src="' . OwO_paopao . '/酸爽.png" alt="酸爽" style="vertical-align: middle;">',
        '@[太开心]'  => '<img src="' . OwO_paopao . '/太开心.png" alt="太开心" style="vertical-align: middle;">',
        '@[太阳]'   => '<img src="' . OwO_paopao . '/太阳.png" alt="太阳" style="vertical-align: middle;">',
        '@[吐]'    => '<img src="' . OwO_paopao . '/吐.png" alt="吐" style="vertical-align: middle;">',
        '@[吐舌]'   => '<img src="' . OwO_paopao . '/吐舌.png" alt="吐舌" style="vertical-align: middle;">',
        '@[挖鼻]'   => '<img src="' . OwO_paopao . '/挖鼻.png" alt="挖鼻" style="vertical-align: middle;">',
        '@[委屈]'   => '<img src="' . OwO_paopao . '/委屈.png" alt="委屈" style="vertical-align: middle;">',
        '@[捂嘴笑]'  => '<img src="' . OwO_paopao . '/捂嘴笑.png" alt="捂嘴笑" style="vertical-align: middle;">',
        '@[犀利]'   => '<img src="' . OwO_paopao . '/犀利.png" alt="犀利" style="vertical-align: middle;">',
        '@[香蕉]'   => '<img src="' . OwO_paopao . '/香蕉.png" alt="香蕉" style="vertical-align: middle;">',
        '@[小乖]'   => '<img src="' . OwO_paopao . '/小乖.png" alt="小乖" style="vertical-align: middle;">',
        '@[小红脸]'  => '<img src="' . OwO_paopao . '/小红脸.png" alt="小红脸" style="vertical-align: middle;">',
        '@[笑尿]'   => '<img src="' . OwO_paopao . '/笑尿.png" alt="笑尿" style="vertical-align: middle;">',
        '@[笑眼]'   => '<img src="' . OwO_paopao . '/笑眼.png" alt="笑眼" style="vertical-align: middle;">',
        '@[心碎]'   => '<img src="' . OwO_paopao . '/心碎.png" alt="心碎" style="vertical-align: middle;">',
        '@[星星月亮]' => '<img src="' . OwO_paopao . '/星星月亮.png" alt="星星月亮" style="vertical-align: middle;">',
        '@[呀咩爹]'  => '<img src="' . OwO_paopao . '/呀咩爹.png" alt="呀咩爹" style="vertical-align: middle;">',
        '@[药丸]'   => '<img src="' . OwO_paopao . '/药丸.png" alt="药丸" style="vertical-align: middle;">',
        '@[咦]'    => '<img src="' . OwO_paopao . '/咦.png" alt="咦" style="vertical-align: middle;">',
        '@[疑问]'   => '<img src="' . OwO_paopao . '/疑问.png" alt="疑问" style="vertical-align: middle;">',
        '@[阴险]'   => '<img src="' . OwO_paopao . '/阴险.png" alt="阴险" style="vertical-align: middle;">',
        '@[音乐]'   => '<img src="' . OwO_paopao . '/音乐.png" alt="音乐" style="vertical-align: middle;">',
        '@[真棒]'   => '<img src="' . OwO_paopao . '/真棒.png" alt="真棒" style="vertical-align: middle;">',
        '@[nico]' => '<img src="' . OwO_paopao . '/nico.png" alt="nico" style="vertical-align: middle;">',
        '@[OK]'   => '<img src="' . OwO_paopao . '/OK.png" alt="OK" style="vertical-align: middle;">',
        '@[what]' => '<img src="' . OwO_paopao . '/what.png" alt="what" style="vertical-align: middle;">',
    );
    return strtr($comment_text, array_merge($data_OwO,$return_smiles));
}
add_filter('comment_text', 'comment_add_owo', 20, 2);
