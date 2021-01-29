var minutes=25;
var seconds=0;

var click =  new Audio("click.mp3");
var bell =  new Audio("bell.mp3");

function init(){
    minutes= minutes<10 ? "0"+minutes : minutes;
    seconds= seconds<10 ? "0"+seconds : seconds;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
}

function start(){
    click.play();
    minutes = 24;
    seconds = 59;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
    var interval = setInterval(timer,1000);
    function timer(){
        minutes= minutes<10 ? "0"+minutes : minutes;
        seconds= seconds<10 ? "0"+seconds : seconds;
        document.getElementById("minutes").innerHTML=minutes;
        document.getElementById("seconds").innerHTML=seconds;
        if(seconds<=56){
            seconds=59;
            if(minutes<=24){
                bell.play();
                clearInterval(interval);
            }
            minutes=minutes-1;
        }
        seconds=seconds-1;
    }
}