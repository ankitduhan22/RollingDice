'use strict';

//Selecting Elements
const player0el = document.querySelector('.player--0');
const player1el = document.querySelector('.player--1');

const score0el = document.querySelector('#score--0');
const score1el = document.querySelector('#score--1');
const currentscore0El = document.querySelector('#current--0');
const currentscore1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting Conditions
let scores, currentscore, activeplayer, playing;

const initial = function () {
    scores = [0, 0];
    currentscore = 0;
    activeplayer = 0;
    playing = true;

    score0el.textContent = 0;
    score1el.textContent = 0;
    currentscore0El.textContent = 0;
    currentscore1El.textContent = 0;


    diceEl.classList.add('hidden');
    player0el.classList.remove('player--winner');
    player1el.classList.remove('player--winner');
    player0el.classList.add('player--active');
    player1el.classList.remove('player--active');
};
initial();





const switchPlayer = function () {
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentscore = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    player0el.classList.toggle('player--active');
    player1el.classList.toggle('player--active');
};

//Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
    //1.Generating a Random Dice Roll
    if (playing) {

        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);

        //2.Display Dice
        diceEl.classList.remove('hidden');
        diceEl.src = ` dice-${dice}.png`;

        //3.CheckFor Rolled 1
        if (dice !== 1) {
            //Add dice to Current Score
            currentscore += dice;

            document.getElementById(`current--${activeplayer}`).textContent = currentscore;

        } else {
            //Switch to Next Player
            switchPlayer();

        }
    }
});
btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activeplayer] += currentscore;
        document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];

        if (scores[activeplayer] >= 100) {
            playing = false;
            document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
        } else
            switchPlayer();
    }
});
btnNew.addEventListener('click', initial);


















