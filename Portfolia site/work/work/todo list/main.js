var inputValue = document.getElementById("myInput")
var btnAdd = document.getElementById("btnadd")
var n = 1
btnAdd.onclick = () =>{
     var myDiv = document.createElement("div")
     myDiv.className = "myDiv"
     var number = document.createElement("div")
     number.className = "number"
     number.innerHTML = n 
     n++
     var display = document.createElement("div")
     display.className = "display"
     display.innerHTML = inputValue.value
     var btnClear = document.createElement("button")
     btnClear.innerHTML = "-"
     btnClear.className = "btnC"
     btnClear.onclick = ()=>{
        myDiv.remove()
            if(btnClear){
                n = 1
            }
     }
     myDiv.append(number,display,btnClear)
     document.getElementById("list").append(myDiv)
    
}