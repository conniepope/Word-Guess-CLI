// Dependency for inquirer npm package
var inquirer = require("inquirer");
var Word = require("./word.js")

// The logic for the course of the game
var numGuessRemain = 10

//  Randomly selects a word and uses the `Word` constructor to store it
var Word = Math.floor(Math.random()*options.length)
var options = ["alphabet", "jitterbug", "bologna", "conducted", "dinosaur", "egotistical", "forensics", "imagination", "kilowatt"]

// Prompts the user for each guess and keeps track of the user's remaining guesses

inquirer
    .prompt([
        "Guess a letter!"
    ])
    .then(answers => {
        Word.wordRep(answers)
        if (numGuessRemain > 0) {
            Word()
            numGuessRemain--
        } else {
            console.log(`Sorry, you are out of guesses. The correct answer is ${Word}`)
        }
    });
    