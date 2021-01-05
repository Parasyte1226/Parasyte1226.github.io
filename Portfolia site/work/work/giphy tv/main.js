var n = 0
function onloadTv(){
getData()
   
}
$(document).ready(function() {
    setInterval(function() {
      cache_clear()
    }, 5000);
  });
  
  function cache_clear() {
    window.location.reload(true);
  }
async function getData(){
    var response = await fetch("https://api.giphy.com/v1/gifs/random?api_key=58QYDSCXwei6MNyKaeaezUQwMnW9lsOR&tag=memes&rating=r")
    var responseData = await response.json()
    console.log(responseData)
    var myArray =responseData.data
    var img = document.createElement("img")
    img.className ="imgA"
            img.src = responseData.data.images.downsized.url
            
                document.getElementById("display").append(img)
}
