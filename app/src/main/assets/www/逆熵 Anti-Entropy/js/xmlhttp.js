var xmlHttp;
var data = [];
var user_info = [];

// 本地化版本：移除服务器请求功能
function SendAjax(endid)
{
    // 本地化版本：直接模拟成功状态
    console.log("本地化模式：模拟奖励领取成功");
    if(notice_arr && notice_arr[endid]) {
        alert(notice_arr[endid]);
    } else {
        alert("奖励领取成功！");
    }
}

function stateChanged(endid)
{
    // 本地化版本：此函数不再使用
    console.log("stateChanged 函数在本地化版本中已禁用");
}

// 本地化版本：移除统计功能
function pv(type)
{
    // 本地化版本：不执行任何操作
    console.log("本地化模式：统计功能已禁用 type=" + type);
}

function pvstateChanged()
{
    // 本地化版本：此函数不再使用
    console.log("pvstateChanged 函数在本地化版本中已禁用");
}

// 保留 XMLHttpRequest 对象创建功能（其他功能可能需要）
function GetXmlHttpObject()
{
    var xmlHttp=null;
    try
    {
        // Firefox, Opera 8.0+, Safari
        xmlHttp=new XMLHttpRequest();
    }
    catch (e)
    {
     // Internet Explorer
        try
        {
            xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e)
        {
            xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    return xmlHttp;
}

// 保留 URL 参数获取功能
function GetQueryString(_name)
{
    var reg = new RegExp("(^|&)"+ _name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
        return(unescape(r[2])); 
    return null;
}

// 本地化版本：添加 base64 编码函数（如果原代码依赖此函数）
function base64Encode(input) {
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    
    input = utf8Encode(input);
    
    while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        
        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }
        
        output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
    }
    
    return output;
}

function utf8Encode(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";
    
    for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        
        if (c < 128) {
            utftext += String.fromCharCode(c);
        } else if ((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
        } else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
        }
    }
    
    return utftext;
}

// 本地化版本：初始化可能用到的全局变量
if (typeof notice_arr === 'undefined') {
    var notice_arr = [];
}
if (typeof httpTips === 'undefined') {
    var httpTips = {
        'login_error_tips': '登录已经失效，请重新进入活动页面',
        'repeat_tips': '不可重复领取',
        'param_error_tips': '参数错误'
    };
}
if (typeof uid === 'undefined') {
    var uid = 'local_user';
}
if (typeof param_str === 'undefined') {
    var param_str = '';
}

console.log("xmlhttp.js 已加载（本地化版本）");