const TIME_BEGIN = Date.now();
const BASE_RADIUM = 15;
const main_anim_clock0 = document.getElementById('mainAnimClock0');
const main_anim_clock1 = document.getElementById('mainAnimClock1');
const main_anim_clock2 = document.getElementById('mainAnimClock2');
const main_anim_clock3 = document.getElementById('mainAnimClock3');

var main_anim = setInterval(mainAnimate, 40);
var main_anim_clock_radium = 15;

var Anim_mainClockJump;
var time_independ = 0;

function anyclick() {
    var targetHeight = Math.min(Math.max(50, main_anim_clock_radium - BASE_RADIUM), 80);
    Anim_mainClockJump = requestAnimationFrame(mainClockJump(Date.now() - TIME_BEGIN, targetHeight));
}

function mainAnimate() {
    let _t = Date.now() - TIME_BEGIN;
    let _d = main_anim_clock_radium - BASE_RADIUM;
    if (_d > 1) {
        main_anim_clock_radium -= time_independ * 0.01;
        time_independ += 40;
    } else {
        main_anim_clock_radium = BASE_RADIUM;
        time_independ = 0;
    }

    //尾迹跟随
    main_anim_clock3.style.bottom = main_anim_clock2.style.bottom;
    main_anim_clock3.style.right = main_anim_clock2.style.right;
    main_anim_clock2.style.bottom = main_anim_clock1.style.bottom;
    main_anim_clock2.style.right = main_anim_clock1.style.right;
    main_anim_clock1.style.bottom = main_anim_clock0.style.bottom;
    main_anim_clock1.style.right = main_anim_clock0.style.right;

    //基准钟旋转
    main_anim_clock0.style.right = 75 - main_anim_clock_radium * Math.sin(_t / 1000 * 6.28) + 'px';
    main_anim_clock0.style.bottom = 75 + main_anim_clock_radium * Math.cos(_t / 1000 * 6.28) + 'px';
}

function mainClockJump(_t, targetHeight) {
    let delta_t = Date.now() - TIME_BEGIN - _t;
    _t = Date.now() - TIME_BEGIN;
    if (targetHeight - main_anim_clock_radium < 1) {
        console.log("returned.");
        cancelAnimationFrame(Anim_mainClockJump);
        return;
    } else {
        console.log(delta_t);
        main_anim_clock_radium += targetHeight * delta_t / 500;
        requestAnimationFrame(mainClockJump(_t, targetHeight));
        return;
    }
}