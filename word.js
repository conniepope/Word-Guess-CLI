var Letter = require("./letter.js");


// Make a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
function Word(lettersInWord) {
// An array of `new` Letter objects representing the letters of the underlying word
    this.lettersInWord = lettersInWord;
    this.wordInPlay = [];
//  A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    this.wordSplit = function() {
        for (var i = 0; i <this.lettersInWord.length; i++){
            var character = new Letter(lettersInWord[i]);
            this.wordInPlay.push(character);
        }
    }
    
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
    this.wordRep = function() {
        var = display;
        for (var i = 0; i <this.wordInPlay.length; i++){
            display.push(this.wordInPlay[i].guessReturn())
        }
        return diplay.join(" ");
    }
}
module.exports = Word;


