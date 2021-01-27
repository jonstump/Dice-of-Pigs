//Business Logic
function Player(playerName) {
  this.playerName = playerName;
  this.turnsTaken = 0;
  this.turnScore = 0;
  this.scoreTotal = 0;
}

Player.prototype.rollDie = function() {
  const currentRoll = Math.floor(Math.random() * Math.floor(6)) + 1;
  if (currentRoll === 1) {
    this.turnScore = 0; 
    this.turnsTaken++;
  } else {
    this.turnScore = this.turnScore + currentRoll;
    this.winCheck();
  }
  return currentRoll;
} 

Player.prototype.winCheck = function() {
  if (this.turnScore + this.scoreTotal >= 100) {
    alert(`${this.playerName}: You have won!`);
  }
}

Player.prototype.hold = function() {
  this.scoreTotal += this.turnScore;
  this.turnsTaken++;
}

//User Interface Logic
$("document").ready(function() {
  $("form").submit(function(event) {
    submit.preventDefault();
    let player1Name = ($('input#player1-name').val());
    let player2Name = ($('input#player2-name').val());

    let player1 = new Player(player1Name = "Charlie");
    let player2 = new Player(player2Name = "Brandy");

  });
});