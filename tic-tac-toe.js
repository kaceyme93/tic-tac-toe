//Function that determines first player. Complete
// Check if cell is empty. Complete
//If empty, update cell. Complete
    //Is this the winning move Complete/ tie game? Complete
        //If over, disable players. Complete
    //Once updated, switch player. Complete
    //Display current player. Complete.
//Reset button. Complete

//Collect name submission and call alertPlayer function
document.getElementById("submit").addEventListener("click", alertPlayer)

//Randomly selects either 0 or 1 to decide first player.
let moveCounter= Math.floor(Math.random() * 2)
//Notify Player
function alertPlayer (){
    let playerOne = document.getElementById("playerOne").value
    let playerTwo = document.getElementById("playerTwo").value

    if (moveCounter % 2 ===0){
        if (playerOne !==""){
        document.getElementById("player").innerHTML= playerOne+ ", make your move!"
        }
        else {
            document.getElementById("player").innerHTML= "Player X, make your move!"
        }
    }
    else if (moveCounter % 2 ===1){
        if (playerTwo !==""){
        document.getElementById("player").innerHTML= playerTwo+ ", make your move!"
        }
        else {
            document.getElementById("player").innerHTML= "Player O, make your move!"
        }
    }
}

//Event listener for user moves
document.getElementById("container").addEventListener("click", checkMove)

//Validates current move and calls render function if valid
function checkMove(ev){
    if (ev.target.innerText===""){
        displayMarker(ev.target)
    }
}
//Display corresponding marker
function displayMarker(target){
    if (moveCounter % 2 ===0){
        target.innerText = "X"
        evaluateXGame()
        // switchPlayer()
    }
    else if (moveCounter % 2 ===1){
        target.innerText = "O"
        evaluateOGame()
    }
}
//Switch players.
function switchPlayer(){
    moveCounter++
    alertPlayer()
}

//Evaluate if game has been won or tie
function evaluateXGame(){

   let b00= document.getElementById("b00").innerText
   let b01= document.getElementById("b01").innerText
   let b02= document.getElementById("b02").innerText
   let b10= document.getElementById("b10").innerText
   let b11= document.getElementById("b11").innerText
   let b12= document.getElementById("b12").innerText
   let b20= document.getElementById("b20").innerText
   let b21= document.getElementById("b21").innerText
   let b22= document.getElementById("b22").innerText
    
   //Horizontal Wins
   if (b00 ==="X" && b01==="X" && b02==="X" ){//1
       displayXWin()
       console.log(1)
   }
   else if (b10==="X" && b11==="X" && b12==="X"){//2
       displayXWin()
       console.log(2)
   }
   else if (b20==="X" && b21==="X" && b22==="X"){//3
       displayXWin()
       console.log(3)
   }

   //Vertical Wins
   else if (b00==="X" && b10==="X" && b20==="X"){//7
       displayXWin()
       console.log(7)
   }
   else if (b01==="X" && b11==="X" && b21==="X"){//8
        displayXWin()
        console.log(8)
   }
   else if (b02==="X" && b12==="X" && b22==="X"){//9
       displayXWin()
       console.log(9)
   }
   //Diagonal Wins
   else if (b00==="X" && b11==="X" && b22==="X"){//10
       displayXWin()
       console.log(10)
   }
   else if(b02==="X" && b11==="X" && b20==="X"){//11
       displayXWin()
       console.log(11)
   }
   else if (b00!=="" && b01!=="" && b02!=="" && b10!=="" && b11!=="" && b12!=="" && b20!=="" && b21!=="" && b22!=="" && !displayXWin() && !displayOWin()){
    displayTie()
}
   else {
    switchPlayer()
   }
}
function evaluateOGame(){
let b00= document.getElementById("b00").innerText
let b01= document.getElementById("b01").innerText
let b02= document.getElementById("b02").innerText
let b10= document.getElementById("b10").innerText
let b11= document.getElementById("b11").innerText
let b12= document.getElementById("b12").innerText
let b20= document.getElementById("b20").innerText
let b21= document.getElementById("b21").innerText
let b22= document.getElementById("b22").innerText

   //Horizontal Wins
   if (b00 ==="O" && b01==="O" && b02==="O"){//1
       displayOWin()
       console.log(1)
   }
   else if (b10 ==="O" && b11 ==="O" && b12 ==="O"){//2
       displayOWin()
       console.log(2)
   }
   else if (b20==="O" && b21==="O" && b22==="O"){//3
       displayOWin()
       console.log(3)
   }

   //Vertical Wins
   else if (b00==="O" && b10==="O" && b20==="O"){//7
       displayOWin()
       console.log(7)
   }
   else if (b01==="O" && b11==="O" && b21==="O"){//8
        displayOWin()
        console.log(8)
   }
   else if (b02==="O" && b12==="O" && b22==="O"){//9
       displayOWin()
       console.log(9)
   }
//    //Diagonal Wins
   else if (b00==="O" && b11==="O" && b22==="O"){//10
       displayOWin()
       console.log(10)
   }
   else if(b02==="O" && b11==="O" && b20==="O"){//11
       displayOWin()
       console.log(11)
   }
   else if (b00!=="" && b01!=="" && b02!=="" && b10!=="" && b11!=="" && b12!=="" && b20!=="" && b21!=="" && b22!=="" && !displayXWin() && !displayOWin()){
       displayTie()
   }
   else {
    switchPlayer()
   }
}

//Displays winning message for X
function displayXWin(){
    let playerOne = document.getElementById("playerOne").value
    if (playerOne!==""){
    document.getElementById("player").innerText= playerOne +" has won!"
    }
    else {
        document.getElementById("player").innerHTML= "Player X has won!"
    }
    document.getElementById("container").removeEventListener("click", checkMove)
}
//Displays winning message for O
function displayOWin(){
    let playerTwo = document.getElementById("playerTwo").value
    if (playerTwo!==""){
    document.getElementById("player").innerText= playerTwo+" has won!"
    }
    else {
        document.getElementById("player").innerHTML= "Player O has won!"
    }
    document.getElementById("container").removeEventListener("click", checkMove)
}
function displayTie(){
    document.getElementById("player").innerText= "It's a tie!"
}

document.getElementById("reset").addEventListener("click", newGame)

function newGame(){
    document.getElementById("b00").innerText=""
    document.getElementById("b01").innerText=""
    document.getElementById("b02").innerText=""
    document.getElementById("b10").innerText=""
    document.getElementById("b11").innerText=""
    document.getElementById("b12").innerText=""
    document.getElementById("b20").innerText=""
    document.getElementById("b21").innerText=""
    document.getElementById("b22").innerText=""

    moveCounter++
    alertPlayer()
    document.getElementById("container").addEventListener("click", checkMove)

}