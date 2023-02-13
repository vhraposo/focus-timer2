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



const backToHome = document.querySelector(".home")
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

const selectAnimeTheme = document.querySelector(".theme1")
const selectStandardTheme = document.querySelector(".theme2")
const selectTheme = document.querySelector(".changeTheme")
const containerTimer = document.querySelector(".container")
const lightModeActive = document.querySelector(".light-mode")
const darkModeActive = document.querySelector(".dark-mode")
const titleTheme = document.querySelector(".title-theme")

const volup = document.querySelector(".volup")
const voldown = document.querySelector(".voldown")



export{
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
    forestmp3,
    coffeemp3,
    fireplacemp3,
    rainmp3,
    selectAnimeTheme,
    selectStandardTheme,
    selectTheme,
    containerTimer,
    lightModeActive,
    darkModeActive,
    titleTheme,
    volup,
    voldown
}