var lst = new Array();

function GENERATOR_newcase(data) {
    let rst = "<a href=\"" + data.url + "\"><div class=\"ListpageShowcase\"><img class=\"ListpageShowcaseCover\" src=\"";
    rst += data.cover + "\" alt=\"图片加载错误\"/><div class=\"ListpageShowcaseTextcase\"><p class=\"ListpageShowcaseTitle\">";
    rst += data.title + "</p><p class=\"ListpageShowcaseSubtitle\">";
    rst += data.subtitle + "</p><p class=\"ListpageShowcaseDate\">";
    rst += data.date + "</p><p class=\"ListpageShowcaseTag_Title\">Tags:</p><p class=\"ListpageShowcaseTag\">";
    $.each(data.tags, function(i, info) {
        rst += info + ", ";
    });
    rst = rst.substring(0, rst.length - 2);
    rst += "</p></div></div></a>";
    return rst;
}