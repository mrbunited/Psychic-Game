
// define all possible values for computer choice

var emptyString = "";
var computerChoices = "abcdefghijklmnopqrstuvwxyz";
var userOption = "abcdefghijklmnopqrstuvwxyz";
var getRandomLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var randomLetter = getRandomLetter;
console.log(getRandomLetter);


// create an empty array for recording/storing all userGuesses
var guessesLeft =9;
var storeUserGuess =[];

 // Converts the user's answer to lowercase.

// // define win/loss counters
var wins = 0;
var losses = 0;

//  key function


// created a function startgame, included variables  and previouslyGuessedLetters = []

// then hiddenletter = the variable for the alphabet string [math.floor(math.random()* (alphabet variable again.length)]
// // then console logged("message", hiddenletter);
// // and then function updateDocument

// function updateDocument(
//     for (var i = 0; i < 1; i--) {
//         guessesLeft.push(event.key);
//         console.log(guessesLeft);
    
//      }  


document.onkeyup = function(event){
    var userGuess = event.key;
    var userGuessLower = userGuess.toLowerCase();

    if (userOption.indexOf(userGuessLower)!==-1)
    {
      if (userGuessLower === getRandomLetter) {
        wins++;
    } else if (userGuessLower !== getRandomLetter)  {losses++ ;
    }

    
    for (var i = 0; i < 1; i++) {
      
    storeUserGuess.push(event.key);

    console.log(storeUserGuess);
    }}
 

//    when (storeUserGuess.length < 10) {
//         storeUserGuess = []
//         console.log(storeUserGuess)
//  }
// // loop for comparing user input and computer guess 9 times

// // display results
var html =
"<p>The computer chose: " + getRandomLetter + "</p>" +
"<p>wins: " + wins + "</p>" +
"<p>losses: " + losses + "</p>" +
"<p>You chose: " + storeUserGuess + " ," + "</p>" ;

// // Set the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = html;
};



