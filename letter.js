
// Is this line needed?
var fs = require("fs")

// Make a constructor, Letter.
function Letter(stringValue, guessedYet) {
// A string value to store the underlying character for the letter
    this.stringValue = stringValue;
    this.guessedYet = false;

    this.guessReturn = function() {
        if (guess === stringValue) {
            this.guessedYet = true;
            return this.stringValue;
        } else {
            this.guessedYet = false;
            return "_"
        }
    }
} 
module.exports = Letter;


 //This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:


//   * A boolean value that stores whether that letter has been guessed yet

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
