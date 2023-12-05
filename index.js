function getComputerChoice(){ //Write a funtion that return rock paer or scissors
    let numRandom = Math.floor((Math.random() * 3) + 1);//random number evenly between 1 to 3 or 0 to 2
    let hand = numRandom == 1? "Rock" : numRandom == 2?"Paper":"Scissors" ;;
    //if elseif and else for the number and each rockperper scissor and save to the varaible
    return hand; //return that variable

}


function singleGame(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    //Compare the hand of the computer and player and decide which player win
    if ((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock")||
    (playerSelection == "scissors" && computerSelection == "paper")) {
        console.log(`You win! ${playerSelection} beat ${computerSelection}`);
        return "win";
    }
    else if (playerSelection == computerSelection) {
        console.log(`Tie! ${playerSelection} equal ${computerSelection}`);
        return "tie"
    }
    else {
        console.log(`You Lose! ${playerSelection} lose to ${computerSelection}`)
        return "lose"
    }
}


function game(e){
    let userHand, computerHand ;
   //loop the game 5 time
    userHand = e.target.value;
    computerHand = getComputerChoice();
    alert(`Computer choose : ${computerHand}`)
    if (singleGame(userHand, computerHand) === "win"){
        winPlayer += 1
        alert("You win!")
    }
    else if (singleGame(userHand, computerHand) === "lose"){
        winComputer += 1
        alert("You Lose!")
    }
    else {
        alert("Tied!")
    }
    document.querySelector(".playerscore").textContent = winPlayer;
    document.querySelector(".computerscore").textContent = winComputer;
    if (winPlayer == 5){
        alert("You win! Congratulation!")
        winPlayer = 0 ; winComputer = 0;
    }
    else if (winComputer == 5){
        alert("Unforturnately you have lose. Please try again later :)")
        winPlayer = 0 ; winComputer = 0;
    }
    
        //keeptrack of the winning by the format of best of five ---> if win>=3 win if win=lose lose else lose
        
}


let winPlayer = 0 ;let winComputer = 0;

const inputs = document.querySelectorAll("input")

inputs.forEach((input) => {
  input.addEventListener('click', game)
});

