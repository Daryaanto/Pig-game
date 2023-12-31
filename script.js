'use strict';

const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const diceEl =document.querySelector('.dice');
const btnDice=document.querySelector(".btn--roll");
const btnNew=document.querySelector(".btn--new");
const btnHold=document.querySelector(".btn--hold");
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');


let scores;
let currentScore;
let activePlayer;
let playing;


const init = function(){
    scores=[0,0];
    currentScore =0;
    activePlayer =0;
    playing = true;

    score0El.textContent=0;
score1El.textContent=0;
current0El.textContent=0;
current1El.textContent=0;
player0El.classList.remove('player--winner');
player1El.classList.remove('player--winner');
player0El.classList.add('player--active');
player1El.classList.remove('player--active');
diceEl.classList.add('hidden');

}
init();

const playerSwitch = function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
activePlayer=activePlayer===0?1:0;
currentScore=0;
player0El.classList.toggle('player--active');
player1El.classList.toggle('player--active');
}

btnDice.addEventListener('click', function(){
    if(playing){
    let num = Math.floor(Math.random()*6)+1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${num}.png`;

    if(num !==1){
currentScore += num;
document.getElementById(`current--${activePlayer}`).textContent=currentScore;


}
    else{
playerSwitch();
    }
}

});

btnHold.addEventListener('click', function(){
    if (playing){

    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];


    if(scores[activePlayer]>=100){
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    }
    else{
        playerSwitch();
    }

}


})

btnNew.addEventListener('click', init);




