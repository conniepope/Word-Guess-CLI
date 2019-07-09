// Dependency for inquirer npm package
var inquirer = require("inquirer");
var Word = require("./word.js");

var numGuessRemain = 10;
var currentWord = "";
var gameWord = "";
var random = 0;
var options = ["alphabet", "jitterbug", "bologna", "conducted", "dinosaur", "egotistical", "forensics", "imagination", "kilowatt"];


// The logic for the game
function playGame() {

//  Randomly selects a word from array of options
    random = Math.floor(Math.random()*options.length);
    currentWord = options[random];
    gameWord = new Word(currentWord);
    gameWord.wordSplit();
    if (random > -1) {
        options.splice(random, 1);
    }

    console.log("");
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    console.log("You get 10 incorrect letter guesses to figure out the mystery word.");
    console.log("");
    prompts();
}

// Prompts the user for each guess and keeps track of the user's remaining guesses
function prompts() {

    if (numGuessRemain > 0) {
// Displays the word / blanks
        console.log(gameWord.wordRep());
        console.log("")
    inquirer
        .prompt([
            {
                name: "letter",
                message: "Guess a letter!",
                type: "input"
            }   
        ])
        .then(function(data) {
            checkAnswer(data);
        });
    }
    else {
        console.log("");
        console.log(`Sorry, you are out of guesses. The correct answer is ${currentWord}`);
        console.log("");
        numGuessRemain = 10;
        currentWord = "";
        gameWord = "";
        random = 0;
        playGame();
    }
}

function checkAnswer(data) {
// check to see if only only one letter && if it is an alpha character
    if ((data.letter.length === 1) && /^[a-zA-Z]+$/.test(data.letter)) {
// see if letter guessed matches any of letters in current word
        var temporary = gameWord.wordRep();
        gameWord.checkGuess(data.letter);

        if (temporary === gameWord.wordRep()) {
            numGuessRemain--;
            console.log("");
            console.log(`Sorry, wrong letter! You have ${numGuessRemain} guesses remaining`)
            console.log("");
            prompts();
        }
        else {
        correctGuess();
        }
    }
    else {
// if more than one letter chosen, or a non-alpha character
        console.log("");
        console.log("Please enter ONE LETTER at a time.")
        prompts();
    }
}

function correctGuess() {
    console.log("");
    console.log("You guessed correctly!");
    console.log("");
// replaces correct letters into the display
    if (currentWord.replace(/ /g,"") == (gameWord.wordRep()).replace(/ /g,"")) {
        console.log(gameWord.wordRep());
        console.log("");
        console.log("YOU WIN!!!!!");
        currentWord = "";
        gameWord = "";
        numGuessRemain = 10;
        random = 0;
        playGame();
    }
    else {
        prompts();
    }
}
playGame();

