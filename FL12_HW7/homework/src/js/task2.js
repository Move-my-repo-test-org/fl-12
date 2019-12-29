'use strict'

let begin = confirm('Do you want to play a game?');
if (!begin) {
  alert('You did not become a billionaire, but can.');
}
while (begin) {
    let attempt;
    let maxAttempt = 3;
    let minAttempt = 1;
    let maxPrize = 100;
    let prizeCoef = {
        1: 1,
        2: 2,
        3: 4
    };
    let doublePrize = 2;
    let totalPrize = 0;
    let maxNumber = 8;
    let increaseMaxNumb = 4;
    for (attempt = minAttempt; attempt <= maxAttempt;) {
        let rightNumber = Math.floor(Math.random()*(maxNumber+1));
        let inputNumber = prompt(`Choose a roulette pocket number from 0 to ${maxNumber}
        Attempts left: ${maxAttempt+minAttempt-attempt}
        Total prize: ${totalPrize}$
        Possible prize on current attempt: ${maxPrize/prizeCoef[attempt]}$`, '');
        let toContinue;
        if (Number(inputNumber)===rightNumber) {
            totalPrize = totalPrize + maxPrize/prizeCoef[attempt];
            toContinue = confirm(`Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`);
            if (toContinue) {
                attempt = minAttempt;
                maxPrize *= doublePrize;
                maxNumber += increaseMaxNumb;
            } else if (!toContinue) {
                attempt = maxAttempt+minAttempt;
            }
        } else {
            attempt++;
        }
    }    
    begin = confirm(`Thank you for your participation. Your prize is: ${totalPrize}$. Do you want to play again?`);   
}