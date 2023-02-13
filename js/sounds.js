import{
    
    samidaremp3,
    tanjiromp3,
    fairytailmp3,
    blackrovermp3,
    forestmp3,
    coffeemp3,
    fireplacemp3,
    rainmp3,
}from "./elements.js"



    

   export function diminuir_volume(){
        if( samidaremp3.volume > 0)  samidaremp3.volume -= 0.9;
        if( tanjiromp3.volume > 0)  tanjiromp3.volume -= 0.9;
        if( fairytailmp3.volume > 0)  fairytailmp3.volume -= 0.9;
        if( blackrovermp3.volume > 0)  blackrovermp3.volume -= 0.9;
    
    }diminuir_volume()
    
    export function audioLoop(){
        samidaremp3.loop = true
        tanjiromp3.loop = true
        fairytailmp3.loop = true
        blackrovermp3.loop = true
    
        forestmp3.loop = true
        coffeemp3.loop = true
        fireplacemp3.loop = true
        rainmp3.loop = true
    }
    audioLoop()
   
    export let isPlaying = false
    export function isPlayingToFalse(){
        isPlaying = false
    }


    export function toggleForestMp3(){
    if (isPlaying){
        forestmp3.pause()
    }else{
        forestmp3.play()
    }

    forestmp3.onplaying = function(){
        isPlaying=true
    }
    forestmp3.onpause = function(){
        forestmp3.currentTime = 0 
        isPlaying = false
    }
}

export function toggleRainMp3(){
    if (isPlaying){
        rainmp3.pause()
    }else{
        rainmp3.play()
    }

    rainmp3.onplaying = function(){
        isPlaying=true
    }
    rainmp3.onpause = function(){
        rainmp3.currentTime = 0 
        isPlaying = false
    }
}

export function toggleMarketMp3(){
    if (isPlaying){
        coffeemp3.pause()
    }else{
        coffeemp3.play()
    }

    coffeemp3.onplaying = function(){
        isPlaying=true
    }
    coffeemp3.onpause = function(){
        coffeemp3.currentTime = 0 
        isPlaying = false
    }
}

export function toggleFireplaceMp3(){
    if (isPlaying){
        fireplacemp3.pause()
    }else{
        fireplacemp3.play()
    }

    fireplacemp3.onplaying = function(){
        isPlaying=true
    }
    fireplacemp3.onpause = function(){
        fireplacemp3.currentTime = 0 
        isPlaying = false
    }
}


const volumeSlider = document.querySelector('.slider_input')
const sliderValue = document.querySelector('.sliderValue')
const sliderProgress = document.querySelector('.slider_progress')

volumeSlider.addEventListener('input',()=>{
    sliderValue.innerHTML = volumeSlider.value
    sliderProgress.value = volumeSlider.value
    setVolume()
})


  
export function setVolume() {
    let volume = volumeSlider.value / 100;
    forestmp3.volume = volume;
    coffeemp3.volume = volume;
    fireplacemp3.volume = volume;
    rainmp3.volume = volume;

    
  }
    







export function stopAllMp3(){
    blackrovermp3.pause()
    samidaremp3.pause()
    tanjiromp3.pause()
    fairytailmp3.pause()
}

export function stopAllMp3Standard(){
    forestmp3.pause()
    rainmp3.pause()
    coffeemp3.pause()
    fireplacemp3.pause()
}

