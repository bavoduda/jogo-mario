const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const gameOverText = document.getElementById('game-over');

let isGameOver = false;
let loop;

const pulo = () => {
    if (isGameOver) return; 

    mario.classList.add('pulo');

    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 500);
};

const startGame = () => {
    startButton.style.display = 'none'; 
    isGameOver = false;
    
    loop = setInterval(() => {
        const tuboPosition = tubo.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (tuboPosition <= 120 && tuboPosition > 0 && marioPosition < 80) {
            tubo.style.animation = 'none';
            tubo.style.left = `${tuboPosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './img/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            clearInterval(loop);
            isGameOver = true;

            gameOverText.style.display = 'block'; 
            restartButton.style.display = 'block';
        }
    }, 10);
};

const restartGame = () => {
    location.reload(); 
};

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);
document.addEventListener('keydown', pulo);
