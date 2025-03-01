var getmin = document.getElementById('min')
var getsec = document.getElementById('sec')
var getmsec = document.getElementById('msec')
var getbtn = document.getElementById('btn')
var minutes = 0
var seconds = 0
var milliseconds = 0
var interval;

function start(){

      interval = setInterval (function(){
        milliseconds++
        getmsec.innerHTML = milliseconds
        if(milliseconds >= 100){
            seconds++
            getsec.innerHTML = seconds
            milliseconds = 0
        }
        else if(seconds >= 60){
            minutes++
            getmin.innerHTML = minutes
            seconds = 0
        }
    },10)
    getbtn.disabled = true
}

function stop(){
    clearInterval(interval)
}
function reset(){
    minutes = 0
    seconds = 0
    milliseconds = 0
    getmin.innerHTML = minutes
    getmsec.innerHTML = milliseconds
    getsec.innerHTML= seconds
    getbtn.disabled = false
}