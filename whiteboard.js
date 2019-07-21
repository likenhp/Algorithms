/*
Rock Paper Scissors Whiteboard
Rock > Scissors
Scissors > Paper
Paper > Rock
Must be 2 players
print results of each round
game completed when one player has won 3 rounds
*/

var player1 = 0;
var player2 = 0;
var player1Turn = true;
var tempPlayer1 = null;
var tempPlayer2 = null;

function reset(){
    player1 = 0;
    player2 = 0;
    player1Turn = true;
    tempPlayer1 = null;
    tempPlayer2 = null;
}

function rockpaperscissors(clickedClass){

    if(player1 === 3){
        console.log("player 1 wins");
    }else if(player2 ===3){
        console.log("player 2 wins");
    }else if(player1Turn && player1 !== 3 && player2 !==3){
        tempPlayer1  = clickedClass;
        player1Turn = false;
    }else if(!player1Turn && player1 !== 3 && player2 !==3){
        tempPlayer2  = clickedClass;
        while(player1 !== 3 && player2 !== 3){
            if(
            tempPlayer1 === "rock" && tempPlayer2 === "scissors" ||
            tempPlayer1 === "paper" && tempPlayer2 === "rock" ||
            tempPlayer1 === "scissors" && tempPlayer2 === "paper"
            ){
                player1 ++;
                tempPlayer1 = null;
                tempPlayer2 = null;
                player1Turn = true;
                console.log("player1: " + player1);
                if(player1 ===3){
                    console.log("player 1 wins");
                }
                return
            }else if(
            tempPlayer2 === "rock" && tempPlayer1 === "scissors" ||
            tempPlayer2 === "paper" && tempPlayer1 === "rock" ||
            tempPlayer2 === "scissors" && tempPlayer1 === "paper"
            ){
                player2 ++;
                tempPlayer1 = null;
                tempPlayer2 = null;
                player1Turn = true;
                console.log("player2: " + player2);
                if (player2 === 3){
                    console.log("player 2 wins");
                }
                return
            }else if(
            tempPlayer2 === "rock" && tempPlayer1 === "rock" ||
            tempPlayer2 === "paper" && tempPlayer1 === "paper" ||
            tempPlayer2 === "scissors" && tempPlayer1 === "scissors"
            ){
                tempPlayer1 = null;
                tempPlayer2 = null;
                player1Turn = true;
                console.log("tie");
                return
            }
        }
        
    }
}
