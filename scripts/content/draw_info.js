var _url = "./" + content.url;
var _tag = content.tags;
var _title = content.title;
var _date = content.date;
var _back = content.cover;

$.get(_url, function(md) {
    document.getElementById("contentpageMainText").innerHTML = marked.parse(md);
    var codes = document.getElementsByTagName("code");
    $.each(codes, function(i, info) {
        let parent = info.parentNode;
        console.log(parent.tagName);
        if (parent.tagName == "PRE") {
            hljs.highlightBlock(info);
        } else {
            info.className = "InlineCode";
        }
    });
});

document.getElementById("contentpageSubpanelTitle").innerHTML = _title;
document.getElementById("contentpageSubpanelDate").innerHTML = _date;
var string_tags = "";
$.each(_tag, function(i, info) {
    string_tags += info;
    string_tags += ', ';
});
string_tags = string_tags.substring(0, string_tags.length - 2);
document.getElementById("contentpageSubpanelTags").innerHTML = string_tags;

if (_back != null) document.getElementById("contentpageBackground").src = _back;