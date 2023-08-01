$.getJSON("https://contents/blogs/config.json", function(data) {
    $.each(data, function(i, info) {
        lst[i] = info;
    });
});