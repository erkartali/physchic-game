var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = "";
var winsHTML = document.getElementById("wins");
var lossesHTML = document.getElementById("losses");
var guessesLeftHtml = document.getElementById("gl");
var guessesSoFarHTML = document.getElementById("gsf");
var cc = ("abcdefghijklmnopqrstuvwxyz").split("");

const someFunction = () => {
    var computerGuess = cc[Math.floor(Math.random() * cc.length)];
    function reset () {
        guessesSoFar = "";
        computerGuess = cc[Math.floor(Math.random() * cc.length)];
        console.log(computerGuess);
        guessesLeft = 10;
    }
    console.log(computerGuess);
    guessesLeft = 10;
    guessesLeftHtml.innerHTML = guessesLeft;


    document.onkeyup = function (event) {
        
        // computer guesses random letter in alphabet
        console.log(computerGuess);
        
        // logs user input from keyboard 
        var userGuess = event.key;
        guessesLeftHtml.innerHTML = 10
        // weeds out any keys that arent part of the alphabet
        if (cc.includes(userGuess)) {

            
 
            if (userGuess != computerGuess && !guessesSoFar.includes(userGuess)) {
                guessesSoFar = guessesSoFar += userGuess + ", "
                // console.log(guessesSoFar);
                guessesLeft--;
                console.log(guessesLeft);
                if (guessesLeft === 0) {
                    alert("You're not a psychic bro!");
                    losses = losses + 1;
                    reset();
                }
   
            } else if (userGuess === computerGuess) {
                alert("The letter was " + computerGuess + " you got it!");
                wins++;
                reset();
            }
            
        winsHTML.innerHTML = wins;
        lossesHTML.innerHTML = losses;
        guessesSoFarHTML.innerHTML = guessesSoFar;
        guessesLeftHtml.innerHTML = guessesLeft;
        }
        
    }
}
someFunction();