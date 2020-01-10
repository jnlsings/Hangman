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

// answer.style.visibility = 'hidden';

const input = document.querySelector('.letter-guess');

let guessedLetters = document.querySelector('.guessed-letters');

let guessesSection = document.querySelector('.guesses');

let graphicText = document.querySelector('.graphic-text');

const randomBtn = document.querySelector('.random-word-button');
// to facilitate separating the button functions, declared following variables outside function at Jared Morgan's suggestion
let word = '';
let letterSpace = '';
let letters = '';
let holder = '';

guessedLetters = [];

guessBtn.addEventListener('click', handleGuessBtn);
// take input value on enter key
input.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    guessBtn.click();
  }
});

word = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(word);
for (let i = 0; i < 1; i += 1) {
  letters = word.split('');
  console.log(letters);
}
// created separate renderLetters function at Hou's suggestion
function renderLetters() {
  for (let i = 0; i < letters.length; i++) {
    // create div + store each character in one
    letterSpace = document.createElement('div');
    letterSpace.setAttribute('class', 'letter-holder');
    // at Jerrica's suggestion, added new class to letterSpace to be able to find all matching values in following function
    letterSpace.classList.add(letters[i]);
    letterSpace.append(letters[i]);
    // attach character divs to answer
    answer.appendChild(letterSpace);
    letterSpace.style.display = 'inline';
  }
}

function checkLetter(letter) {
  holder = document.querySelectorAll('.letter-holder');
  for (let i = 0; i < holder.length; i++) {
    if (holder[i].classList[1] === letter) {
      holder[i].style.backgroundColor = 'oldlace';
    }
  } // invoked youWin here at Hou's suggestion
  youWin();
}

function youWin() {
  allSpaces = document.querySelectorAll('.letter-holder');
  for (let i = 0; i < allSpaces.length; i++) {
    if (allSpaces[i].style.backgroundColor !== 'oldlace') {
      return;
    }
  }
  graphicText.innerText = 'You Win';
  return;
}

function deleteLetterSpaces() {
  let child = answer.firstElementChild;
  while (child) {
    answer.removeChild(child);
    child = answer.firstElementChild;
  }
}
deleteLetterSpaces();

renderLetters();

function handleGuessBtn(event) {
  event.preventDefault();
  // moved .push and .append above for loop @ Jerrica Bobadilla's suggestion
  guessedLetters.push(input.value);
  guessesSection.append(input.value);

  for (let i = 0; i < letters.length; i++) {
    if (letters.includes(input.value)) {
      checkLetter(input.value);
      letterSpace.style.display = 'inline';
    } // changed !== to ! since includes auto evaluates to boolean re: hou's suggestion
    if (!letters.includes(input.value)) {
      console.log('Try Again');
    }
  }
}
