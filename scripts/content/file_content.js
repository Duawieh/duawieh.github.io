var content_path = window.location.search;
content_path = 'https://duawieh.github.io/' + content_path.substring(1, content_path.length);

$.get(content_path, function(md) {
    document.getElementById("contentpageMainText").innerHTML = marked.parse(md);
});