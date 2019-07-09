// Dependency for inquirer npm package
var inquirer = require("inquirer");
var Word = require("./word.js");

var numGuessRemain = 10;
var currentWord = "";
var gameWord = "";
//  Randomly selects a word and uses the `Word` constructor to store it
var random = 0;
var options = ["alphabet", "jitterbug", "bologna", "conducted", "dinosaur", "egotistical", "forensics", "imagination", "kilowatt"];


// The logic for the course of the game
function playGame() {
    // if (options.length < 2) {
    //     options = ["alphabet", "jitterbug", "bologna", "conducted", "dinosaur", "egotistical", "forensics", "imagination", "kilowatt"];
    // }

    random = Math.floor(Math.random()*options.length);
    currentWord = options[random];
    gameWord = new Word(currentWord);
    gameWord.wordSplit();
    if (random > -1) {
        options.splice(random, 1);
    }

    console.log(currentWord);
    console.log("You get to guess 10 letters to figure out the mystery word")
    prompts();
}

// Prompts the user for each guess and keeps track of the user's remaining guesses
function prompts() {

    if (numGuessRemain > 0) {
    inquirer
        .prompt([
            {
                name: "letter",
                message: "Guess a letter!",
                type: "input"
            }   
        ])
        .then(function(guess) {
            checkAnswer(guess);
        });
    }
    else {
        console.log(`Sorry, you are out of guesses. The correct answer is ${currentWord}`)
        numGuessRemain = 10;
        currentWord = "";
        gameWord = "";
        random = 0;
        playGame();
    }
}

function checkAnswer(guess) {
// check to see if only only one letter && if it is an alpha character
    if (guess.letter.length === 1 && /^[a-zA-Z]/.text(guess.letter)) {
        var temporary = gameWord.wordRep();
        if (temporary === gameWord.wordRep()) {
            numGuessRemain--;
            console.log(`Sorry, wrong letter! You have ${numGuessRemain} guesses remaining`)
            prompts();
        }
        else {
        correctGuess();
        }
    }
    else {
        console.log("Please enter ONE LETTER at a time.")
        prompts();
    }
}

function correctGuess() {
    console.log("You guessed correctly!");
    if (currentWord.replace(/ /g,"") == (gameWord.wordRep()).replace(/ /g,"")) {
        console.log(gameWord.wordRep());
        console.log("You WIN!");
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

