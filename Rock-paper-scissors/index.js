let score = JSON.parse(localStorage.getItem('score')) || {
  win:0,
  lose:0,
  tie:0,
}

function reset(){
  score.win = 0
  score.tie = 0
  score.lose = 0
  console.clear()
  console.log('Started New Game');
  localStorage.removeItem('score')  
  console.log(score);
}

function game(myMove){
  let computer = {
    move:'',
    randomnum:Math.floor(Math.random()*3+1),
  }
  let player = {
    move:'',
    result:'',
  }

  if (computer.randomnum === 1){
    computer.move = 'rock🗿'
  }else if(computer.randomnum === 2){
    computer.move = 'paper📃'
  }else if(computer.randomnum === 3){
    computer.move = 'scissors✂'
  }

  player.move = myMove
  if( player.move === computer.move){
    player.result = 'match tied🤝'
    score.tie ++;

  }else if ((player.move === 'rock🗿' && computer.move === 'paper📃') || 
            (player.move === 'paper📃' && computer.move === 'scissors✂') ||
            (player.move === 'scissors✂' && computer.move === 'rock🗿')){
    player.result = 'You lost the match👎'
    score.lose ++;

  }else if ((player.move === 'rock🗿' && computer.move === 'scissors✂') || 
            (player.move === 'paper📃' && computer.move === 'rock🗿') ||
            (player.move === 'scissors✂' && computer.move === 'paper📃')){
    player.result = 'You won the match👍'
    score.win ++;
  }
  let scoreJson = JSON.stringify(score)
  localStorage.setItem('score',scoreJson)
  

  function dataLog(){
    console.log(computer.randomnum);
    console.log(`You picked ${player.move}`);
    console.log(`computer picked ${computer.move}`);
    console.log(player.result);
    }
  
  function alertBox() {
    alert(`${player.result},\nYou picked ${player.move}, and computer picked ${computer.move}
Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`)
    }
  
  
  dataLog()

  alertBox()


}





