function CTRL_tagCheck(btn) {
    let enabled = (getComputedStyle(btn).borderStyle == "solid");
    if (enabled) {
        btn.style.borderStyle = "none";
    } else {
        btn.style.borderStyle = "solid";
    }
}

function CTRL_search(_input) {
    var str = _input.value;
    var title = "";
    if (title.search(str) != -1) {
        
    }
    return;
}

