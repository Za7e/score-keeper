const scoreTotal = document.querySelector('.scoreSelector');
const btnP1 = document.querySelector('.btn__p1');
const btnP2 = document.querySelector('.btn__p2');
const btnReset = document.querySelector('.btn__reset');
const scoreTrack = document.querySelectorAll('h2');
const spanP1 = document.querySelector('.span__P1');
const spanP2 = document.querySelector('.span__P2');
let scoreP1 = 0;
let scoreP2 = 0;

btnP1.addEventListener('click', function () {
    scoreP1 += 1;
    spanP1.innerHTML = `${scoreP1}`;
    if (scoreP1 == scoreTotal.value) {
        spanP1.style.color = 'green';
        spanP2.style.color = 'red';
        endgame();
    }
});

btnP2.addEventListener('click', function () {
    scoreP2 += 1;
    spanP2.innerHTML = `${scoreP2}`;
    if (scoreP2 == scoreTotal.value) {
        spanP2.style.color = 'green';
        spanP1.style.color = 'red';
        endgame();
    }
});

btnReset.addEventListener('click', function () {
    resetGame();
});

endgame = () => {
    btnP1.disabled = true;
    btnP2.disabled = true;
    btnP1.style.backgroundColor = 'rgba(66, 190, 66, 0.5)';
    btnP2.style.backgroundColor = 'rgba(43, 159, 231, 0.5)';
}

resetGame = () => {
    btnP1.disabled = false;
    btnP2.disabled = false;
    btnP1.style.backgroundColor = 'rgb(66, 190, 66)';
    btnP2.style.backgroundColor = 'rgb(43, 159, 231)';
    scoreP1 = 0;
    scoreP2 = 0;
    spanP1.innerHTML = `${scoreP1}`;
    spanP1.style.color = 'black';
    spanP2.innerHTML = `${scoreP2}`;
    spanP2.style.color = 'black';
}



