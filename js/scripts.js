//Business Logic
function Player(playerName) {
  this.playerName = playerName;
  this.turnsTaken = 0;
  this.turnScore = 12;
  //this.turnScore = 0;
  this.scoreTotal = 0;
}

Player.prototype.rollDie = function() {
  let currentRoll = 3;
  // const currentRoll = Math.floor(Math.random() * Math.floor(6)) + 1;
  if (currentRoll === 1) {
    this.turnScore = 0; 
    this.turnsTaken++;
  } else {
      this.turnScore = this.turnScore + currentRoll;
  } return currentRoll;
} 

function rollDie() {
  return Math.floor(Math.random() * Math.floor(6)) + 1;
}

//User Interface Logic