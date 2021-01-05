var inputValue = document.getElementById("myInput")
var myArray = ["red","black","yellow","green",]
var i = 0
var btnChange = document.getElementById("btnGo")
var btnChanger = document.getElementById("btnChange")
btnChange.onclick = function(){
    myArray.push(inputValue.value)
    document.body.style.background= myArray[i]
    i++
    if(i == myArray.length){
        i = 0
    }
}

btnChanger.onclick = function(){
    document.body.style.background= myArray[i]
    i++
    if(i == myArray.length){
        i = 0
    }
}