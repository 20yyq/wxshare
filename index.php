<?php
// vim: set expandtab cindent tabstop=4 shiftwidth=4 fdm=marker:
// +----------------------------------------------------------------------+
// | The CompanyName Inc                                                  |
// +----------------------------------------------------------------------+
// | Copyright (c) 2013, CompanyName Inc. All rights reserved.            |
// +----------------------------------------------------------------------+
// | Authors: The PHP Dev Team, ISRD, CompanyName Inc.                    |
// |                                                                      |
// +----------------------------------------------------------------------+

 
include_once 'init.php';

$init = new Init;

if ($init->iswx && !is_null($init->prefix) && !is_null($init->suffix)) {
    # code...
    switch ($init->suffix) {
        case 'sst2':
            # code...
            # api 跳板解密
            $init->boardDecode();
            break;
        case 'is0':
            # code...
            # 分享落地解密
            $init->isDown();
            break;
        case 'is1':
            # code...
            # 分享落地解密
            $init->isDown();
            break;
        case 'is2':
            # code...
            # 分享落地解密
            $init->isDown();
            break;
        case 'vvt2':
            # code...
            # 落地解密
            $init->Down();
            break;
        case 'ok':
            # code...
            # 中转类型跳转
            $init->tipDown();
            break;
        case 'goon':
            # code...
            # 中转类型跳转
            $init->tipDown();
            break;
        case 'cash':
            # code...
            # 广告跳转
            $init->ggDown();
            break;
        case 'php':
            # code...
            # 直接访问
            $init->phpDown();
            break;
        default:
            # code...
            $init->error();
            break;
    }
} elseif (array_key_exists('tuiguang', $_GET)) {
    # code...
    # 推广获取落地
    $init->tgDown();
} elseif (array_key_exists('index', $_POST)) {
    # code...
    # POST 方式接收
    $init->tipPost();
} elseif (array_key_exists('sstt', $_GET)) {
    # code...
    $temp = str_replace('{$tip}', $_GET['sstt'], file_get_contents('video.html'));
    $temp = str_replace('{$time}', time(), $temp);
    exit($temp);
} else {
    # code...
    $init->error();
}
