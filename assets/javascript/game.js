
// define all possible values for computer choice

var computerChoices = "abcdefghijklmnopqrstuvwxyz";
var userOption = "abcdefghijklmnopqrstuvwxyz";
var getRandomLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var randomLetter = getRandomLetter;

// console.log(getRandomLetter);

// create an empty array for recording/storing all userGuesses
var guessesLeft =9;
var storeUserGuess =[];

 // Converts the user's answer to lowercase.

// // define win/loss counters
var wins = 0;
var losses = 0;

//  key function
 
document.onkeyup = function(event){
    var userGuess = event.key;
    var userGuessLower = userGuess.toLowerCase();

    if (userOption.indexOf(userGuessLower)!==-1)
{
      if (userGuessLower === getRandomLetter) {
        wins++; guessesLeft =9;
        storeUserGuess =[];
        getRandomLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    } else{guessesLeft--;
    }
    if (guessesLeft === 0)  {
        losses++ ;
        guessesLeft =9;
        storeUserGuess =[];
        getRandomLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }

   
    storeUserGuess.push(event.key);

    // console.log(storeUserGuess);
    }
 

// // display results
var html =
"<p>wins: " + wins + "</p>" +
"<p>losses: " + losses + "</p>" +
"<p>You chose: " + storeUserGuess + " ," + "</p>" ;

// // Set the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = html;

};



