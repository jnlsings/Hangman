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
// to facilitate separating the button functions, declared following variables outside function at Jared Morgan's suggestion
let word = '';
let letterSpace = '';
let letters = '';

randomBtn.addEventListener('click', handleRandomBtn);

guessBtn.addEventListener('click', handleGuessBtn);

// create function that when random button is pressed, random word is generated from wordBank and stored as an array of characters each in its own div, but hidden
function handleRandomBtn(event) {
  event.preventDefault();
  word = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(word);
  for (let i = 0; i < 1; i += 1) {
    letters = word.split('');
    console.log(letters);

    for (let i = 0; i < letters.length; i++) {
      // create div + store each character in one

      letterSpace = document.createElement('div');
      letterSpace.setAttribute('class', 'letter-holder');
      letterSpace.append(letters[i]);
      // attach character divs to answer
      answer.appendChild(letterSpace);
      letterSpace.style.display = 'inline';
    }
  }
}

function handleGuessBtn(event) {
  event.preventDefault();
  for (let i = 0; i < letters.length; i++) {
    if (letters[i].includes(input.value) === true) {
      console.log('yes');
      // letterSpace.innerText = input.value;
      letterSpace.style.backgroundColor = 'white';
      letterSpace.style.display = 'inline';
      return;
      // change display of that letter only to be visible
      // letters[i].style.visibility = 'visible';
    } else if (letters[i] !== input.value) {
      console.log('Try Again');
      // return;
    }
    guessedLetters.append(input.value);
  }
  // if (guessedLetters.append(input.value) === true) {
  // }
}

// letters.forEach(myFunction);
// function myFunction(item, index) {
//   if (letters.includes(input.value) === true) {
//     letterSpace.style.backgroundColor = 'white';
//     letterSpace.style.display = 'inline';
//   } else if (letters.includes(input.value) === false) {
//     console.log('Try again');
//   }
/** need:
 * function 1:
 *  choose random word from wordBank using randomBtn
 *  split that word into array of letters
 *  create divs for each letter (create                 number of divs corresponding to letters.length)
 *  append each letter to its own div
 *  style of each div should be set to be invisible     (tried display= "none" and did not work, setting    it to inline worked though??)
 *  function 2:
 *  guess letter (input.value) using guessBtn
 *  if input.value is equal to a value in the           letters array (how to access when this was          created inside of function 1????), then reveal      matching values in the array by changing corresponding div display to "inline"
 */
