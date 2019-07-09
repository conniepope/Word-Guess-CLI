
// Make a constructor, Letter. This constructor will be able to either display an underlying character or an underscore, depending on whether or not the user has guessed the letter. 
function Letter(stringValue) {
// A string value to store the underlying character for the letter
    this.stringValue = stringValue;
//  A boolean value that stores whether that letter has been guessed yet
    this.guessedYet = false;
// A function ...
    this.guessReturn = function() {
// that returns the underlying character if the letter has been guessed,
        if (this.stringValue === " ") {
            this.guessedYet = true;
            return " ";
        } else {
//or an underscore if the letter has not been guessed.
            if(this.guessedYet === false) {
            return "_";
            } else {
                return this.stringValue;
            }
        }
    } 
//  A function that takes a character as an argument...
    this.check = function(guess) {
// and checks it against the underlying character,
        if (guess === this.stringValue) {
// updating the stored boolean value to true if it was guessed correctly.
            this.guessedYet = true;
        }
    }
}

module.exports = Letter;





