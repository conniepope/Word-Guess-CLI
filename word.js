var Letter = require("./letter.js");

// Make a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. 
function Word(lettersInWord) {
// An array of `new` Letter objects representing the letters of the underlying word
    this.lettersInWord = lettersInWord;
    this.wordInPlay = [];
// Make the word...
    this.wordSplit = function() {
        for (var i = 0; i <this.lettersInWord.length; i++){
            var character = new Letter(lettersInWord[i]);
            this.wordInPlay.push(character);
        }
    }

//  A function that returns a string representing the word. The DISPLAY. 
    this.wordRep = function() {
        var display = [];
// Call the function on each letter object (the first function defined in `Letter.js`)...
        for (var i = 0; i <this.wordInPlay.length; i++){
            display.push(this.wordInPlay[i].guessReturn())
        }
// that displays the character or an underscore and join together. 
        return display.join(" ");
    }

// A function that takes a character as an argument ...
    this.checkGuess = function(guess) {
// and calls the guess function on each letter object (the second function defined in `Letter.js`)
        for (var i = 0; i<this.wordInPlay.length; i++) {
            this.wordInPlay[i].check(guess);
        }
    }
}

module.exports = Word;


