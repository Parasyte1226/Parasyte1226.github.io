var btnChanger = document.getElementById("btnChange")
var btnStop = document.getElementById("btnStop")
var time
var img = ["url('z1.jpg')","url('z2.jpg')","url('z3.jpg')","url('z4.jpg')"]
var n = 0
btnChanger.onclick = () =>{
    run()
}
function run() {
    time = setInterval(bkR,3000)
}
function bkR() {
    document.body.style.backgroundImage = img[n]    
    n++
    if(n == img.length +1){
        n = 0
    }
}
btnStop.onclick = () =>{
    clearInterval(time)
}
