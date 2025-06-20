'use strict';
let dicenum = 0;
let currentValue = 0;
let score1 = 0 ;
let score2 = 0 ;
let playing =true;
let winner;

const current1 = document.querySelector('#current--0');
const current2 = document.querySelector('#current--1');


const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let currentplayer = player1;

const scoreE1 = document.querySelector('#score--0');
const scoreE2 = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
// buttons
const btnNewGame  = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold     = document.querySelector('.btn--hold');


// initalize element 
scoreE1.textContent = 0 ;
scoreE2.textContent = 0;
diceEl.classList.add('hidden')

const switchPlayers = function () {
    currentValue = 0;
    current1.textContent = 0;
    current2.textContent = 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
    currentplayer = currentplayer === player1 ? player2 : player1;
};


const resetGame = function (){
    score1=0;
    score2 =0;
    currentValue=0;
    playing = true;
    scoreE1.textContent = 0;
    scoreE2.textContent = 0;
    diceEl.classList.add('hidden');
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    currentplayer = player1;
    document.querySelector('.empty-dice').style.display = 'none';
}
// Roll dice


btnRollDice.addEventListener('click', function(){
        if( !playing ) return;

        dicenum = Math.floor(Math.random() * 6) + 1;

        diceEl.src = `dice-${dicenum}.png`;
        document.querySelector('.empty-dice').style.display = 'none';
        diceEl.classList.remove('hidden');

        if (dicenum == 1) {
            switchPlayers();
        }else {
            currentValue += dicenum;
            if(currentplayer === player1){
                (current1.textContent = currentValue);
            }else{
                (current2.textContent = currentValue); 
            }
        }
    
});

// hold

btnHold.addEventListener('click' , function(){
    if(!playing) return;
    if(currentValue == 0){
        document.querySelector('.empty-dice').style.display = 'flex';
        // switchPlayers();
    }else{
        document.querySelector('.empty-dice').style.display = 'none';
        if(currentplayer == player1){
            score1 += currentValue;
            scoreE1.textContent = score1 ;
        }else{
            score2 += currentValue;
            scoreE2.textContent = score2;
        }

        if(score1 >= 100 ){
            playing = false;
            player1.classList.add('player--winner');
            diceEl.classList.add('hidden');
            current1.textContent=0;
        }else if(score2 >=100){
            playing = false;
            player2.classList.add('player--winner');
            diceEl.classList.add('hidden');
            current1.textContent = 0;
        }else{
            switchPlayers();
        }
    }

});

btnNewGame.addEventListener('click' , resetGame);


