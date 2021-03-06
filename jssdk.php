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



class JSSDK {
  private $appId;
  private $appSecret;
  private $line;
  private $fpath;

  public function __construct($appId, $appSecret, $line) {
    $this->appId = $appId;
    $this->appSecret = $appSecret;
    $this->line = $line;
    $this->fpath = dirname(__FILE__) . '/token/';

    if(!file_exists($this->fpath)){
      if (!mkdir($this->fpath, 0755)) {
        # code...
        file_put_contents('test.log', $this->fpath);
      }
    }
  }

  public function getSignPackage($url) {
    $jsapiTicket = $this->getJsApiTicket();
    $timestamp = time();
    $nonceStr = $this->createNonceStr();
    $string = "jsapi_ticket=$jsapiTicket&noncestr=$nonceStr&timestamp=$timestamp&url=$url";

    $signature = sha1($string);

    $signPackage = array(
      "appId"     => $this->appId,
      "nonceStr"  => $nonceStr,
      "timestamp" => $timestamp,
      "url"       => $url,
      "signature" => $signature,
      "rawString" => $string
    );
    return $signPackage;
  }

  private function createNonceStr($length = 16) {
    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    $str = "";
    for ($i = 0; $i < $length; $i++) {
      $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
    }
    return $str;
  }

  private function getJsApiTicket() {
	$file = $this->fpath . $this->line . '_jsapi_ticket.json';
	if(!file_exists($file)){
		file_put_contents($file, '');
	}
    $data = json_decode(file_get_contents($file));
    if (empty($data) || $data->expire_time < time()) {
      $accessToken = $this->getAccessToken();
      $url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi&access_token=$accessToken";
      $res = json_decode($this->httpGet($url));
      $ticket = $res->ticket;
      if ($ticket) {
		    $data = new stdClass();
        $data->expire_time = time() + 4000;
        $data->jsapi_ticket = $ticket;
        file_put_contents($file, json_encode($data));
      } else {
		    file_put_contents($file, json_encode($res));
      }
    } else {
      $ticket = $data->jsapi_ticket;
    }

    return $ticket;
  }

  private function getAccessToken() {
	$file = $this->fpath . $this->line . '_access_token.json';
	if(!file_exists($file)){
		file_put_contents($file, '');
	}
    $data = json_decode(file_get_contents($file));
    if (empty($data) || $data->expire_time < time()) {
      $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$this->appId&secret=$this->appSecret";
      $res = json_decode($this->httpGet($url));
      $access_token = $res->access_token;
      if ($access_token) {
		$data = new stdClass();
        $data->expire_time = time() + 4000;
        $data->access_token = $access_token;
		    file_put_contents($file, json_encode($data));
      } else {
        file_put_contents($file, json_encode($res));
      }
    } else {
      $access_token = $data->access_token;
    }
    return $access_token;
  }

	private function httpGet($url) {
		return file_get_contents($url);
	}
}