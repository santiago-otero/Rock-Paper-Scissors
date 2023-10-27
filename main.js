
// 0... define player and computer variables for value and get all input references
let playerScore = 0;
let computerScore = 0;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const resetBtn = document.getElementById("reset-icon");

// 1... Computer randomly selects from the array and returns a value.
function computerPlay() {
	let computerRandomChoices = ['rock', 'paper', 'scissors'];
	let getRandomChoices = Math.floor(Math.random() * computerRandomChoices.length)
	return computerRandomChoices[getRandomChoices];
}

// 2... Make a function that plays a single round of Rock, Paper, Scissors.
function playRound(playerselection, computerSelection){
	console.log(`you selected ${playerselection}`);
	console.log(`computer selected ${computerSelection}`);


    // Tie 
    if(playerselection === computerSelection){
    	document.getElementById("game-result").innerHTML = "It´s a Tie";
    	document.getElementById("game-result").style.color = "black";
    } 
    // rocks beats scissors

    else if(playerselection === "rock"){
    	if (computerSelection === "scissors"){
    		playerScore ++;
    		document.getElementById("game-result").innerHTML = "Player wins, rock beats scissors";
    		document.getElementById("game-result").style.color = "green"
    		document.getElementById("human-score").innerHTML = playerScore
    	} else {
    		computerScore ++;
    		document.getElementById("game-result").innerHTML = "You lose, paper beats rock "
    		document.getElementById("game-result").style.color = "red"
    		document.getElementById("robot-score").innerHTML = computerScore
    	}
    }
    // Paper beats Rock
    else if(playerselection === "paper") {
    	if(computerSelection === "rock") {
    		playerScore ++;
    		document.getElementById("game-result").innerHTML = "Player wins, paper beats rock";
    		document.getElementById("game-result").style.color = "green"
    		document.getElementById("human-score").innerHTML = playerScore
    	} else {
    		computerScore ++;
    		document.getElementById("game-result").innerHTML = "You lose, scissors beats paper  "
    		document.getElementById("game-result").style.color = "red"
    		document.getElementById("robot-score").innerHTML = computerScore
    	}
    }
    // Scissors beat Paper
    else if(playerselection === "scissors"){
    	if(computerSelection === "paper"){
    		playerScore ++;
    		document.getElementById("game-result").innerHTML = "Player wins, scissors beats paper";
    		document.getElementById("game-result").style.color = "green"
    		document.getElementById("human-score") .innerHTML = playerScore
    	} else {
    		computerScore ++;
    		document.getElementById("game-result").innerHTML = "You lose, rocks beats scissors"
    		document.getElementById("game-result").style.color = "red"
    		document.getElementById("robot-score").innerHTML = computerScore
    	}
    }
}
//  3... Play a 5 round game that keeps score
function game(playerChoice) {
	let player = playerChoice;
	let computer = computerPlay();


    // Plays one a round game
    playRound(player, computer);
    // Evaluates scores to see who made it to 5
    if(playerScore == 5) {
    	document.getElementById("computer-play-result").innerHTML = "You win, congratulations !!!";
    	document.getElementById("computer-play-result").style.color = "green";
    	document.getElementById("computer-play-result").style.fontSize = "1.8em";
    	document.getElementById("game-result").innerHTML = "";
    } else if (computerScore == 5) {
    	document.getElementById('computer-play-result').innerHTML = "Computer wins :( ";
    	document.getElementById('computer-play-result').style.color = "red";
    	document.getElementById('computer-play-result').style.fontSize = "1.8em";
    	document.getElementById('game-result').innerHTML = "";
    }
}
//  4.... On click of event listener execute game function after user chooses RPS.
rock.addEventListener(`click`, () => {
	game("rock");
});
paper.addEventListener(`click`, () => {
	game("paper");
});
scissors.addEventListener(`click`, () => {
	game("scissors");
});
resetBtn.addEventListener('click', function () {
	location.reload();
});
