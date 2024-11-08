let velocidade = localStorage.getItem("nivel") 

let clicou = true;
let score = 0
let vidas = 3

let body = document.querySelector("body")
 
let img = document.createElement("img")
img.src="../img/mosquito.png"
img.style.position = "absolute"
 
 
function alteraTamanhoMosquito(){
    //numero * (max - min) + min
   let numeroAleatorio = Math.random() * 0.35;
   img.style.transform = `scale(${numeroAleatorio + 0.1})`
}
 
function geraPosicao(){
    let y = Math.random() * (window.innerHeight * 0.50)
    let x = Math.random() * (window.innerWidth * 0.60)

    img.style.top = `${y}px`
    img.style.left = `${x}px`
}
 
img.addEventListener("click", function(){
    clicou = true
    img.remove()
    ganharPonto()
})

function ganharPonto(){
    score += 100
    let domScore = document.getElementById("score-real")
    domScore.innerText = score
}

setInterval(function(){
    alteraTamanhoMosquito()
    geraPosicao()

    body.appendChild(img)

    if(!clicou){
        
        vidas--

        if(vidas == 2){
            let hat3 = document.getElementById("hat_3")
            hat3.src = "img/coracao-vazio.png"
        }

        else if(vidas == 1){
            let hat2 = document.getElementById("hat_2")
            hat2.src = "img/coracao-vazio.png"
        }

        else if(vidas == 0){
            let hat1 = document.getElementById("hat_1")
            hat1.src = "img/coracao-vazio.png"

            localStorage.setItem(
                'score',
                {
                    lastScore: score
                }
            )

            setTimeout(function(){
                location.href = "gameover.html"
            }, 1200)
        }
    }

    clicou = false
 
}, 500 * velocidade)
 
