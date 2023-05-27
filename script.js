function getComputerChoice(){

        const random = Math.floor(Math.random() * 3);
        if(random==0){
            return "Rock"
        }
        else if(random==1){
            return "Paper"
        }
        else{
            return "Scissors"
        }
}

function round(playerSelection,computerSelection){
        if(playerSelection == "Scissors" && computerSelection == "Paper"){
            return "You Win"
        }
        else if(playerSelection == "Scissors" && computerSelection == "Rock"){
            return "You Lose! Rock beats Scissors";
        }
        else if(playerSelection == "Rock" && computerSelection == "Paper"){
            return "You Lose! Paper beats Rock";
        }
        else if(playerSelection == "Rock" && computerSelection == "Scissors"){
            return "You Win!"
        }
        else if(playerSelection == "Paper" && computerSelection == "Scissors"){
            return "You Lose! Scissors beats Paper";
        }
        else if(playerSelection == "Paper" && computerSelection == "Rock"){
            return "You Win";
        }
        else{
            return "Its a tie"
        } 

}








function game(){
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Enter your choice: ");
        const computerSelection = getComputerChoice();
        const count = round(playerSelection, computerSelection);
        console.log(count);
    
    // console.log(round(playerSelection, computerSelection));
    }
}
game();