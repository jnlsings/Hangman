const wordBank = [
  'alto',
  'soprano',
  'tenor',
  'baritone',
  'bass',
  'countertenor',
  'contralto',
  'heldentenor',
  'mezzo'
];

const guess = document.querySelector('.letter-guess');
const guessBtn = document.querySelector('.guess-button');

const answer = document.querySelector('.answer');

const input = document.querySelector('.letter-guess');

let guessedLetters = document.querySelector('.guessed-letters');

let guessesSection = document.querySelector('.guesses');

const randomBtn = document.querySelector('.random-word-button');
// to facilitate separating the button functions, declared following variables outside function at Jared Morgan's suggestion
let word = '';
let letterSpace = '';
let letters = '';
let graphicText = document.querySelector('.graphic-text');

guessedLetters = [];

randomBtn.addEventListener('click', handleRandomBtn);

guessBtn.addEventListener('click', handleGuessBtn);

/**function called renderLetters - job to paint hidden letters on page
 * invoked when first load the page
 * when user guesses letter,
 *
 * pass letter to the function
 *
 *
 *
 * and it will figure out which characters to hide and which to show
 * need some way of deleting the old dom elements from the page
 *
 */

function handleRandomBtn(event) {
  event.preventDefault();
  word = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(word);
  for (let i = 0; i < 1; i += 1) {
    letters = word.split('');
    console.log(letters);
  }
}
