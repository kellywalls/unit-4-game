// create global variable

var targetNumber = 0;
var totalWins = 0;
var totalLosses = 0;
var totalScore = 0;
var crystal1Value = 0;
var crystal2Value = 0;
var crystal3Value = 0;
var crystal4Value = 0;


$(document).ready(function() {

    restartGame();

    function restartGame() {

        // Set total score to zero.
        $("#totalScore").text(0);

        // Get a random number for the target number. It shoukld be between 19 - 120.
        var minNumber = 19;
        var maxNumber = 120;
        targetNumber = randomNumberFromRange(minNumber, maxNumber);

        //Display the target number.
        $("#randomNumber").text(targetNumber);

        // Get a random number for each of the crystals. It should be between 1 - 12.

        var minNumber = 1;
        var maxNumber = 12;
        crystal1Value = randomNumberFromRange(minNumber, maxNumber);
        crystal2Value = randomNumberFromRange(minNumber, maxNumber);
        crystal3Value = randomNumberFromRange(minNumber, maxNumber);
        crystal4Value = randomNumberFromRange(minNumber, maxNumber);

    }

    // This function generates a random number between the minimum and maximum numbers.
    function randomNumberFromRange(min,max)
        {
            return Math.floor(Math.random()*(max-min+1)+min);
        }

    // Listener function for the user to click on the first crystal.
    $("#crystal1").on("click", function() {

        // depending on which crystal the user clicks on, add the corresponding value to total score.
        totalScore = parseInt($("#totalScore").text()) + crystal1Value;
        // Display the new total score.
        $("#totalScore").text(totalScore);
        evaluateWinLose();
    });

    // Listener function for the user to click on the second crystal.
    $("#crystal2").on("click", function() {

        // depending on which crystal the user clicks on, add the corresponding value to total score.
        totalScore = parseInt($("#totalScore").text()) + crystal2Value;
        $("#totalScore").text(totalScore);
        evaluateWinLose();
    });

    // Listener function for the user to click on the third crystal.

    $("#crystal3").on("click", function() {

        // depending on which crystal the user clicks on, add the corresponding value to total score.
        totalScore = parseInt($("#totalScore").text()) + crystal3Value;
        $("#totalScore").text(totalScore);
        evaluateWinLose();
    });

    // Listener function for the user to click on the fourth crystal.

    $("#crystal4").on("click", function() {

        // depending on which crystal the user clicks on, add the corresponding value to total score.
        totalScore = parseInt($("#totalScore").text()) + crystal4Value;
        $("#totalScore").text(totalScore);
        evaluateWinLose();
    });

 
    // Determine if user has won or lost the game.
    function evaluateWinLose() {

         // If the total score equals the target number then increment wins and reset game.
        if (parseInt($("#totalScore").text()) === targetNumber) {
            var numberOfWins = parseInt($("#winNumber").text() + 1);
            $("#winNumber").text(numberOfWins);
            restartGame();
        }

  
         // If the total score is greater than the target number then increment wins and reset game.  
        if ($("#totalScore").text() > targetNumber) {
            var numberOfLosses = parseInt($("#lossNumber").text() + 1);

            $("#lossNumber").text(numberOfLosses);
            restartGame();
        }
    };

});