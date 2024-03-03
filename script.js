function startGame() {
    document.getElementById("start-page").classList.add("hidden");
    document.getElementById("game-page").classList.remove("hidden");
}

let playerScore = 0;
let computerScore = 0;

function selectMove(userChoice) {
    document.querySelector('.menu-container').classList.add('hidden');

    const existingUserChoiceImg = document.getElementById('user-choice-img');
    if (existingUserChoiceImg) {
        existingUserChoiceImg.remove();
    }

    const moves = ['rock', 'paper', 'scissors'];
    const computerChoice = moves[Math.floor(Math.random() * moves.length)];
    
    const userChoiceImg = document.createElement('img');
    userChoiceImg.src = `./public/img/${userChoice}.png`;
    userChoiceImg.alt = userChoice;
    userChoiceImg.className = 'sm:size-24 lg:size-64 transform -scale-x-100';
    userChoiceImg.id = 'user-choice-img';

    const userChoiceContainer = document.getElementById('user-choice');
    userChoiceContainer.appendChild(userChoiceImg);

    setTimeout(() => {
        document.getElementById('computer-choice-img').src = `./public/img/${computerChoice}.png`;

        document.getElementById('computer-choice-img').classList.remove('hidden');
    }, 500);     

    document.getElementById('user-choice-span').innerText = userChoice.toUpperCase();
    document.getElementById('computer-choice-span').innerText = computerChoice.toUpperCase();
    document.getElementById('game-result').classList.remove('hidden');

    setTimeout(() => {
        document.getElementById('computer-choice-span').innerText = computerChoice.toUpperCase();
    
        let result = '';
        if (userChoice === computerChoice) {
            result = 'It\'s a DRAW!';
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            result = 'You WIN!';
            playerScore++;
            document.getElementById('player-score-value').innerText = playerScore;
        } else {
            result = 'Computer WINS!';
            computerScore++;
            document.getElementById('computer-score-value').innerText = computerScore;
        }
    
        document.getElementById('result-text').innerText = result;
    
        if (playerScore === 3 || computerScore === 3) {
            document.getElementById('next-round-button').classList.add('hidden');
            if (playerScore === 3) {
                showModal('You win!');
            } else {
                showModal('You lose!');
            }
        } else {
            document.getElementById('next-round-button').classList.remove('hidden');
        }
    }, 500);
};

function nextRound() {
    document.getElementById('game-result').classList.add('hidden');

    const userChoiceImg = document.getElementById('user-choice-img');
    if (userChoiceImg) {
        userChoiceImg.remove();
    }

    document.querySelector('.menu-container').classList.remove('hidden');
    document.getElementById('computer-choice-img').classList.add('hidden');
    document.getElementById('next-round-button').classList.add('hidden');

    document.getElementById('computer-choice-span').innerText = '';
};

function showModal(message) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.innerText = message;
    modal.classList.remove('hidden');
};

function hideModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
};

function playAgain() {
    hideModal();

    playerScore = 0;
    document.getElementById('player-score-value').innerText = playerScore;

    computerScore = 0;
    document.getElementById('computer-score-value').innerText = computerScore;

    nextRound();
};