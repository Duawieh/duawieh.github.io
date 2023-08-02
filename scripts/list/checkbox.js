var CHECKBOX = document.getElementById("listpageCheckbox");

function CTRL_tagCheck(btn) {
    if (getComputedStyle(btn).borderStyle == "solid") {
        btn.style.borderStyle = "none";
        Set_checked_tag.delete(btn.id);
    } else {
        btn.style.borderStyle = "solid";
        Set_checked_tag.add(btn.id);
    }
    refresh(Array.from(Set_checked_tag), String_checked_name);
    return;
}

function CTRL_search(_input) {
    String_checked_name = _input.value;
    refresh(Array.from(Set_checked_tag), String_checked_name);
    return false;
}

function GENERATOR_tagcase(dataTag) {
    let rst = "<button class=\"ListpageCheckboxButton\" onclick=\"CTRL_tagCheck(this)\" id=\"tag_";
    rst += dataTag + "\" style=\"border-style: none;\">";
    rst += dataTag + "</button>";
    return rst;
}

function init_checkbox() {
    let tagString = "";
    $.each(lst_tag, function(i, info) {
        tagString += GENERATOR_tagcase(info);
    });
    CHECKBOX.innerHTML = tagString;
    return;
}