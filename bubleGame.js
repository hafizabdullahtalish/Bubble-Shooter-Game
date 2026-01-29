
let numberContainer = document.querySelector('.numberContainer')
let timerValue = document.querySelector('.timerValue')
let targetValue = document.querySelector('.targetValue')
let scoreValue = document.querySelector('.scoreValue')
let numberOfCircle = 69
let timer = 5
let Target;

generatetarget()
 generateTimer()
 generateNumber()

function restartGame(){
     numberContainer.innerHTML=``
    generatetarget()
     generateTimer()
    generateNumber()
    scoreValue.innerText=`0`
}

restartGame()

function generateTimer(){
   timer=5
}


 setInterval(() => {
    if (timer <= 0) {
        numberContainer.innerHTML=`
        Game Over
        <button onclick=restartGame()>Restart Game</button>
        Final Score ${scoreValue.innerText}
        `
        return;
    }
    timer--;
    timerValue.innerText = timer;
}, 1000)


function generateNumber(){
    for (let i = 1; i <= numberOfCircle; i++) {
    let divElem = document.createElement('div')
    divElem.className = 'circle'
    let number = Math.ceil(Math.random() * 10)
    divElem.innerText = number
    numberContainer.append(divElem)
}}



function generatetarget(){
    Target= Math.ceil(Math.random() * 10)
    targetValue.innerText=Target
}


numberContainer.addEventListener('click', function (event) {
    if (event.target.className = 'circle') {
        let number = Number(event.target.innerText)
        console.log('Number :',number)
        if (Target === number) {
            generateTimer()
            let sv=Number(scoreValue.innerText)
            sv+=10
            scoreValue.innerText=sv
        }
        generatetarget()
    }
})
