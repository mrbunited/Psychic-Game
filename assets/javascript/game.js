
// define all possible values for computer choice

var emptyString = "";
var computerChoices = "abcdefghijklmnopqrstuvwxyz";
var userOption = "abcdefghijklmnopqrstuvwxyz";
var getRandomLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var randomLetter = getRandomLetter;
console.log(getRandomLetter);


// create an empty array for recording/storing all userGuesses
var storeUserGuess =[];


// // define win/loss counters
var wins = 0;
var losses = 0;


// function for emptying array


// // function for user input  



document.onkeyup = function(event){
    var userGuess = event.key;
    if (userOption.indexOf(userGuess)!==-1){

 if (userGuess === getRandomLetter) {
        wins++;
    } else if (userGuess !== getRandomLetter)  {losses++ ;
    }

for (var i = 0; i < 1; i++) {
    storeUserGuess.push(event.key);
    console.log(storeUserGuess);

 }  
    }

  
// // loop for comparing user input and computer guess 9 times

// 
      
     
//       

// // display results
var html =
"<p>The computer chose: " + getRandomLetter + "</p>" +
"<p>wins: " + wins + "</p>" +
"<p>losses: " + losses + "</p>" +
"<p>You chose: " + storeUserGuess + " ," + "</p>" ;

// // Set the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = html;

};
