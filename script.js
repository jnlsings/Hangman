const wordBank = [
  'alto',
  'soprano',
  'tenor',
  'baritone',
  'bass',
  'countertenor',
  'contralto',
  'heldentenor',
  'mezzo soprano'
];

const guess = document.querySelector('.letter-guess');
const guessBtn = document.querySelector('.guess-button');

const answer = document.querySelector('.answer');

guessBtn.addEventListener('click', handleGuessBtn);

function handleGuessBtn(event) {
  event.preventDefault();
  for (let i = 0; i < 1; i += 1) {
    let word = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(word);
    let letters = word.split('');
    console.log(letters);
    for (let i = 0; i < letters.length; i++) {
      // store each character in a box
      let space = document.createElement('div');
      space.setAttribute('class', 'letter-holder');
      space.append(letters[i]);
      console.log(space);
      answer.appendChild(space);
    }
  }
}
