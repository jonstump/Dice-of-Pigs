//Business Logic
function Player(playerName  = "Charlie") {
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
  let playersArray = $("form").submit(function(event) {
    event.preventDefault();
    let player1Name = ($('input#player1-name').val());
    let player2Name = ($('input#player2-name').val());
    if (player1Name === '' && player2Name === '') {
      player1Name = "Charlie";
      player2Name = "Brandy";
    }
    let player1 = new Player(player1Name);
    let player2 = new Player(player2Name);
    const outputArray = [player1, player2];
    $(".card").slideDown();
    $("#player1-name").text(player1.playerName);
    $("#player2-name").text(player1.playerName);
    $("#player1-total-score").text(0);
    $("#player2-total-score").text(0);
    $("#player1-turn-score").text(0);
    $("#player2-turn-score").text(0);
    $("#player1-turn").text(0);
    $("#player2-turn").text(0);
    $("#player2-card").addClass("translucent");
    $(".name-entry").slideUp();
    return outputArray;
  });
  $("button#Charlie-roll").click(function() {
    let dieRoll = playersArray[0][rollDie()];
    if (dieRoll === 1) {
      $("span#player1-turn").text(playersArray[0].turnsTaken);
      $("#player1-card").addClass("translucent");
      $("#player2-card").removeClass("translucent");
    }

  });

  $("button#Brandy-roll")
  
});