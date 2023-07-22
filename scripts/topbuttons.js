var index_cur_topbutton = 1;

function topButtonClick(index_topbutton) {
    index_cur_topbutton = index_topbutton;
    console.log(index_cur_topbutton);
}

function mouseOverButton(cur_button) {
    cur_button.style.color = '#55ffbb';
}

function mouseLeaveButton(cur_button) {
    cur_button.style.color = '#9060ff';
}