var content_path = window.location.search;
content_path = './' + content_path.substring(1, content_path.length);

$.get(content_path, function(md) {
    // document.getElementById("#contentpageMain").innerHTML = marked.parse(md);
    document.getElementById("#contentpageMain").innerHTML = md;
});