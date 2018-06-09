
// define all possible values for computer choice

var emptyString = "";
var computerChoices = "abcdefghijklmnopqrstuvwxyz";
var getRandomLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var randomLetter = getRandomLetter;
console.log(getRandomLetter);
var userGuess;

// // define win/loss counters
var wins = 0;
var losses = 0;


// // function for user input
document.onkeyup = function(event){
    var userGuess = event.key;

    if (userGuess === getRandomLetter) {
        wins++;
    } else if (userGuess !== getRandomLetter)  {losses++ ;
    }
   


// // loop for comparing user input and computer guess 9 times



// // display results
var html =
"<p>The computer chose: " + getRandomLetter + "</p>" +
"<p>wins: " + wins + "</p>" +
"<p>losses: " + losses + "</p>" +
"<p>You chose: " + userGuess + " ," + "</p>" ;

// // Set the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = html;

};

// loop for updating counters