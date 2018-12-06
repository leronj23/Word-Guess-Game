// Array of words
var sportsTeams = ["bulls", "falcons", "pacers", "braves", "celtics", "cardinals", "rams", "royals", "chiefs", "lakers", "pistons", "rockets", "dolphins", "giants", "jets", "patriots", "jazz", "cubs", "indians", "redskins"];
var randonTeam = [];
var underScores = [];
var rightLetter = [];
var wrongLetter = [];

// Choose a random sports team
function chooseRandomSportsTeam() {

    randonTeam = sportsTeams[Math.floor(Math.random() * sportsTeams.length)];
    // console.log(randonTeam);

    // Create underscores based on length of word
    createUnderscores();
}
chooseRandomSportsTeam();

// Create underscores based on length of word
function createUnderscores() {
    for (var i = 0; i < randonTeam.length; i++) {

        underScores.push("_");
        document.getElementById("rightLetters").innerHTML = underScores.join(" ");
    }
    // console.log(underScores);
}

// Get users guess
document.addEventListener("keypress", (event) => {
    var keycode = event.key;

    // Add letter to Underscore DOM
    if (randonTeam.indexOf(keycode) > -1) {

        for (var j = 0; j < randonTeam.length; j++) {

            if (randonTeam[j] == keycode) {
                underScores[j] = keycode;
                document.getElementById("rightLetters").innerHTML = underScores.join(" ");
            }
        }
        rightLetter.push(keycode);

        // Check if user win
        if (underScores.join("") == randonTeam) {

            // Set timer to show the last letter for the underscore before the alert is displayed
            setTimeout(myFunction, 100)

            function myFunction() {

                var answer = confirm("You beat Hangman! Do you want to play again?");
                // console.log(answer);

                // Reset Game
                if (answer == true) {

                    reset();
                }
            }
        }
    }
    // Wrong Guesses
    else {

        // check if wrong letter was already used
        if (wrongLetter.indexOf(keycode) == -1) {

            // Add wrong letter to array
            wrongLetter.push(keycode);

            // if wrong letter wasn't used. Send to Wrong Guesses DOM
            wrongGuess(keycode);

            // Check if user hit the 6 guess limit
            if (wrongLetter.length == 6) {

                // Set timer to show the last letter for the underscore before the alert is displayed
                setTimeout(myFunction, 100)

                function myFunction() {

                    var answer = confirm("Sorry, you lose! Do you want to play again?");
                    // console.log(answer);

                    // Reset Game
                    if (answer == true) {

                        reset();
                    }
                }
            }
        }
    }
});

// Wrong Guesses
function wrongGuess(keycode) {

    // Add letter to Wrong Guesses DOM
    document.getElementById('wrongLetters').innerHTML = wrongLetter.join(" ");
}

// Reset Game
function reset() {

    // Clear all arrays
    randonTeam = [];
    underScores = [];
    rightLetter = [];
    wrongLetter = [];

    // Clear Right Letters and Wrong Letters field
    document.getElementById("rightLetters").innerHTML = "";
    document.getElementById('wrongLetters').innerHTML = "?";

    // Choose a random sports team
    chooseRandomSportsTeam();
}