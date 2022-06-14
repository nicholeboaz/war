let computerCardEl = document.getElementById("computer-card-el")
let playerCardEl = document.getElementById("player-card-el")

let computerCardElBottom = document.getElementById("computer-card-el-bottom")
let playerCardElBottom = document.getElementById("player-card-el-bottom")

let computerSuitEl = document.getElementById("computer-suit-el")
let playerSuitEl = document.getElementById("player-suit-el")

let resultTextEl = document.getElementById("result-text-el")
let resultText = " "
let computerCard = {
    num: "",
    suit: "",
    color: ""
}
let playerCard = {
    num: "",
    suit: "",
    color: ""
}

function play() {
    let randomNum1 = Math.floor(Math.random() * 13) + 2
    let randomNum2 = Math.floor(Math.random() * 13) + 2
    let randomSuit1 = Math.floor(Math.random() * 4) + 1
    let randomSuit2 = Math.floor(Math.random() * 4) + 1

    computerCard.num = randomNum1
    playerCard.num = randomNum2
    computerCard.suit = randomSuit1
    playerCard.suit = randomSuit2

    if (randomNum1 === 11) {
        computerCard.num = "J"
    } else if (randomNum1 === 12) {
        computerCard.num = "Q"
    } else if (randomNum1 === 13) {
        computerCard.num = "K"
    } else if (randomNum1 === 14) {
        computerCard.num = "A"
    } else {
        computerCard.num = randomNum1
    }

    if (randomNum2 === 11) {
        playerCard.num = "J"
    } else if (randomNum2 === 12) {
        playerCard.num = "Q"
    } else if (randomNum2 === 13) {
        playerCard.num = "K"
    } else if (randomNum2 === 14) {
        playerCard.num = "A"
    } else {
        playerCard.num = randomNum2
    }

    if (randomSuit1 === 1) {
        /* spade */
        computerCard.suit = "\u2660"
        computerCard.color = "black"
    } else if (randomSuit1 === 2) {
        /* club */
        computerCard.suit = "\u2663"
        computerCard.color = "black"
    } else if (randomSuit1 === 3) {
        /* heart */
        computerCard.suit = "\u2665"
        computerCard.color = "red"
    } else {
        /* diamond */
        computerCard.suit = "\u2666"
        computerCard.color = "red"
    }

    if (randomSuit2 === 1) {
        /* spade */
        playerCard.suit = "\u2660"
        playerCard.color = "black"
    } else if (randomSuit2 === 2) {
        /* club */
        playerCard.suit = "\u2663"
        playerCard.color = "black"
    } else if (randomSuit2 === 3) {
        /* heart */
        playerCard.suit = "\u2665"
        playerCard.color = "red"
    } else {
        /* diamond */
        playerCard.suit = "\u2666"
        playerCard.color = "red"
    }

    if (randomNum1 > randomNum2) {
        resultText = "You lost this round!"
    }
    else if (randomNum1 < randomNum2) {
        resultText = "You won this round!"
    } else {
        resultText = "It's a tie!"
    }

    // console.log(computerCard)
    // console.log(playerCard)
    // console.log(randomNum1)
    // console.log(randomNum2) 

    computerCardEl.textContent = computerCard.num
    playerCardEl.textContent = playerCard.num
    computerSuitEl.textContent = computerCard.suit
    playerSuitEl.textContent = playerCard.suit

    computerCardElBottom.textContent = computerCard.num
    playerCardElBottom.textContent = playerCard.num

    computerCardEl.className = computerCard.color
    playerCardEl.className = playerCard.color

    computerCardElBottom.className = computerCard.color
    playerCardElBottom.className = playerCard.color

    computerSuitEl.className = computerCard.color
    playerSuitEl.className = playerCard.color

    resultTextEl.textContent = resultText
}


