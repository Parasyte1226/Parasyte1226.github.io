var inputValue = document.getElementById("myInput").value
var myArray = ["red","black","yellow","green",]
var i = 0
var btnChange = document.getElementById("btnGo")
btnChange.onclick = function(){
    document.body.style.background= myArray[i]
    i++
    if(i == myArray.length){
        i = 0
    }
}