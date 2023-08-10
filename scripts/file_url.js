const URL_ROOT = window.location.host;

var elments_a = document.getElementsByClassName("LinkFromRoot");

// 将读取到的主机和端口地址添加到相对路径 url 前
$.each(elments_a, function(i, info) {
    console.log(i);
    console.log(info.href);
    console.log(URL_ROOT);
    console.log(window.location.hostname);
    // info.href = URL_ROOT + info.href;
});