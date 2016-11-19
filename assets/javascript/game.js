var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 10;
var usedLetter = "";
var chosenLetter;
var key;


window.onload = function(){

  chosenLetter = choices[Math.floor(Math.random()*choices.length)];

  document.onkeyup = function(event){
    key = event.key;

    if (chosenLetter === key){
      wins++;
      document.querySelector("#wins").innerHTML = wins;
      guesses = 10;
      document.querySelector("#guesses").innerHTML = guesses;
      usedLetter = "";
      chosenLetter = choices[Math.floor(Math.random()*choices.length)];
    }else{
      usedLetter += key;
      document.querySelector("#letterGuesses").innerHTML = usedLetter;
      guesses --
      document.querySelector("#guesses").innerHTML = guesses;
    };
    
    if (guesses <= 0) {
      losses++;
      document.querySelector("#losses").innerHTML = losses;
      chosenLetter = choices[Math.floor(Math.random()*choices.length)];
      guesses = 10;
      document.querySelector("#guesses").innerHTML = guesses;
      usedLetter = "";
    };
  };
}