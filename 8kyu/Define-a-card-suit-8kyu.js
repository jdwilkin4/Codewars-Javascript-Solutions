/*
You get any card as an argument. Your task is to return a suit of this card.
Our deck (is preloaded):
deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
        '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'       
*/

//Solution
const defineSuit = (card) => {
  if(card.endsWith('♣')){
    return 'clubs'
  }else if(card.endsWith('♦')){
    return 'diamonds'
  }else if(card.endsWith('♥')){
    return 'hearts'
  }else{
    return 'spades'
  }
}

//tests
describe("Basic tests",() => {
  Test.assertEquals(defineSuit('3♣'), 'clubs');
  Test.assertEquals(defineSuit('Q♠'), 'spades');
  Test.assertEquals(defineSuit('9♦'), 'diamonds');
  Test.assertEquals(defineSuit('J♥'), 'hearts');
});
