const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondsEl = document.querySelector('.seconds')
const millisecondEl = document.querySelector('.milliseconds')


const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const lapBtn = document.querySelector('.lap')
let laps = 0;
startBtn.addEventListener('click',()=>{
    clearInterval(interval);
    interval = setInterval(startTimer,10)
})
pauseBtn.addEventListener('click',()=>{
    clearInterval(interval)
})
stopBtn.addEventListener('click',()=>{
        hour = 0,
        minute = 0,
        seconds = 0,
        milliseconds = 0,
        interval
    hourEl.innerHTML = '00'
    minuteEl.innerHTML = '00'
    secondsEl.innerHTML = '00'
    millisecondEl.innerHTML = '00'
    clearInterval(interval)
})
lapBtn.addEventListener('click',()=>{
    laps++
    const results =document.querySelector('.results')
    const block = document.createElement('div')
    block.innerText = `Lap ${laps}: ${hour}:${minute}:${seconds}:${milliseconds}`
    results.append(block)
})
let hour = 0,
    minute = 0,
    seconds = 0,
    milliseconds = 0,
    interval

function startTimer(){
    milliseconds++
    if(milliseconds < 9){
        millisecondEl.innerHTML = "0" + milliseconds
    }else millisecondEl.innerHTML = milliseconds
    if(milliseconds > 99){
        seconds++
        secondsEl.innerHTML = "0" + seconds
        milliseconds = 0;
        millisecondEl.innerHTML = "0" + milliseconds
    }

    if(seconds <= 9){
        secondsEl.innerHTML = "0" + seconds
    }else secondsEl.innerHTML = seconds;
    if(seconds > 59){
        minute++
        minuteEl.innerHTML = "0" + minute
        seconds = 0;
        secondsEl.innerHTML = "0" + seconds
    }
}
