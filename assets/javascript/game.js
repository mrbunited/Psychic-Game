
// define all possible values for computer choice

var emptyString = "";
var computerChoice = "abcdefghijklmnopqrstuvwxyz";
var getRandomLetter = computerChoice[Math.floor(Math.random() * computerChoice.length)];
var randomLetter = getRandomLetter;
console.log(getRandomLetter);

// // define win/loss counters
var wins = 0;
var losses = 0;


// // function for user input
document.onkeyup = function(event){
    var userGuess = event.key;
    document.write(userGuess);
    if (userGuess === computerChoice) {
        wins++;
    } else (userGuess !== computerChoice) {
        losses++;
    }
}


// // loop for comparing user input and computer guess 9 times



// // display results
var html =
"<p>The computer chose: " + computerChoice + "</p>" +
"<p>wins: " + wins + "</p>" +
"<p>losses: " + losses + "</p>" +
"<p>You chose: " + userGuess + " ," + "</p>" ;

// // Set the inner HTML contents of the #game div to our html string
// document.querySelector("#game").innerHTML = html;
// }
  

// loop for updating counters