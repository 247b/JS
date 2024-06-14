let randomNum;
let computerMove = ''
let playerMove =''
let result =''

//creates the computer's move using Math.random and stores in computerMove.
function getComputerMove() {
  randomNum = Math.floor(Math.random()*3+1)
  if (randomNum === 1){
    computerMove = 'rock🗿'
  }else if(randomNum === 2){
    computerMove = 'paper📃'
  }else if(randomNum === 3){
    computerMove = 'scissors✂'
  }
}

// decides the result of the game by passing player's move as myMove into the function and stores in result variable.
function compare(myMove){
  playerMove = myMove
  if( myMove === computerMove){
    result = 'match tied🤝'

  }else if ((myMove === 'rock🗿' && computerMove === 'paper📃') || 
            (myMove === 'paper📃' && computerMove === 'scissors✂') ||
            (myMove === 'scissors✂' && computerMove === 'rock🗿')){
    result = 'You lost the match👎'

  }else if ((myMove === 'rock🗿' && computerMove === 'scissors✂') || 
            (myMove === 'paper📃' && computerMove === 'rock🗿') ||
            (myMove === 'scissors✂' && computerMove === 'paper📃')){
    result = 'You won the match👍'
  }
}

//logs data in the console.
function dataLogging(){
  console.log(randomNum);
  console.log(`You picked ${playerMove}`);
  console.log(`computer picked ${computerMove}`);
  console.log(result);
  }

  //alert modal
function alertBox() {
  alert(`${result},\nYou picked ${playerMove},\nand computer picked ${computerMove}`)
  }

function game(move){
  getComputerMove()
  compare(move)
  dataLogging()
  alertBox()
}

