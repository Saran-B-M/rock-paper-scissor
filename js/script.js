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
function evaluateRound(playerSelection, computerSelection){
//check for the conditions(game rules)
//return a appropriate string according to the rules
    playerSelection = playerSelection.toLowerCase();
    switch(playerSelection){
        
        case "rock":{
            switch(computerSelection){
                case "rock":{
                    return `${playerSelection} and ${computerSelection}: Draw!`
                }
                            
                case "paper":{
                    return `You Lose! ${computerSelection} beats ${playerSelection}`
                }
                            
                case "scissor":{
                    return `You Win! ${playerSelection} beats ${computerSelection}`
                }
                             
            }
        }
        case "paper":{
            switch(computerSelection){
                case "rock":{
                    return `You Win! ${playerSelection} beats ${computerSelection}`

                }
                        
                case "paper":{
                    return `${playerSelection} and ${computerSelection}: Draw!`
                }
                        
                case "scissor":{
                    return `You Lose! ${computerSelection} beats ${playerSelection}`

                }
                         
        }
    }
                    
        case "scissor":{
            switch(computerSelection){
                case "rock":{
                    return `You Lose! ${computerSelection} beats ${playerSelection}`
                }
                        
                case "paper":{
                    return `You win! ${playerSelection} beats ${computerSelection}`


                }
                        
                case "scissor":{
                    return `${playerSelection} and ${computerSelection}: Draw!`
                }
                         
        }
    }
        default: console.log("wrong input")
    }
}



