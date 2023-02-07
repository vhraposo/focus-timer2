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


const narutovolume = document.querySelector(".narutovolume")
const narutovolumedown = document.querySelector(".narutovolumedown")
const natsuvolume = document.querySelector(".natsuvolume")
const natsuvolumedown = document.querySelector(".natsuvolumedown")
const tanjirovolume = document.querySelector(".tanjirovolume")
const tanjirovolumedown = document.querySelector(".tanjirovolumedown")
const nerovolume = document.querySelector(".nerovolume")
const nerovolumedown = document.querySelector(".nerovolumedown")

const playtanjiro = document.querySelector(".playtanjiro")

function allVolumesdown(){
    narutovolumedown.classList.remove('hide')
    natsuvolumedown.classList.remove('hide')
    tanjirovolumedown.classList.remove('hide')
    nerovolumedown.classList.remove('hide')

    narutovolume.classList.add('hide')
    natsuvolume.classList.add('hide')
    tanjirovolume.classList.add('hide')
    nerovolume.classList.add('hide')
}
narutovolumedown.addEventListener('click', function(){
    allVolumesdown()
        narutovolumedown.classList.add('hide')
        narutovolume.classList.remove('hide')
        stopAllMp3()
        samidare.play()
    }   
)
narutovolume.addEventListener('click', function(){
    narutovolumedown.classList.remove('hide')
    narutovolume.classList.add('hide')
    stopAllMp3()
    samidare.pause()
})
natsuvolumedown.addEventListener('click', function(){
    allVolumesdown()
    natsuvolumedown.classList.add('hide')
    natsuvolume.classList.remove('hide')
    stopAllMp3()
    fairytail.play()

       
})
natsuvolume.addEventListener('click', function(){
    natsuvolumedown.classList.remove('hide')
    natsuvolume.classList.add('hide')
    stopAllMp3()
    fairytail.pause()
    
    
})
tanjirovolumedown.addEventListener('click', function(){
    allVolumesdown()
    tanjirovolumedown.classList.add('hide')
    tanjirovolume.classList.remove('hide')
    stopAllMp3()
    tanjiromp3.play()
    
})

tanjirovolume.addEventListener('click', function(){
    tanjirovolume.classList.add('hide')
    tanjirovolumedown.classList.remove('hide')
    stopAllMp3()
    tanjiromp3.pause()

    
})

nerovolumedown.addEventListener('click', function(){
    allVolumesdown()
    nerovolumedown.classList.add('hide')
    nerovolume.classList.remove('hide')
    stopAllMp3()
    blackrover.play()

})

nerovolume.addEventListener('click', function(){
    nerovolume.classList.add('hide')
    nerovolumedown.classList.remove('hide')
    stopAllMp3()
    blackrover.pause()
})



function removeBG(){
    nezuko.classList.add('hide')
    natsump4.classList.add('hide')
    narutovideo.classList.add('hide')
    blackvideo.classList.add('hide')

}


minutes = 25;
seconds = Number('00');
timer.innerHTML = String(minutes).padStart(2, "0") + ":" + (seconds < 10 ? "0" : "") + seconds; 

function diminuir_volume(){
    if( samidare.volume > 0)  samidare.volume -= 0.9;
    if( tanjiromp3.volume > 0)  tanjiromp3.volume -= 0.9;
    if( fairytail.volume > 0)  fairytail.volume -= 0.9;
    if( blackrover.volume > 0)  blackrover.volume -= 0.9;

}
diminuir_volume()

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
    startTimer()
    
})

const volup = document.querySelector(".volup")
const voldown = document.querySelector(".voldown")

function verifyIsPlaying(){
    volup.classList.add('hide')
    voldown.classList.remove('hide')
}


pause.addEventListener('click', function(){
    play.classList.toggle('hide')
    pause.classList.toggle('hide')
    buttonPressAudio.play()
    pauseTimer() 
    stopAllMp3() 
    verifyIsPlaying()
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
    removeBG()
    narutovideo.classList.toggle('hide')
    timer.style.color = "#964D46"
})

//var para pegar o card selecionado, após isso ela pegara e salvara para uso futuro, com controle no play. 

nero.addEventListener('click', function(){
    removeBG()
    blackvideo.classList.toggle('hide')
    timer.style.color = "#A4D580"
    
})



tanjiro.addEventListener('click', function(){
    removeBG()
    nezuko.classList.toggle('hide')
    
    
    timer.style.color = "#FFFEFD"
   
    
   
    

})

natsu.addEventListener('click', function(){
    removeBG()
    natsump4.classList.toggle('hide')
    timer.style.color = "#B73829"
})

    
 






