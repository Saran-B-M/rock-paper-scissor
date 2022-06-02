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

//Create three buttons for each selection and call the play round function 
//every time the buttons are pressed
//Create a div that shows the score of each player and declare a winner 
//once one player reaches five points first


//create 3 buttons and add class add text content with names rock, paper and
//scissor for each button 
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorBtn = document.createElement("button");

rockBtn.textContent = "ROCK";
rockBtn.classList.add("rock");
paperBtn.textContent = "PAPER";
paperBtn.classList.add("paper");
scissorBtn.textContent = "SCISSOR";
scissorBtn.classList.add("scissor");

//Add the buttons to the DOM
const body = document.querySelector("body");
body.appendChild(rockBtn);
body.appendChild(paperBtn);
body.appendChild(scissorBtn);

//for each button add the click event listener which and also pass the button
//that got clicked
function eventListener(btn){
    btn.addEventListener("click", game);
}

eventListener(rockBtn);
eventListener(paperBtn);
eventListener(scissorBtn);

//with the help of the class of button clicked assign playerSelection and play 
//round
//At the end of every round keep the score of each player, if a player's score 
//reaches 5 then declare that player as winner





let playerScore = 0;
let computerScore = 0;
function game(e){
    let playerSelection = e.target.getAttribute("class");
    let computerSelection = computerPlay();  
    let result = playRound(playerSelection, computerSelection);
    switch(result){
        case 1: playerScore++;
                break;
        case -1: computerScore++;
                break;
    }  
}

function declareWinner(playerScore, computerScore){
    if(playerScore>computerScore) console.log("You Won the Game!!!");
    else if(playerScore<computerScore) console.log("Computer Won the Game!");
    else console.log("The Game Ended in a Draw!!");
}