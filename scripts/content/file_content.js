var content_path = window.location.search;
console.log(content_path);
content_path = './' + content_path.substring(1, content_path.length);
console.log(content_path);

$.get(content_path, function(md) {
    $("#contentpageMain").html(marked(md));
});