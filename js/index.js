function jogar(){
    let nivel = document.getElementById("nivel").value
    
    if(!nivel){
        nivel = 1
    }
    
    localStorage.setItem("nivel", nivel)
    location.href = "play.html"
}