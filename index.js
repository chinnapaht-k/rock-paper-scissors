function getComputerChoice(){ //Write a funtion that return rock paer or scissors
    let numRandom = Math.floor((Math.random() * 3) + 1);//random number evenly between 1 to 3 or 0 to 2
    let hand = numRandom == 1? "Rock" : numRandom == 2?"Paper":"Scissors" ;;
    //if elseif and else for the number and each rockperper scissor and save to the varaible
    console.log(numRandom)
    return hand; //return that variable

}
console.log(getComputerChoice())