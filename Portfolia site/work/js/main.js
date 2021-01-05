let btnMenu = document.getElementById("btnmenu")

btnMenu.onclick =()=>{
    var x = document.getElementById("video")
        if(status == false){
            alert("Дуу сонсох уу ?")
            status = true
            x.play()
        }
        else{
            alert("Дууг зогсоох уу ?")
            x.pause()
            status = false
        }
}

