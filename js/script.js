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
                   console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
                   return -1;
                }
                            
                case "scissor":{
                    console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
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
                    return 0
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
        default: console.log("wrong input")
    }
}

//Testing code: playRound
// const playerSelection = "rock";
// const computerSelection = computerPlay();

// console.log(playRound(playerSelection, computerSelection));

//Create a function named game which plays 5 rounds and keeps the score for each player
//and reports the winner at the end of the 5 rounds.

//Create a function named game
function game(){
//play 5 rounds using a loop
//keep score of each player 
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0; i<5; i++){
        //get computer's selection
        let computerSelection = computerPlay();
        //get input from the user
        let playerSelection = prompt("Rock or Paper or Scissor?");
        //check whether the user input is valid
        while(playerSelection == '' || playerSelection == null){
            console.log("Wrong option! Choose again!!!");
            playerSelection = prompt("Rock or Paper or Scissor?");      
        }
        //get result for the current round
        let result = playRound("rock", computerSelection);
        switch(result){
            case 1: {
                playerScore++;
                break;
            }
            case -1: {
                computerScore++;
                break;
            }
        }
    }
//AT the end of 5 rounds, evaluate the score and report the winner
    declareWinner(playerScore, computerScore);

}

function declareWinner(playerScore, computerScore) {
    if(playerScore>computerScore){
        console.log("You Win!!!")
    }
    else if(playerScore<computerScore){
        console.log("Computer Wins!")
    }
    else console.log("Draw!!")
}
