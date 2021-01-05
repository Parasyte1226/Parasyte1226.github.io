var menuBtn = document.getElementById("menu")
menuBtn.onclick = () =>{
    var x = document.getElementById("first");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
    }