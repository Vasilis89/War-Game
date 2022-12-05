const NUM_CARDS_IN_DECK = 52;
const NUM_VALUES_IN_DECK = 13;
const NUM_SUITS_IN_DECK = 4;
const NUM_CARDS_IN_HAND = 5;
const ACE_VALUE = Math.pow(2, 13);
const STRAIGHT_LOW_ACE_INDICATOR = parseInt("10000000011110", 2);
const TEN_CARD_POSITION = 8;
const RANK_BASE_VALUE = Math.pow(10, 9);

const buildDeck = () => {
    let deck = Array.from(new Array(NUM_CARDS_IN_DECK), (_, index) => index);
    let count = NUM_CARDS_IN_DECK + 1;
    while ((count -= 1)) {
      deck.push(deck.splice(Math.floor(Math.random() * count), 1)[0]);
    }
    return deck;
  };

  const handDisplay = (hand) => {
    const values = "23456789TJQKA";
    const suits = [`♣︎`, `♦︎`, `♥︎`, `♠︎`];
    return hand
      .reduce((obj, item) => {
        obj.push(
          `${values[item % NUM_VALUES_IN_DECK]}${
            suits[Math.floor(item / NUM_VALUES_IN_DECK)]
          }`
        );
        return obj;
      }, [])
      .join(" ");
  };







const dealCards = (numPlayers, numCardsPerPlayer) => {
    const deck = buildDeck();
    const table = Array.from(new Array(numPlayers), () => []);
    const board = [];
    for (let card = 0; card < numCardsPerPlayer; card += 1) {
      for (let player = 0; player < numPlayers; player += 1) {
        table[player].push(deck.pop());
      }
    }
    deck.pop();
    board.push(deck.pop());
    board.push(deck.pop());
    board.push(deck.pop());
    deck.pop();
    board.push(deck.pop());
    deck.pop();
    board.push(deck.pop());
    return {
      table,
      board,
    };
  };




  // function getRandomSuit(suitArr) {
    const randomIndex = Math.floor(Math.random() * suitArr.length);
    const suit = suitArr[randomIndex];
        return suit;
}

const suitArr = ['Diamond', 'Heart', 'Spade', 'club'];

const result = getRandomSuit(suitArr);

function getRandomCardValue(valueArr) {
    const randomIndex = Math.floor(Math.random() * valueArr.length);
    const value = valueArr[randomIndex];
        return value
}

const valueArr = ['ace1',2,3,4,5,6,7,8,9,10,'Jack','Queen','King','ace2'];

const randomValue = getRandomCardValue(valueArr);

console.log(getRandomCardValue(valueArr));
console.log(getRandomSuit(suitArr));






console.log(getRandomCardValue(valueArr));
console.log(getRandomSuit(suitArr))