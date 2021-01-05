let btnStart = document.getElementById("start")
let btnStop = document.getElementById("stop")
let btnReset = document.getElementById("reset")
let btnLap = document.getElementById("lap")
var tens = document.getElementById("tens")
var seconds = document.getElementById("seconds")
var minute = document.getElementById("minute")
var t = 0
var s = 0
var m = 0
var n = 1
var interval
function timer() {
    interval = setInterval(startTimer,10)
}
function startTimer() {
    tens.innerHTML = t
    t++
    if(t < 10){
        tens.innerHTML = "0" + t
    }
    if(t == 100){
        seconds.innerHTML = s
        s++
        t = 0
    }
    if(s < 10){
        seconds.innerHTML = "0" + s
    }
    if(s == 60){
        minute.innerHTML =  m
        m++
        s = 0
    }
    if(m < 10){
        minute.innerHTML = "0" + m
    }
}
btnStart.onclick = ()=>{
   timer()
}
btnStop.onclick = ()=>{
    clearInterval(interval)
    interval = 0
}
btnReset.onclick = ()=>{
t = 0
s = 0
m = 0
tens.innerHTML = "00"
seconds.innerHTML ="00"
minute.innerHTML = "00"
}
btnLap.onclick = ()=>{
    var myDiv = document.createElement("div")
    myDiv.className = 'myDiv'
    var number = document.createElement("div")
    number.className = "number"
    number.innerHTML = n
    n++
    var display = document.createElement("div")
    display.className = "display"
    display.innerHTML = minute.innerHTML + ":" + seconds.innerHTML + ":" + tens.innerHTML;
    myDiv.append(number,display)
   document.getElementById("Laps").appendChild(myDiv)

}