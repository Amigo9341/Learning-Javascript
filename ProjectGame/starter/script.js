'use strict';

// document.querySelector('.number').textcontent = 18;
// document.querySelector('.message').textContent = 'Correct Answer 🥳';
// document.querySelector('.score').textContent = 15;
// document.querySelector('.guess').value = 5;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.highscore').textContent = 9;

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(`${guess}`);
    if (document.querySelector('.guess').value === '') {
        document.querySelector('.message').textContent = '⛔ No Value Entered!'

    } else if (guess > secretNum) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High!'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!😫'
            document.querySelector('.score').textContent = 0;
        }

    } else if (guess < secretNum) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low!'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!😫'
            document.querySelector('.score').textContent = 0;
        }

    } else if (guess === secretNum) {
        document.querySelector('.message').textContent = 'Correct Answer 🥳'
        document.querySelector('.number').textContent = secretNum;
        document.querySelector('body').style.backgroundColor = ' #60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score >= highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }


})
document.querySelector('.again').addEventListener('click', function () {


    document.querySelector('.message').textContent = 'Start Guessing 🤔';
    document.querySelector('.score').textContent = 0;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = ' #222';
    document.querySelector('.number').style.width = '15rem';

})








