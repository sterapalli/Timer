var seconds = 00;
var tens = 00;
var appendTens = document.getElementById('tens');
var appendSeconds = document.getElementById('seconds');
var buttonStart = document.getElementById('btn-start');
var buttonStop = document.getElementById('btn-stop');
var buttonReset = document.getElementById('btn-reset');
//store time value
var Interval;

function startTimer(){
    tens++;

    if(tens < 9){
        appendTens.innerHTML = '0' + tens;

    }

    if(tens > 9){
        appendTens.innerHTML = tens;
    }

    if(tens > 99){
        seconds++;
        appendSeconds.innerHTML = '0' + seconds;
        tens = 0;
        appendTens.innerHTML = '0' + 0;

    }

    if(tens > 9){
        appendSeconds.innerHTML = seconds;
    }

}

buttonStart.onclick = function(){
    interval = setInterval(startTimer);
}

buttonStop.onclick = function(){
    clearInterval (interval);
}

buttonReset.onclick = function(){
    clearInterval (interval);
    tens = "00";
    seconds="00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
}

