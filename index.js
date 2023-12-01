function getComputerChoice(){ //Write a funtion that return rock paer or scissors
    let numRandom = Math.floor((Math.random() * 3) + 1);//random number evenly between 1 to 3 or 0 to 2
    let hand = numRandom == 1? "Rock" : numRandom == 2?"Paper":"Scissors" ;;
    //if elseif and else for the number and each rockperper scissor and save to the varaible
    return hand; //return that variable

}


function singleGame(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    console.log(computerSelection)
    //Compare the hand of the computer and player and decide which player win
    if ((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock")||
    (playerSelection == "scissor" && computerSelection == "paper")) {
        return `You win! ${playerSelection} beat ${computerSelection}`
    }
    else if (playerSelection == computerSelection) {
        return `Tie! ${playerSelection} equal ${computerSelection}`
    }
    else {
        return `You Lose! ${playerSelection} lose to ${computerSelection}`
    }
}




