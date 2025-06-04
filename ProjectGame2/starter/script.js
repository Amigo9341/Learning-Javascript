'use strict';
const player0 = document.querySelector('.player--01');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0 = document.getElementById('.current--0');
const current1 = document.getElementById('.current--1');
const dice1 = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');




const init = function () {


    let scores = [0, 0];
    let currentScore = 0;
    let activePlayer = 0;
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;

    dice1.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--winner');
}
init();

const playing = true;
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
    if (playing) {
        const dice = math.trunc(math.random() * 6) + 1;
        dice1.classList.remove('hidden');
        dice1.src = `dice-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;
            // current0.textContent = currentScore;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
})
btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            dice1.classList.add('hidden');
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        } else {
            switchPlayer();
        }
    }
})
btnNew.addEventListener('click', init)

