const resultado = document.querySelector(".resultado")
const react = document.querySelector(".reação")
const meuResult = document.querySelector("#meuResultado")
const masterResultado = document.querySelector("#masterResultado")

let humanResultado = 0
let masterResult = 0




const playHuman = (escolhaHumano) => {

    playTheGame(escolhaHumano, playMaster() )
}

const playMaster = () => {
    const opcoes = ["Pedra", "Papel", "Tesoura"]
    const numeroAleatorio = Math.floor(Math.random() * 3)

    return opcoes[numeroAleatorio]

}

const playTheGame = (human, master) => {

    console.log('Humano: ' + human + "Master: " + master)

    if(human === master){
        resultado.innerHTML = "Empataram!"
        react.innerHTML = "&#x1F62C;"
   
    } else if(human === "Pedra" && master === "Tesoura" || human === "Tesoura" && master === "Papel" 
    || human === "Papel" && master === "Pedra") {
        
        resultado.innerHTML = "Você ganhou!"
        react.innerHTML = "&#x1F606;"
        humanResultado++
        meuResult.innerHTML = humanResultado
        


    } else {
        resultado.innerHTML = "Você perdeu para o Master!"
        react.innerHTML = "&#x1F916;"
        masterResult++
        masterResultado.innerHTML = masterResult
    }



}


























