var content_path = window.location.search;

if (content_path == "") {
    alert("您访问的 content 不存在！\nThe requested content is not found!");
    window.location.href = "https://duawieh.github.io";
}

content_path = 'https://duawieh.github.io/' + content_path.substring(1, content_path.length);

alert(content_path);

$.get(content_path, function(md) {
    alert(md);
    document.getElementById("contentpageMainText").innerHTML = marked.parse(md);
});