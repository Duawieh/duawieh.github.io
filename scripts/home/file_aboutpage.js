var config = $.getJSON("./config/aboutME.json");

var athr = document.getElementById("aboutpageAuthor");
var prof = document.getElementById("aboutpageProfile");
var mail = document.getElementById("aboutpageEmail");

$.each(config, function(index, info) {
    // 获取和覆写 Author
    athr.innerHTML = info["Author"];
    
    // 获取和覆写 e-mail 列表
    let list_email = "";
    $.each(info["E-mail"], function(jndex, jnfo) {
        list_email += jnfo[jndex] + "<br/>";
    });
    list_email = list_email.substring(0, list_email.length - 5);
    mail.innerHTML = list_email;
    
    // 获取和覆写个人简介
    prof.innerHTML = info["Profile"];
});