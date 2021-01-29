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
  this.turnScore = 0;
}

//User Interface Logic
$("document").ready(function() {
  let player1 = new Player();
  let player2 = new Player();
  
  $("form").submit(function(event) {
    event.preventDefault();
    let player1Name = ($('input#player1-name').val());
    let player2Name = ($('input#player2-name').val());
    if (player1Name === '' && player2Name === '') {
      player1Name = "Charlie";
      player2Name = "Brandy";
    }
    player1.playerName = player1Name;
    player2.playerName = player2Name;
    //const outputArray = [player1, player2];
    $(".card").slideDown();
    $("h3#player1-name").text(player1Name);
    $("h3#player2-name").text(player2Name);
    $("#player1-total-score").text(0);
    $("#player2-total-score").text(0);
    $("#player1-turn-score").text(0);
    $("#player2-turn-score").text(0);
    $("#player1-turn").text(0);
    $("#player2-turn").text(0);
    $("#player2-card").addClass("translucent");
    $(".name-entry").slideUp();
    //return outputArray;
  });

  $("button#Charlie-roll").unbind('click').click(function() {
    let dieRoll = player1.rollDie();
    if (dieRoll === 1) {
      $("#Charlie-roll").attr("disabled", true);
      $("#Charlie-hold").attr("disabled", true);
      $("#Brandy-roll").attr("disabled", false);
      $("#Brandy-hold").attr("disabled", false);
      $("#player2-turn-score").text(player2.turnScore);
      $("span#player1-turn").text(player1.turnsTaken);
      $("#player1-card").addClass("translucent");
      $("#player2-card").removeClass("translucent");
      $("#player1-card .turn-rolls").empty();
      $("#player1-card .turn-rolls").append("<li class='list-inline-item'>" + dieRoll + "</li>");
      $("#player2-card .turn-rolls").empty();
    } else {
      $("#player1-card .turn-rolls").append("<li class='list-inline-item'>" + dieRoll + "</li>");
      $("#player1-turn-score").text(player1.turnScore);
    }
  });

  $("button#Charlie-hold").unbind('click').click(function() {
    player1.hold();
    $("#Charlie-roll").attr("disabled", true);
    $("#Charlie-hold").attr("disabled", true);
    $("#Brandy-roll").attr("disabled", false);
    $("#Brandy-hold").attr("disabled", false);
    $("#player2-turn-score").text(player2.turnScore);
    $("span#player1-turn").text(player1.turnsTaken);
    $("#player1-card").addClass("translucent");
    $("#player2-card").removeClass("translucent");
    $("span#player1-total-score").text(player1.scoreTotal);
    $("#player1-card .turn-rolls").empty();
    $("#player2-card .turn-rolls").empty();
  });
// $(“#buttonSubmit”).attr(“disabled”, true);
  $("button#Brandy-roll").unbind('click').click(function() {
    let dieRoll = player2.rollDie();
    if (dieRoll === 1) {
      $("#Brandy-roll").attr("disabled", true);
      $("#Brandy-hold").attr("disabled", true);
      $("#Charlie-roll").attr("disabled", false);
      $("#Charlie-hold").attr("disabled", false);
      $("#player1-turn-score").text(player1.turnScore);
      $("span#player2-turn").text(player2.turnsTaken);
      $("#player2-card").addClass("translucent");
      $("#player1-card").removeClass("translucent");
      $("#player2-card .turn-rolls").empty();
      $("#player2-card .turn-rolls").append("<li class='list-inline-item'>" + dieRoll + "</li>");
      $("#player1-card .turn-rolls").empty();
    } else {
      $("#player2-card .turn-rolls").append("<li class='list-inline-item'>" + dieRoll + "</li>");
      $("#player2-turn-score").text(player2.turnScore);
    }
  });

  $("button#Brandy-hold").unbind('click').click(function() {
    player2.hold();
    $("#Brandy-roll").attr("disabled", true);
    $("#Brandy-hold").attr("disabled", true);
    $("#Charlie-roll").attr("disabled", false);
    $("#Charlie-hold").attr("disabled", false);
    $("#player1-turn-score").text(player1.turnScore);
    $("span#player2-turn").text(player2.turnsTaken);
    $("#player2-card").addClass("translucent");
    $("#player1-card").removeClass("translucent");
    $("span#player2-total-score").text(player2.scoreTotal);
    $("#player2-card .turn-rolls").empty();
    $("#player1-card .turn-rolls").empty();
  });
});