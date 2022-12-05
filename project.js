// const canvas = document.getElementById("gameBoard");
// const ctx = canvas.getContext("2d");

// ctx.fillStyle = "black";
// ctx.fill(0, 0, canvas.width, canvas.height);



const suit = ['Diamonds', 'Hearts', 'Spades', 'Clubs']
const value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const newDeck = []

class Deck {
    constructor (cards = fullDeck()) {
        this.cards = cards
    }
}

class Cards { 
    constructor(suit, value) {
    this.suit = suit
    this.value = value
    }
}
function fullDeck() {
    return suit.flatMap(suit => {
        return value.map(value => {
             
             return new Cards(suit, value);
         
        })
    })
}

function shuffleDeck(fullDeck)  {
    for (let i = 0; i < fullDeck.length; i++) {
        let x = Math.floor(Math.random() * fullDeck.length);
        newDeck.push(fullDeck[x])
    }
}

console.log(uniquearr)

// arr.forEach((element, index) => {
//     console.log(`${element} - ${index} - ${arr.indexOf(element)}`)
// })








// const randomCard = fullDeck()[Math.floor(Math.random() * fullDeck().length)]
//Push randomCard into new array 52 times while removing that same randomCard from original deck fullDeck()

// console.log(randomCard)
// console.log(shuffleDeck())

// function newDeck() {
//     for(let i = randomCard; i < )
// }




