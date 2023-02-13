import {updateTimer, startTimer, pauseTimer, resetTimer, incrementMinutes, decreaseMinutes, timer } from './timer.js'
import{toggleForestMp3, toggleRainMp3, toggleMarketMp3, toggleFireplaceMp3, setVolume, stopAllMp3,stopAllMp3Standard,isPlaying, isPlayingToFalse}from './sounds.js'

import{
    play,
    pause,
    stop,
    sum,
    sub,
    svgElementPlay,
    svgElementPause,
    svgElementStop,
    svgElementSum,
    svgElementSub,
        
    naruto,
    natsu,
    tanjiro,
    nero,
    buttonPressAudio,
    samidaremp3,
    tanjiromp3,
    fairytailmp3,
    blackrovermp3,
    nezukomp4,
    natsump4,
    narutomp4,
    blackmp4,
    narutovolume,
    narutovolumedown,
    natsuvolume,
    natsuvolumedown,
    tanjirovolume,
    tanjirovolumedown,
    nerovolume,
    nerovolumedown,
    backToHome,
    animeTheme,
    standardTheme,
    forestCard,
    rainCard,
    marketCard,
    fireCard,
    selectAnimeTheme,
    selectStandardTheme,
    selectTheme,
    containerTimer,
    lightModeActive,
    darkModeActive,
    titleTheme,
    volup,
    voldown
}from "./elements.js"




let volume_slider = document.querySelector(".slider input[type='range']");
let volume_display = document.querySelector(".sliderValue");

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

play.addEventListener('click', function(){
    play.classList.toggle('hide')
    pause.classList.toggle('hide')
    buttonPressAudio.play()
    startTimer()
    
})


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
    allVolumesdown()
})

stop.addEventListener('click', function(){
     buttonPressAudio.play()
     resetTimer()
     stopAllMp3()
     if(updateTimer) {
        pause.classList.add('hide')
        play.classList.remove('hide')
     }

     allVolumesdown()
     
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

function removeAllStandardClicksOnCard(){
    document.querySelector('#colorfill').classList.remove('colorfillchange')
    document.querySelector('#colorfill2').classList.remove('colorfillchange')
    document.querySelector('#colorfill3').classList.remove('colorfillchange')
    document.querySelector('#colorfill4').classList.remove('colorfillchange')

}


forestCard.addEventListener('click', function(){
  
    stopAllMp3Standard()
    isPlayingToFalse()
    toggleForestMp3()
    removeAllStandardClicksOnCard()
    document.querySelector('#colorfill').classList.toggle('colorfillchange')   
    
})



rainCard.addEventListener('click', function(){
    stopAllMp3Standard()
    isPlayingToFalse()

    toggleRainMp3()
    
    removeAllStandardClicksOnCard()
    document.querySelector('#colorfill2').classList.toggle('colorfillchange')

})

marketCard.addEventListener('click', function(){
    stopAllMp3Standard()
    isPlayingToFalse()

    toggleMarketMp3()
   
    removeAllStandardClicksOnCard()
    document.querySelector('#colorfill3').classList.toggle('colorfillchange')
})

fireCard.addEventListener('click', function(){
    stopAllMp3Standard()
    isPlayingToFalse()

    toggleFireplaceMp3()
    
    removeAllStandardClicksOnCard()
    document.querySelector('#colorfill4').classList.toggle('colorfillchange')

})





selectAnimeTheme.addEventListener('click', function(){

    selectTheme.classList.add('hide')
    containerTimer.classList.remove('hide')
    backToHome.classList.remove('hide')
    removeAllStandardChanges()
    document.body.style.setProperty('--bg-color-primary', 'white')
    animeTheme.classList.remove('hide')
    standardTheme.classList.add('hide')

})

selectStandardTheme.addEventListener('click', function(){
    selectTheme.classList.add('hide')
    containerTimer.classList.remove('hide')
    animeTheme.classList.add('hide')
    backToHome.classList.remove('hide')

    standardTheme.classList.remove('hide')
    lightModeActive.classList.remove('hide')
    
})

backToHome.addEventListener('click', function(){
    stopAllMp3()
    removeAllStandardChanges()
    removeAnimeBg()
    stopAllMp3Standard()
    containerTimer.classList.add('hide')
    selectTheme.classList.remove('hide')
    animeTheme.classList.add('hide')
    standardTheme.classList.add('hide')

})




lightModeActive.addEventListener('click', function(){
    lightModeActive.classList.add('hide')
    darkModeActive.classList.remove('hide')
    document.body.style.setProperty('--bg-color-primary', 'black')
    timer.style.setProperty('color', 'white')
    setAllButtonsWhite()
    titleTheme.style.setProperty('color', 'white')
    
    
})

darkModeActive.addEventListener('click', function(){
    lightModeActive.classList.remove('hide')
    darkModeActive.classList.add('hide')
    document.body.style.setProperty('--bg-color-primary', 'white')
    timer.style.setProperty('color', 'black')
    setAllButtonsBlack()
    titleTheme.style.setProperty('color', 'black')

  

})

function removeAllStandardChanges(){
    darkModeActive.classList.add('hide')
    lightModeActive.classList.add('hide')

}


function setAllButtonsBlack(){
    svgElementPlay.style.fill = 'black'
    svgElementPause.style.fill = 'black'
    svgElementStop.style.fill = 'black'
    svgElementSum.style.fill = 'black'
    svgElementSub.style.fill = 'black'
}

function setAllButtonsWhite(){
    svgElementPlay.style.fill = 'white'
    svgElementPause.style.fill = 'white'
    svgElementStop.style.fill = 'white'
    svgElementSum.style.fill = 'white'
    svgElementSub.style.fill = 'white'
}






