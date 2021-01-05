var inputValue = document.getElementById("myInput")
var btnSearch = document.getElementById("btnSrch")
btnSearch.onclick = ()=>{
    getData()
    document.getElementById("display").innerHTML = ""
}
async function getData(){
    var value = inputValue.value
    var response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=58QYDSCXwei6MNyKaeaezUQwMnW9lsOR&limit=25&offset=0&rating=g&lang=en&q=" + value )
    var responseData = await response.json()
    var myArray =responseData.data
    for(var n = 0 ; n < myArray.length ; n++){
        var img = document.createElement("img")
        img.className ="imgA"
        img.src = responseData.data[n].images.downsized.url
       document.getElementById("display").append(img)
    }
}
