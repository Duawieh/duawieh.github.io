// 用户选择的标签集合
var Set_checked_tag = new Set();
// 用户输入的字符串
var String_checked_name = "";
// 直接从 json 读取的 content 列表
var lst_source = new Array();
// 解析后获得的去重 tag 列表
var lst_tag = new Array();

// 关闭 jQuery 异步执行
$.ajaxSettings.async = false;
// 读取 json 配置文件，获取 content 列表
$.getJSON("https://duawieh.github.io/contents/blogs/config.json", function(data) { lst_source = data; });
// 开启 jQuery 异步执行
$.ajaxSettings.async = true;

lst_source = [
    {
        "title": "经验之谈：只要开始去做，事情就不会像看起来那么难。",
        "subtitle": "历时两周多，Duawieh Space 也只剩下阅读页没有做了。现在写下这么一篇日志，权当测试文段了。",
        "cover": "https://pic.imgdb.cn/item/64cb03b71ddac507ccbccb2f.png",
        "date": "2023.08.02 | 21:32",
        "tags": ["life","杂谈","日志"],
        "url": "contents/blogs/2308021954.md"
    },
    {
        "title": "【站务公告】建站公告",
        "subtitle": "喜大普奔！Duawieh Space 地址公开！正式开始使用啦！在这里用第一篇博客做一个建站公告，声明一下本站的规则。",
        "cover": null,
        "date": "2023.08.01 | 21:32",
        "tags": ["站务"],
        "url": "contents/blogs/2308012132.md"
    }
];