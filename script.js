const message = document.getElementById('message');
const winner = document.getElementById('winner');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playerPoints = document.getElementById('player-score');
const machinePoints = document.getElementById('machine-score');
const start = document.getElementById('start');
const reset = document.getElementById('reset');

let isGameRunning = false;
let playerScore = 0;
let machineScore = 0;

message.textContent = "Press the play button to start a five rounds match.";

playerPoints.addEventListener('change', score);
machinePoints.addEventListener('change', score);

start.addEventListener('click', game);;
reset.addEventListener('click', resetGame);

rock.addEventListener('click', function() {
    playRound(getMachineChoice(), "ROCK");
});

paper.addEventListener('click', function() {
    playRound(getMachineChoice(), "PAPER");
});

scissors.addEventListener('click', function() {
    playRound(getMachineChoice(), "SCISSORS");
});

function getMachineChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    return choices[Math.floor(Math.random() * 3)];
};

function playRound(machineChoice, playerChoice) {
    if (!isGameRunning) {
        message.textContent = "Please start the game!";
        return;
    };
    if (playerChoice === machineChoice) {
        message.textContent = "Draw!";
    } else if (playerChoice === "ROCK") {
        machineChoice === "PAPER" ? (message.textContent = "You Lose! Paper beats Rock", score("machine")) : (message.textContent = "You Win! Rock beats Scissors", score("player"));
    } else if (playerChoice === "PAPER") {
        machineChoice === "SCISSORS" ? (message.textContent = "You Lose! Scissors beats Paper", score("machine")) : (message.textContent = "You Win! Paper beats Rock", score("player"));
    } else {
        machineChoice === "ROCK" ? (message.textContent = "You Lose! Rock beats Scissors", score("machine")) : (message.textContent = "You Win! Scissors beats Paper", score("player"));
    };
};

function game() {
    if (isGameRunning) {
        message.textContent = "The game is already running!";
        return;
    };
    winner.textContent = "";
    message.textContent = "Game started. Make your choice!";
    isGameRunning = true;
};

function score(roundWinner) {
    if (roundWinner === "player") {
        playerScore += 1;
        playerPoints.textContent = playerScore;
    } else {
        machineScore += 1;
        machinePoints.textContent = machineScore;
    };

    if (playerScore === 5) {
        winner.textContent = "Player wins!";
        isGameRunning = false;
        clear();
    } else if (machineScore === 5) {
        winner.textContent = "Machine wins!";
        isGameRunning = false;
        clear();
    };
};

function resetGame() {
    if (!isGameRunning) {
        game();
    }
    message.textContent = "Game reset!";
    clear();
};

function clear() {
    playerScore = 0;
    playerPoints.textContent = "0";
    machineScore = 0;
    machinePoints.textContent = "0";
};