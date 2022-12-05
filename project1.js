let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
let suits = ['♠️', '♣️', '♦️', '♥️']
let deck = []
// const cpuDeck = document.querySelector('.cpu-deck')
// const playerDeck = document.querySelector('.player-deck')
// const playerPlayCard = document.querySelector('.player-play-card')
// const cpuPlayerCard = document.querySelector('.cpu-play-card')
let playerDeck = []
let cpuDeck = []
let pile = []

for (let suitCounter = 0; suitCounter < 4; suitCounter++) {
    for (let valueCounter = 0; valueCounter < 13; valueCounter++){
        let card = {
            face: values[valueCounter] + suits[suitCounter],
            rank: valueCounter + 2,
        }
        deck.push(card)
    }
}

    function shuffleDeck(arr){
        for (let i = deck.length - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const Value = arr[newIndex]
            arr[newIndex] = arr[i]
            arr[i] = Value
        }
        console.log('shuffle')
        return arr
    }


function dealCards() {
    const half = Math.ceil(deck.length / 2)  
    const firstHalf = deck.slice(0, half)
    const secondHalf = deck.slice(half, 52)
    playerDeck.push(...firstHalf)
    cpuDeck.push(...secondHalf)
}

const playerPlayCard = document.querySelector('.player-play-card')

function dealPlayerCard() {
    return playerDeck.pop();
}
function dealCpuCard() {
    return cpuDeck.pop()
}


shuffleDeck(deck)
dealCards()

document.getElementById('player-deck').innerHTML = playerDeck.length
document.getElementById('cpu-deck').innerHTML = cpuDeck.length

function startRound() {
    document.getElementById('player-deck').innerHTML = playerDeck.length
    document.getElementById('cpu-deck').innerHTML = cpuDeck.length
    let card1 = dealPlayerCard()
    let card2 = dealCpuCard()
    pile.push(card1, card2)
    console.log(pile[0], pile[1])
    document.getElementById('playerCard').innerHTML = `Player Card: ${pile[0].face}`
    document.getElementById('CPUCard').innerHTML = `CPU Card: ${pile[1].face}`
        if (card1.rank > card2.rank) {
        playerWins()
     } else if  (card1.rank < card2.rank) {
        cpuWins()
     } else { (card1.rank === card2.rank)
        console.log("War!")
            if(playerDeck.length < 3) {
             return "Player loses"
            } else if (cpuDeck.length < 3) {
                return "CPU loses!"
            } else {
                war()
            }
     }
     if(playerDeck.length == 0) {
        return "Player loses"
       } else if (cpuDeck.length == 0) {
           return "CPU loses!"
       } else {
        console.log('playerdeck', playerDeck.length)
        console.log('cpudeck', cpuDeck.length)
           }
     
}

function playerWins() {
    playerDeck.unshift(...pile)
    pile = []
    document.getElementById('game').innerHTML = "Player has Won the hand"
}

function cpuWins() {
    cpuDeck.unshift(...pile)
    pile = []
    document.getElementById('game').innerHTML = "CPU has Won the hand"
}





function war() {
    pile.push(...playerDeck.splice(playerDeck.length -2))
    pile.push(...cpuDeck.splice(cpuDeck.length -2))
    startRound()
}


