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

const guessedLetters = document.querySelector('.guessed-letters');

const randomBtn = document.querySelector('.random-word-button');

randomBtn.addEventListener('click', handleRandomBtn);

// guessBtn.addEventListener('click', handleGuessBtn);

// create function that when random button is pressed, random word is generated from wordBank and stored as an array of characters each in its own div, but hidden
function handleRandomBtn(event) {
  event.preventDefault();
  let word = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(word);

  //   function handleGuessBtn(event) {
  for (let i = 0; i < 1; i += 1) {
    let letters = word.split('');
    console.log(letters);

    for (let i = 0; i < letters.length; i++) {
      // create div + store each character in one

      let letterSpace = document.createElement('div');
      letterSpace.setAttribute('class', 'letter-holder');
      letterSpace.append(letters[i]);
      // attach character divs to answer
      answer.appendChild(letterSpace);
      letterSpace.style.display = 'inline';
      //   letterSpace.hide();

      if (letterSpace.innerText === input.value) {
        letterSpace.style.backgroundColor = 'white';
        // change display of that letter only to block
        // letters[i].style.visibility = 'visible';
      } else if (letterSpace.innerText !== input.value) {
        console.log('Try Again');
      }
    }
    guessedLetters.append(input.value);

    // function handleGuessBtn(event) {
    //   event.preventDefault();
  }
}
// }
