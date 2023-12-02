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
    (playerSelection == "scissor" && computerSelection == "paper")) {
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


function game(){
    let userHand, computerHand ;
    let win = 0, lose = 0;
    for (let  i = 0; i < 5; i++){//loop the game 5 time
        userHand = prompt("Rock, Paper or Scissors?: ") //take input from the player
        computerHand = getComputerChoice();
        console.log(`Computer choose : ${computerHand}`)
        if (singleGame(userHand, computerHand) === "win"){
            win += 1
        }
        else if (singleGame(userHand, computerHand) === "lose")
            lose += 1
    }
    if (win > lose){
        console.log("You win! Congratulation!")
    }
    else if (lose > win){
        console.log("Unforturnately you have lose. Please try again later :)")
    }
    else {
        console.log("It is a tied. Good job!")
    }
        //keeptrack of the winning by the format of best of five ---> if win>=3 win if win=lose lose else lose
        
}



game()

