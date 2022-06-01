//Create function called computerPlay which returns either rock or paper
//or scissor randomly when called.
//Create a function named computerPlay
function computerPlay(){
//Create an array containing the strings - rock, paper and scissor
    const moves = ["rock", "paper", "scissor"];

//Generate a random index number for the array using the math.random method
//and the length of the array
    let randomIndex = Math.floor(Math.random()*moves.length);

//Return the element with the random index
    return moves[randomIndex];
}
 
//Create a function which evaluates a round when passed with playerSelection 
//and computerSelection as arguments returns a string that says who's the 
//winner of the round

//Create a function named evaluateRound
function playRound(playerSelection, computerSelection){
//check for the conditions(game rules)
//return a appropriate string according to the rules
    playerSelection = playerSelection.toLowerCase();
    switch(playerSelection){
        
        case "rock":{
            switch(computerSelection){
                case "rock":{
                    console.log(`${playerSelection} and ${computerSelection}: Draw!`);
                    return 0;
                }
                            
                case "paper":{
                    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);;
                    return -1;
                }
                            
                case "scissor":{
                    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
                    return 1;
                }
                             
            }
        }
        case "paper":{
            switch(computerSelection){
                case "rock":{
                    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
                    return 1;

                }
                        
                case "paper":{
                    console.log(`${playerSelection} and ${computerSelection}: Draw!`);
                    return 0;
                }
                        
                case "scissor":{
                    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
                    return -1;

                }
                         
        }
    }
                    
        case "scissor":{
            switch(computerSelection){
                case "rock":{
                    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
                    return -1;
                }
                        
                case "paper":{
                    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                    return 1;


                }
                        
                case "scissor":{
                    console.log(`${playerSelection} and ${computerSelection}: Draw!`);
                    return 0;
                }
                         
        }
    }
    }
}


function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0; i<5; i++){

        let playerSelection;
        playerSelection 

         do {
        playerSelection = prompt("Rock or Paper or Scissor");
        if(playerSelection != null) playerSelection = playerSelection.toLowerCase();
        } while(!(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissor"));
        let computerSelection = computerPlay();

        let result = playRound(playerSelection, computerSelection);

        switch(result){
            case 1: playerScore++;
                    break;
            case -1: computerScore++;
                    break;
        }  

    }
    declareWinner(playerScore, computerScore);
}

function declareWinner(playerScore, computerScore){
    if(playerScore>computerScore) console.log("You Won the Game!!!");
    else if(playerScore<computerScore) console.log("Computer Won the Game!");
    else console.log("The Game Ended in a Draw!!");
}