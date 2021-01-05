const container = document.querySelector('.counter')
const buttonsDiv = document.querySelector('.buttons')
const secInput = document.getElementById("seconds")

var seconds ;
var reseconds;
var minute;
var toCount= false
function toSubmit(){
    display('start')
    remove('seconds')
    remove('ok')
    seconds = Number(secInput.value)
    counting()
}
function check(stat){
    toCount = stat.value
    if(stat.id == "start"){
        display("stop")
        remove("start")
    }
    else if(stat.id == "stop"){
        display("continue")
        remove("stop")
    }
    else{
        display("stop")
        remove("continue")
    }
}
function count(){
    if(seconds > 0){
        if(toCount = true){
            seconds--;
            remseconds =seconds % 60
            minute = Math.floor(seconds / 60)
            if(minute < 10){
                minute = "0" + minute
            }
            if(remseconds < 10){
                remseconds = "0" + remseconds
            }
            container.innerHTML = minute + ":" + remseconds   
        }
    }
    else{
        container.innerHTML = "Done !"
    }
}
function display(e){
    document.getElementById(e).style.display = "block"
}
function remove(e){
    document.getElementById(e).style.display = "none"
}
function counting(){
    remseconds =seconds % 60
    minute = Math.floor(seconds / 60)
    if(minute < 10){
        minute = "0" + minute
    }
    if(remseconds < 10){
        remseconds = "0" + remseconds
    }
    container.innerHTML = minute + ":" + remseconds
    setInterval(count,1000)
}