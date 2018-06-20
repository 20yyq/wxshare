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

include_once 'crypt.php';

/**
 *
 */
class Init
{
    private $_Invalid     = false;
    private $_InvalidGet  = false;
    private $_InvalidPost = false;
    private $_Des         = null;
    private $_ErrorPage   = null;
    private $_Data        = null;
    private $_Script      = "<script type='text/javascript' charset='utf-8'>%s</script>";
    private $_Src         = "<script src='%s' charset='utf-8'></script>";

    public $prefix = null;
    public $suffix = null;
    public $iswx   = null;

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    public function __construct()
    {
        $this->init(include 'pp.php');
        $data = explode('/', $_SERVER['REQUEST_URI']);
        if (strpos($data[1], '.') !== false) {
            # code...
            if (strpos($data[1], '.txt') !== false) {
                # code...
                $txt = explode('.', $data[1]);
                $this->prefix = $txt[0];
                $this->echoTxt();
            } else {
                # code...
                $this->error();
            }
        } elseif (array_key_exists(2, $data)) {
            # code...
            if (strpos($data[2], '?') !== false) {
                # code...
                $this->prefix = $data[1];
                $this->suffix = explode('?', $data[2])[0];
            } else {
                # code...
                $this->prefix = $data[1];
                $this->suffix = $data[2];
            }
        } elseif (array_key_exists('sstt', $_GET)) {
            # code...
        } elseif (array_key_exists('tuiguang', $_GET)) {
            # code...
        } elseif (array_key_exists('index', $_POST)) {
            # code...
        } else {
            # code...
            $this->error();
        }
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    public function boardDecode()
    {
        $this->fromShare();
        $des = $this->_Des->authcode($this->prefix, 'DECODE', $_SERVER['HTTP_HOST']);
        if (false === $des) {
            # code...
            $this->error();
        } else {
            # code...
            parse_str($des, $temp);
            if (array_key_exists('cash', $temp)) {
                # code...
                if (array_key_exists('host', $temp) && array_key_exists($temp['host'], $host)) {
                    # code...
                    // $this->Header("//{$host[$temp['host']]['host']}/" . $this->_Des->authcode('isshare=3', '', $host[$temp['host']][$this->_Data['key']], 5) . ".xxp?from={$_GET['from']}");
                } else {
                    # code...
                    # 此行打开表示广告跳转到广告域名
                    // $this->Header($this->_Data['gg_url'] . $this->_Des->authcode('cash=' . $temp['cash'], '', $this->_Data['adkey'], 1200) . ".adss");
                    $this->Header($this->_Data['gg_url'] . "?cash={$temp['cash']}");
                    # 此行打开表示广告跳转到搜狗新闻
                    // $this->Header("//news.sogou.com");
                    # 此行打开表示广告跳转到落地域名
                    // $this->Header("{$data['sp_jump']}" . $this->_Des->authcode('cash', '', $this->_Data['key'], 5) . ".qqt3?cash={$temp['cash']}");
                }
            } elseif (array_key_exists('isshare', $temp)) {
                # code...
                if (array_key_exists('toopen', $this->_Data)) {
                    # code...
                    exit(sprintf($this->_Script, "location.href='" . $this->_Data['toopen'] . "'"));
                } else {
                    # code...
                    $this->Header($this->_Data['sp_jump'] . $this->_Des->authcode('isshare', '', $this->_Data['key'], 5) . "/is{$temp['isshare']}");
                }
            } else {
                # code...
                $this->error();
            }
        }
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    public function Down()
    {
        if (array_key_exists('HTTP_REFERER', $_SERVER)) {
            # code...
            if (strpos($_SERVER['HTTP_REFERER'], $this->_Data['sp_jump']) === false && strpos($_SERVER['HTTP_REFERER'], $this->_Data['sp_url']) === false && strpos($_SERVER['HTTP_REFERER'], $this->_Data['sp_tuig']) === false && strpos($_SERVER['HTTP_REFERER'], $this->_Data['temp']) === false) {
                # code...
                $this->error();
            } else {
                # code...
                $des = $this->_Des->authcode($this->prefix, 'DECODE', $this->_Data['key']);
                if (false === $des) {
                    # code...
                    $this->error();
                } else {
                    # code...
                    parse_str($des, $temp);
                    if (array_key_exists('tip', $temp)) {
                        # code...
                        // $string = sprintf($this->_Script, "var tip = '{$temp['tip']}'");
                        // $string .= sprintf($this->_Src, "/aliyun.js?t=" . time());
                        $string = str_replace('{$tip}', $temp['tip'], file_get_contents('video.html'));
                        $string = str_replace('{$time}', time(), $string);
                        exit($string);
                    } else {
                        # code...
                        $this->error();
                    }
                }
            }
        } else {
            # code...
            $this->error();
        }
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    public function tipPost()
    {
        header('Content-Type: application/json');
        if ('ok' === $_POST['index']) {
            # code...
            $temp['url'] = $this->_Data['sp_jump'] . $this->_Des->authcode('ok', '', $this->_Data['key'], 5) . "/ok";
        } elseif ('goon' === $_POST['index']) {
            # code...
            $temp['url'] = $this->_Data['sp_jump'] . $this->_Des->authcode('goon', '', $this->_Data['key'], 5) . "/goon";
        } elseif ('xxp' === $_POST['index']) {
            # code...
            $temp['url'] = $this->_Data['sp_jump'] . $this->_Des->authcode('isshare', '', $this->_Data['key'], 5) . "/is0";
        } elseif ('jump' === $_POST['index']) {
            # code...
            $temp = $this->share(include 'share.php');
        } elseif ('duapp' === $_POST['index']) {
            # code...
            $temp = $this->duapp(include 'duapp.php');
        } else {
            # code...
            $temp['msg'] = 'error';
        }
        ob_clean();
        echo json_encode($temp);
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    public function isDown()
    {
        $des = $this->_Des->authcode($this->prefix, 'DECODE', $this->_Data['key']);

        if (false === $des) {
            # code...
            $this->error();
        } elseif ('isshare' === $des) {
            # code...
            exit(sprintf($this->_Script, "location.href='" . $this->_Data['sp_url'] . $this->_Des->authcode('tip=start', '', $this->_Data['key'], 600) . "/vvt2'"));
        } else {
            # code...
            $this->error();
        }
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    public function ggDown()
    {
        exit(sprintf($this->_Script, "location.href='" . $this->_Data['gg_url'] . "?cash=" . $this->prefix . "'"));
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    public function tipDown()
    {
        $des = $this->_Des->authcode($this->prefix, 'DECODE', $this->_Data['key']);
        if (false === $des) {
            # code...
            $this->error();
        } elseif ('ok' === $des) {
            # code...
            exit(sprintf($this->_Script, "location.href='" . $this->_Data['sp_url'] . $this->_Des->authcode('tip=' . $des, '', $this->_Data['key'], 60) . "/vvt2'"));
        } elseif ('goon' === $des) {
            # code...
            exit(sprintf($this->_Script, "location.href='" . $this->_Data['sp_url'] . $this->_Des->authcode('tip=' . $des, '', $this->_Data['key'], 600) . "/vvt2'"));
        } else {
            # code...
            $this->error();
        }
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    public function tgDown()
    {
        header('Content-Type: application/json');

        $temp['sp_url'] = $this->_Data['sp_url'] . $this->_Des->authcode('tip=start', '', $this->_Data['key'], 600) . '/vvt2';
        ob_clean();
        echo json_encode($temp);
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    public function phpDown()
    {
        $filename = $this->prefix . '.' . $this->suffix;
        if ('index.php' !== $filename && file_exists($filename)) {
            # code...
            include_once $filename;
        } else {
            # code...
            $this->error();
        }
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    public function echoTxt()
    {
        exit(str_replace("MP_verify_", '', $this->prefix));
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    private function duapp($data)
    {
        if (empty($data)) {
            # code...
            $this->error();
        }

        $ip = $_SERVER['REMOTE_ADDR'] ? $_SERVER['REMOTE_ADDR'] : ($_SERVER['HTTP_CLIENT_IP'] ? $_SERVER['HTTP_CLIENT_IP'] : ($_SERVER['HTTP_X_FORWARDED_FOR'] ? $_SERVER['HTTP_X_FORWARDED_FOR'] : 'error_ip'));

        $are = $this->curlare("http://ip.taobao.com/service/getIpInfo.php?ip=" . $ip);

        if (!array_key_exists('data', $are) || !array_key_exists('city', $are['data'])) {
            # code...
            $are = "中国";
        } else {
            # code...
            $are = $are['data']['city'];
        }

        $qkey = parse_url($_POST['Qun'])['host'];
        $tkey = parse_url($_POST['Quan'])['host'];

        $applink = $_POST['Qun'] . '/' . $this->_Des->authcode('isshare=1', '', $qkey) . '/sst2';

        $timelink = $_POST['Quan'] . '/' . $this->_Des->authcode('isshare=2', '', $tkey) . '/sst2';

        if ('0' !== $_POST['TTimes']) {
            $ztitle  = $data['stitle'];
            $zimgurl = $data['simgurl'];
            $zlink   = $_POST['Quan'] . '/' . $this->_Des->authcode($data['slink'], '', $tkey) . '/sst2';
        } else {
            $ztitle  = $data['title'];
            $zimgurl = $data['imgurl'];
            $zlink   = $applink;
        }

        if ('0' !== $_POST['ATimes']) {
            # code...
            $gtitle  = $data['stitle'];
            $gimgurl = $data['simgurl'];
            $glink   = $_POST['Quan'] . '/' . $this->_Des->authcode($data['slink'], '', $tkey) . '/sst2';
        } else {
            $gtitle  = $data['title'];
            $gimgurl = $data['imgurl'];
            $glink   = $timelink;
        }

        if ('0' !== $_POST['Timeline']) {
            # code...
            $share_info = $data['share_info_qun'];
        } else {
            # code...
            $share_info = $data['share_info_quan'];
        }

        // $share_info = $data['share_info'];

        $mtemp = array(
            'share_app_info'           => array(
                'link'    => $applink,
                'img_url' => $data['imgurl'],
                'title'   => $are . $data['title'],
                'desc'    => $are . $data['desc'],
            ),
            'share_timeline_info'      => array(
                'link'    => $timelink,
                'title'   => $are . $data['qtitle'],
                'img_url' => $data['qimgurl'],
                'desc'    => $are . $data['desc'],
            ),
            'share_timeline_cash_info' => array(
                'link'    => $zlink,
                'title'   => $are . $ztitle,
                'img_url' => $zimgurl,
                'desc'    => $are . $data['desc'],
            ),
            'share_gg_info'            => array(
                'link'    => $glink,
                'img_url' => $gimgurl,
                'title'   => $are . $gtitle,
                'desc'    => $are . $data['desc'],
            ),
            'share_info'               => $share_info,
        );

        return $mtemp;
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    private function share($data)
    {
        if (empty($data)) {
            # code...
            $this->error();
        }
        $two = $this->getRandChar(6);

        $weixin = [];

        foreach ($data as $key => $value) {
            # code...
            $key = explode('.', $key);
            // 跳板链接的域名
            $weixin[$key[0]]['qun']  = 'http://' . $two . $value[0]; // 群跳板
            $weixin[$key[0]]['quan'] = 'http://' . $two . $value[1]; // 圈跳板
            // 公众号 appid  appsecret
            $weixin[$key[0]]['appid']     = $value[2];
            $weixin[$key[0]]['appsecret'] = $value[3];
        }
        $host = explode('.', parse_url($_POST['url'])['host']);

        if (array_key_exists($host[0], $weixin)) {
            # code...
            $temp = $weixin[$host[0]];
            return $this->jump($temp['appid'], $temp['appsecret'], $temp['qun'], $temp['quan'], $host[0]);
        } else {
            return ['msg' => 'error'];
        }
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    private function jump($appid, $appsecret, $qun, $quan, $linename)
    {
        include_once 'jssdk.php';
        $jssdk = new JSSDK($appid, $appsecret, $linename);
        $temp  = $jssdk->getSignPackage($_POST['url']);
        $data  = array(
            'config' => array(
                'debug'     => false,
                'timestamp' => $temp['timestamp'],
                'nonceStr'  => $temp['nonceStr'],
                'signature' => $temp['signature'],
                'appId'     => $temp['appId'],
                'jsApiList' => ["onMenuShareTimeline", "onMenuShareAppMessage", "hideMenuItems", "showMenuItems", "hideOptionMenu"],
            ),
            'qun'    => $qun,
            'quan'   => $quan,
        );
        return $data;
    }

    /**
     * @version  1.0
     * @author   eacher  
     * @param  
     * @return array | boolean
     */
    private function fromShare()
    {
        // || "singlemessage" === $_GET['from']
         if (!array_key_exists('from', $_GET)) {
             # code...
             $this->error();
         }
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    private function getRandChar($length)
    {
        $str    = null;
        $strPol = "0123456789abcdefghijklmnopqrstuvwxyz";
        $max    = strlen($strPol) - 1;

        for ($i = 0; $i < $length; $i++) {
            $str .= $strPol[rand(0, $max)];
        }
        return $str . '.';
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    public function error()
    {
        exit($this->_ErrorPage);
    }



    /**
     * @version  1.0
     * @author   eacher  
     * @param  
     * @return array | boolean
     */
    private function curlare($url)
    {

        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 10);
        curl_setopt($curl, CURLOPT_TIMEOUT, 30);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($curl, CURLOPT_HEADER, false);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 0);
        curl_setopt($curl, CURLOPT_MAXREDIRS, 1);
        $res = curl_exec($curl);
        curl_close($curl);

        return json_decode($res, true);
    }

    /**
     * @version  1.0
     * @author   eacher  
     * @param  
     * @return array | boolean
     */
    private function Header($str)
    {
         header("Location: {$str}");
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    private function init($data)
    {
        $this->_ErrorPage = file_get_contents('error.html');
        // $this->test();
        if (empty($data)) {
            # code...
            $this->error();
        }
        $this->_Data = $data;
        $this->_Des  = new StdDes;
        $this->iswx  = $this->isweixin();
        // $this->iswx  = true;
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    private function isweixin()
    {
        if (array_key_exists('HTTP_USER_AGENT', $_SERVER) && strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') !== false && false === stripos($_SERVER['HTTP_USER_AGENT'], 'wechatdevtools')) {
            # code...
            return true;
        }
        return false;
    }



    /**
     * @version  1.0
     * @author   eacher  
     * @param  
     * @return array | boolean
     */
    private function test()
    {  
        header ( "Content-type: application/octet-stream" );
        header ( "Accept-Ranges: bytes" );
        header ( "Accept-Length: 100");
        echo "";
    }
}
