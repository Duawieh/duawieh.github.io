var cur_obj;

function movein_showcasetitle(cur_showcase) {
    switch (cur_showcase) {
        case 1 : cur_obj = document.getElementById("HomepageCenterShowcaseTitle"); break;
        case 2 : cur_obj = document.getElementById("HomepageLeftShowcaseTitle"); break;
        case 3 : cur_obj = document.getElementById("HomepageRightShowcaseTitle"); break;
    }
    requestAnimationFrame(anim_movein_showcasetitle);
}

function moveout_showcasetitle(cur_showcase) {
    switch (cur_showcase) {
        case 1 : cur_obj = document.getElementById("HomepageCenterShowcaseTitle"); break;
        case 2 : cur_obj = document.getElementById("HomepageLeftShowcaseTitle"); break;
        case 3 : cur_obj = document.getElementById("HomepageRightShowcaseTitle"); break;
    }
    requestAnimationFrame(anim_moveout_showcasetitle);
}

function anim_movein_showcasetitle(_t) {
    let delta_t = performance.now() - _t;
    if (cur_obj.style.bottom < 0) {
        cur_obj.style.bottom += 0.3 * delta_t + 'px';
        requestAnimationFrame(anim_movein_showcasetitle);
        return;
    } else cur_obj.style.bottom = 0;
    return;
}

function anim_moveout_showcasetitle(_t) {
    let delta_t = performance.now() - _t;
    if (cur_obj.style.top > 0) {
        cur_obj.style.top -= 0.3 * delta_t + 'px';
        requestAnimationFrame(anim_moveout_showcasetitle);
        return;
    } else cur_obj.style.top = 0;
    return;
}