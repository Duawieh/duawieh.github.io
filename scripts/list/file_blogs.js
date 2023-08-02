// 读取 json 配置文件，获取 content 列表
$.getJSON("https://contents/blogs/config.json", function(data) { lst_source = data; });