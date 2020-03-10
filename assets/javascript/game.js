var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = "";
var winsHTML = document.getElementById("wins");
var lossesHTML = document.getElementById("gl");
var guessesSoFarHTML = document.getElementById("gsf");
var cc = ("abcdefghijklmnopqrstuvwxyz").split("");

const someFunction = () => {
    var computerGuess = cc[Math.floor(Math.random() * cc.length)];
    console.log(computerGuess);

    document.onkeyup = function (event) {
        
        // computer guesses random letter in alphabet
        console.log(computerGuess);
        
        // logs user input from keyboard 
        var userGuess = event.key;
        
        // weeds out any keys that arent part of the alphabet
        if (cc.includes(userGuess)) {


            
            if (userGuess != computerGuess && !guessesSoFar.includes(userGuess)) {
                guessesSoFar.push(userGuess);
                console.log(guessesSoFar);
                guessesLeft--;
                console.log(guessesLeft);
                if (guessesLeft === 0) {
                    alert("You're not a psychic bro!");
                    losses++;
                }


                
            } else if (userGuess === computerGuess) {
                alert("The letter was " + computerGuess + " you got it!");
                wins++;
            }
            
            
        }
        winsHTML.innerHtml = wins;
        lossesHTML.innerHtml = losses;
        guessesSoFarHTML.innerHtml = guessesSoFar.toString();

    }

    



}
someFunction();