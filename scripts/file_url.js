const URL_ROOT = window.location.host;

var elments_a = document.getElementsByClassName("LinkFromRoot");

// 将读取到的主机和端口地址添加到相对路径 url 前
$.each(elments_a, function(i, info) {
    info.href = URL_ROOT + info.href;
});