'use strict';

/* //////////// Project #1: Guess My Number! //////////////////////////

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '👍 Correct Number!';
document.querySelector('.message').innerHTML = '👍 Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 23;
document.querySelector('.guess').value = 23; 

/////////////// Handling Click Events /////////////////////////////////

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let scoree = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = '👎 No Number';
    displayMessage('👎 No Number');
  } else if (guess === secretNumber) {
    // document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent = '👍 Correct Number!';
    displayMessage('👍 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    /////// Implementing high Score ///////////

    if (scoree > highscore) {
      highscore = scoree;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  /////////////  Refractering code
  else if (guess !== secretNumber) {
    if (scoree > 1) {
      // document.querySelector('.message').textContent = '🙌 Too high!';
      displayMessage(guess > secretNumber ? '🙌 Too high!' : '🙌 Too Low!');

      scoree--;
      document.querySelector('.score').textContent = scoree;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game! ';
      displayMessage('You lost the game! ');

      document.querySelector('.score').textContent = 0;
    }
  }

  // else if (guess > secretNumber) {
  //   if (scoree > 1) {
  //     document.querySelector('.message').textContent = '🙌 Too high!';
  //     scoree--;
  //     document.querySelector('.score').textContent = scoree;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game ';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (scoree > 1) {
  //     document.querySelector('.message').textContent = '🙌 Too Low!';
  //     scoree--;
  //     document.querySelector('.score').textContent = scoree;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game ';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

////////////// Coding Chanllenge #1 //////////////////////////////////////

document.querySelector('.again').addEventListener('click', function () {
  scoree = 20;
  document.querySelector('.score').textContent = scoree;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
*/

/////////////// Project #1: Modal Window   ///////////////////////////
