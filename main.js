let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")
let timer = document.querySelector(".timerzone")

let intervalId;

const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const stop = document.querySelector("#stop")
const sum = document.querySelector(".sum")
const sub = document.querySelector(".sub")

const svgElementPlay = document.querySelector('.play > svg')
const svgElementPause = document.querySelector('.pause > svg')
const svgElementStop = document.querySelector('#stop > svg')
const svgElementSum = document.querySelector('.sum > svg')
const svgElementSub = document.querySelector('.sub > svg')

const naruto = document.querySelector("#naruto")
const natsu = document.querySelector("#natsu")
const tanjiro = document.querySelector("#tanjiro")
const nero = document.querySelector("#nero")

const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const samidaremp3 = new Audio("./audio/samidare.mp3")
const tanjiromp3 = new Audio("./audio/tanjironouta.mp3")
const fairytailmp3 = new Audio("./audio/fairytail.mp3")
const blackrovermp3 = new Audio("./audio/blackrover.mp3")

const nezukomp4 = document.querySelector(".nezuko")
const natsump4 = document.querySelector(".natsu")
const narutomp4 = document.querySelector(".narutovideo")
const blackmp4 = document.querySelector(".blackvideo")


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
        samidaremp3.play()
    }   
)
narutovolume.addEventListener('click', function(){
    narutovolumedown.classList.remove('hide')
    narutovolume.classList.add('hide')
    stopAllMp3()
    samidaremp3.pause()
})
natsuvolumedown.addEventListener('click', function(){
    allVolumesdown()
    natsuvolumedown.classList.add('hide')
    natsuvolume.classList.remove('hide')
    stopAllMp3()
    fairytailmp3.play()

       
})
natsuvolume.addEventListener('click', function(){
    natsuvolumedown.classList.remove('hide')
    natsuvolume.classList.add('hide')
    stopAllMp3()
    fairytailmp3.pause()
    
    
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
    blackrovermp3.play()

})

nerovolume.addEventListener('click', function(){
    nerovolume.classList.add('hide')
    nerovolumedown.classList.remove('hide')
    stopAllMp3()
    blackrovermp3.pause()
})

function removeAnimeBg(){
    nezukomp4.classList.add('hide')
    natsump4.classList.add('hide')
    narutomp4.classList.add('hide')
    blackmp4.classList.add('hide')

}

minutes = 25;
seconds = Number('00');
timer.innerHTML = String(minutes).padStart(2, "0") + ":" + (seconds < 10 ? "0" : "") + seconds; 

(function diminuir_volume(){
    if( samidaremp3.volume > 0)  samidaremp3.volume -= 0.9;
    if( tanjiromp3.volume > 0)  tanjiromp3.volume -= 0.9;
    if( fairytailmp3.volume > 0)  fairytailmp3.volume -= 0.9;
    if( blackrovermp3.volume > 0)  blackrovermp3.volume -= 0.9;

})()


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
    blackrovermp3.pause()
    samidaremp3.pause()
    tanjiromp3.pause()
    fairytailmp3.pause()
}

function audioLoop(){
    samidaremp3.loop = true
    tanjiromp3.loop = true
    fairytailmp3.loop = true
    blackrovermp3.loop = true
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
    removeAnimeBg()
    narutomp4.classList.toggle('hide')
    timer.style.color = "#B05000"

    svgElementPlay.style.fill = '#FF7C00'
    svgElementPause.style.fill = '#FF7C00'
    svgElementStop.style.fill = '#FF7C00'
    svgElementSum.style.fill = '#FF7C00'
    svgElementSub.style.fill = '#FF7C00'
})



nero.addEventListener('click', function(){
    removeAnimeBg()
    blackmp4.classList.toggle('hide')
    timer.style.color = "#A4D580"


    svgElementPlay.style.fill = '#2B493B'
    svgElementPause.style.fill = '#2B493B'
    svgElementStop.style.fill = '#2B493B'
    svgElementSum.style.fill = '#2B493B'
    svgElementSub.style.fill = '#2B493B'
    
})




tanjiro.addEventListener('click', function(){
    removeAnimeBg()
    nezukomp4.classList.toggle('hide')
    
    
    timer.style.color = "#FFFEFD"
   
    
    svgElementPlay.style.fill = '#FFFEFD'
    svgElementPause.style.fill = '#FFFEFD'
    svgElementStop.style.fill = '#FFFEFD'
    svgElementSum.style.fill = '#FFFEFD'
    svgElementSub.style.fill = '#FFFEFD'

   
})

natsu.addEventListener('click', function(){
    removeAnimeBg()
    natsump4.classList.toggle('hide')
    timer.style.color = "#B73829"


    svgElementPlay.style.fill = '#F8D15E'
    svgElementPause.style.fill = '#F8D15E'
    svgElementStop.style.fill = '#F8D15E'
    svgElementSum.style.fill = '#F8D15E'
    svgElementSub.style.fill = '#F8D15E'
})

    
 


const changeTheme = document.querySelector(".circle")
const animeTheme = document.querySelector(".cards")
const standardTheme = document.querySelector(".cards2")

const forestCard = document.querySelector("#forest")
const rainCard = document.querySelector("#rain")
const marketCard = document.querySelector("#market")
const fireCard = document.querySelector("#fire")

const forestmp3 = new Audio("./audio/Floresta.mp3")
const coffeemp3 = new Audio("./audio/Cafeteria.mp3")
const fireplacemp3 = new Audio("./audio/Lareira.mp3")
const rainmp3 = new Audio("./audio/Chuva.mp3")


changeTheme.addEventListener('click', function(){
    removeAnimeBg()
    animeTheme.classList.toggle('hide')
    standardTheme.classList.toggle('hide')
    stopAllMp3Standard()
})

function stopAllMp3Standard(){
    forestmp3.pause()
    rainmp3.pause()
    coffeemp3.pause()
    fireplacemp3.pause()
}

forestCard.addEventListener('click', function(){
    forestmp3.play()
})

rainCard.addEventListener('click', function(){
    rainmp3.play()
})

marketCard.addEventListener('click', function(){
    coffeemp3.play()

})

fireCard.addEventListener('click', function(){
    fireplacemp3.play()
})



//const blackrovermp3 = new Audio("./audio/blackrover.mp3")

