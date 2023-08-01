var athr = document.getElementById("aboutpageAuthor");
var prof = document.getElementById("aboutpageProfile");
var mail = document.getElementById("aboutpageEmail");
var link = document.getElementById("aboutpageLink");

$.getJSON("./config/aboutME.json", function(info) {
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

    // 获取和覆写链接列表
    let list_link = "";
    $.each(info["link"], function(jndex, jnfo) {
        list_link += "<a href=\"";
        list_link += jnfo["url"];
        list_link += "\"><img class=\"AboutpageLinkIcons\" src=\"";
        list_link += jnfo["Icon"];
        list_link += "\"/></a>";
    });
    link.innerHTML = list_link;
});
