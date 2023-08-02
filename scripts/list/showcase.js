var SHOWCASE = document.getElementById("listpageList");

// 直接从 json 读取的 content 列表
var lst_source = new Array();
// 解析后获得的去重 tag 列表
var lst_tag = new Array();

// 生成函数：接受传入的 content 元素，生成用于绘制 showcase 的 html 文本
function GENERATOR_listCase(data) {
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

// 列表刷新函数：根据传入的标签选项和关键词字符串筛选符合条件的 content 并重新绘制在展示区
function refresh(checked_tag, checked_name) {
    let listString = "";
    let list = new Array();

    if (checked_name == "") {
        list = lst_source;
    } else {
        $.each(lst_source, function(i, info) {
            if (info["title"].search(checked_name) != -1) {
                list.push(info);
            }
        });
    }

    if (checked_tag.size()) {
        $.each(list, function(i, info) {
            let flg = false;
            $.each(info.tags, function(j, jnfo) {
                if (flg) return false;
                $.each(checked_tag, function(k, knfo) {
                    if (jnfo == knfo) {
                        flg = true;
                        return false;
                    }
                });
            });
            if (flg) {
                listString += GENERATOR_listCase(info);
            }
        });
    } else {
        $.each(list, function(i, info) {
            listString += GENERATOR_listCase(info);
        });
    }

    SHOWCASE.innerHTML = listString;
    return;
}

function init_showcase() {
    // 读取标签信息
    let set_tag = new Set("All_Tags");
    $.each(lst_source, function(i, info) {
        set_tag.add(info["tags"]);
    });
    // 建立全标签去重数组
    lst_tag = Array.from(set_tag);
    init_checkbox(lst_tag);

    refresh(new Array(), "");
    return;
}