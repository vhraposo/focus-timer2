let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")
let timer = document.querySelector(".timerzone")

let intervalId;

const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const stop = document.querySelector("#stop")
const sum = document.querySelector(".sum")
const sub = document.querySelector(".sub")

const naruto = document.querySelector("#naruto")
const natsu = document.querySelector("#natsu")
const tanjiro = document.querySelector("#tanjiro")
const nero = document.querySelector("#nero")

const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const samidare = new Audio("./assets/samidare.mp3")
const tanjiromp3 = new Audio("./assets/tanjironouta.mp3")
const fairytail = new Audio("./assets/fairytail.mp3")
const blackrover = new Audio("./assets/blackrover.mp3")

const nezuko = document.querySelector(".nezuko")
const natsump4 = document.querySelector(".natsu")
const narutovideo = document.querySelector(".narutovideo")
const blackvideo = document.querySelector(".blackvideo")


function removeBG(){
    nezuko.classList.add('hide')
    natsump4.classList.add('hide')
    narutovideo.classList.add('hide')
    blackvideo.classList.add('hide')

}


minutes = 25;
seconds = Number('00');
timer.innerHTML = String(minutes).padStart(2, "0") + ":" + (seconds < 10 ? "0" : "") + seconds; 


// atualizar o contador 
function updateTimer() {
    seconds--;
    if (seconds < 0) {
        minutes--;
        seconds = 59;
        
    }if (minutes < 0) {
        clearInterval(intervalId);
    }else {
        timer.innerHTML = String(minutes).padStart(2, "0") + ":" + (seconds < 10 ? "0" : "") + seconds;  
    }
}
// iniciar o contador 
function startTimer() {
    intervalId = setInterval(updateTimer, 1000);
}
function pauseTimer() {
    clearInterval(intervalId);
}
function resetTimer(){
    minutes = 25
    seconds = Number('01')
    clearInterval(intervalId);
    timer.innerHTML = '25:00'
    
 }

function stopAllMp3(){
    blackrover.pause()
    samidare.pause()
    tanjiromp3.pause()
    fairytail.pause()
}



function audioLoop(){
    samidare.loop = true
    tanjiromp3.loop = true
    fairytail.loop = true
    blackrover.loop = true
}
audioLoop()

function incrementMinutes(){
    minutes += 5
    seconds = 1
    updateTimer()
    
} 

function decreaseMinutes(){
    minutes >= 5 ? minutes -= 5 : minutes = 0
    seconds = 1
    updateTimer()
}

function verifiyUpdateTimer(){
    if(updateTimer) {
        pause.classList.remove('hide')
        play.classList.add('hide')
     }
}

play.addEventListener('click', function(){
    play.classList.toggle('hide')
    pause.classList.toggle('hide')
    buttonPressAudio.play()
    verifyIsBackground()
    startTimer()
    
})

pause.addEventListener('click', function(){
    play.classList.toggle('hide')
    pause.classList.toggle('hide')
    buttonPressAudio.play()
    pauseTimer() 
    stopAllMp3() 
})

stop.addEventListener('click', function(){
     buttonPressAudio.play()
     resetTimer()
     stopAllMp3()
     if(updateTimer) {
        pause.classList.add('hide')
        play.classList.remove('hide')
     }
     
})


sum.addEventListener('click', function(){
    buttonPressAudio.play()
    incrementMinutes()
    
})

sub.addEventListener('click', function(){
    buttonPressAudio.play()
     decreaseMinutes()
    
})

naruto.addEventListener('click', function(){
    stopAllMp3()
    samidare.play()
    removeBG()
    narutovideo.classList.toggle('hide')
    timer.style.color = "#964D46"
    resetTimer()
    startTimer()
    verifiyUpdateTimer()


    

})

nero.addEventListener('click', function(){
    stopAllMp3()
    blackrover.play()
    removeBG()
    blackvideo.classList.toggle('hide')
    timer.style.color = "#A4D580"
    resetTimer()
    startTimer()
    verifiyUpdateTimer()

})

tanjiro.addEventListener('click', function(){
    stopAllMp3()
    tanjiromp3.play()
    removeBG()
    nezuko.classList.toggle('hide')
    timer.style.color = "#FFFEFD"
    resetTimer()
    startTimer()
    verifiyUpdateTimer()
})

natsu.addEventListener('click', function(){
    stopAllMp3()
    fairytail.play()
    removeBG()
    natsump4.classList.toggle('hide')
    timer.style.color = "#B73829"
    resetTimer()
    startTimer()
    verifiyUpdateTimer()
})

let clicked = false
    
    tanjiro.onclick = function() {
        clicked = true
        console.log(clicked)

 }

function verifyIsBackground(clicked){
    
switch (clicked) {
    
    case tanjiro:
        tanjiromp3.play()
        break;
   

    default:
        break;
}
}






