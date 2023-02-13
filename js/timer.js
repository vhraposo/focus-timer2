export { timer}

let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")
let timer = document.querySelector(".timerzone")
let intervalId

    minutes = 25;
    seconds = Number('00');
    timer.innerHTML = String(minutes).padStart(2, "0") + ":" + (seconds < 10 ? "0" : "") + seconds; 

// update the counter
export function updateTimer() {
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

  export  function startTimer() {
        intervalId = setInterval(updateTimer, 1000);
    }
 export   function pauseTimer() {
        clearInterval(intervalId);
    }
export   function resetTimer(){
        minutes = 25
        seconds = Number('01')
        clearInterval(intervalId);
        timer.innerHTML = '25:00'
    
 }

 export function incrementMinutes(){
    minutes += 5
    seconds = 1
    updateTimer()
    
} 

export function decreaseMinutes(){
    minutes >= 5 ? minutes -= 5 : minutes = 0
    seconds = 1
    updateTimer()
}  



