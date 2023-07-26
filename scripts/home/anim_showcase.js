var cur_obj;
var _pos;

function movein_showcasetitle(cur_showcase) {
    switch (cur_showcase) {
        case 1 : cur_obj = document.getElementById("homepageCenterShowcaseTitle"); break;
        case 2 : cur_obj = document.getElementById("homepageLeftShowcaseTitle"); break;
        case 3 : cur_obj = document.getElementById("homepageRightShowcaseTitle"); break;
    }
    console.log(cur_obj.id);
    requestAnimationFrame(anim_movein_showcasetitle);
}

function moveout_showcasetitle(cur_showcase) {
    switch (cur_showcase) {
        case 1 : cur_obj = document.getElementById("homepageCenterShowcaseTitle"); break;
        case 2 : cur_obj = document.getElementById("homepageLeftShowcaseTitle"); break;
        case 3 : cur_obj = document.getElementById("homepageRightShowcaseTitle"); break;
    }
    console.log(cur_obj.id);
    requestAnimationFrame(anim_moveout_showcasetitle);
}

function anim_movein_showcasetitle(_t) {
    let delta_t = performance.now() - _t;
    _pos += delta_t;
    if (cur_obj.style.bottom < 0) {
        cur_obj.style.bottom = _pos + 'px';
        requestAnimationFrame(anim_movein_showcasetitle);
        return;
    } else cur_obj.style.bottom = 0;
    return;
}

function anim_moveout_showcasetitle(_t) {
    let delta_t = performance.now() - _t;
    _pos -= delta_t;
    if (cur_obj.style.top > 0) {
        cur_obj.style.top = _pos + 'px';
        requestAnimationFrame(anim_moveout_showcasetitle);
        return;
    } else cur_obj.style.top = 0;
    return;
}