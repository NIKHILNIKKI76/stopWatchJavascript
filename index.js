const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId ;
let hrs = 0;
let mins = 0;
let secs = 0;
let ms = 0;
let pf = false;

// startBtn.addEventListener("click",startBtnfun);

function startBtnfun(){
    if(paused ){
        paused = false ;
        startTime = Date.now() - elapsedTime ;
        intervalId = setInterval(updateTime,10);
    }
}
pauseBtn.addEventListener("click" , () =>{
    pf = !pf;
    paused = true;
    if(pf == false){
        pauseBtn.textContent = "Start";
        clearInterval(intervalId);
    }
    else {
         pauseBtn.textContent = "Stop";
         startBtnfun();
    }
    
});
resetBtn.addEventListener("click" , () => {
    clearInterval(intervalId);
     paused = true;
     startTime = 0;
     elapsedTime = 0;
     currentTime = 0;
     paused = true;
     hrs =0;
     mins = 0;
     secs = 0;
     ms = 0;
     pf = false
    timeDisplay.textContent = `00:00:00:00`;
});

function updateTime(){

    elapsedTime = Date.now() - startTime;
    ms = Math.floor((elapsedTime/10) % 100);
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
    
    ms = pad(ms);
    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}:${ms}`;
    function pad(unit){
        return ("0"+unit).length >2 ? unit : ("0"+unit);
    }
}


