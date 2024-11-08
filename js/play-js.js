let body = document.querySelector("body")
 
let img = document.createElement("img")
 
img.src="../img/mosquito.png"
img.style.position = "absolute"
 
 
function tamanho(){
   let numero = Math.random() * 0.35;
   img.style.transform = `scale(${numero+0.1})`
}
 
function posicao(){
    let y = Math.random() * (window.innerHeight *0.50)
    let x = Math.random() * (window.innerWidth *0.60)
    img.style.top = `${y}px`
    img.style.left = `${x}px`
}
 
setInterval(function(){
    tamanho()
    posicao()
 
}, 2000)
 
 
//O comando abaixo👇 adiciona um elemento no body que venha do html[h1,div,p]
body.appendChild(img)