//  inializing the variables 
var min = 0;
var sec = 0;
var miliSec = 0;
var timer;

// this is the function which is used to update the time and converting according to 
function callTimer() {
    miliSec++;
    if (miliSec < 100) {
        if (miliSec === 99) {
            miliSec = 0;
            sec++;
            if (sec === 60)  {
                sec = 0;
                min++;
            }
        }
    }
    else{
        miliSec = 0;
    }
    document.getElementById("timer").innerHTML = min + ":" + sec + ":" + miliSec;
}

// This is the function which is used to start the timer
function start() {
    document.getElementById("start").disabled = true;
    timer = setInterval(callTimer, 10);
}

//This is the function which is used to stop the timer
function stop() {
    document.getElementById("start").disabled = false;
    clearInterval(timer);
}
// This is the function which is used to reset the timer
function reset() {
    stop();
    min = 0;
    sec = 0;
    miliSec = 0;
    document.getElementById("timer").innerHTML = min + ":" + sec + ":" + miliSec;
}