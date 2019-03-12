// Create startup function
// calculates a Math.random and pushes value to var targetNum
// function displays 4 crystals var crystal1 - crystal 4
// assigns random number value to each crystal var
// onclick crystal will display assigned value, value will be added to var total

// variables
var target = 0;
var yourNum = 0;
var wins = 0;
var losses = 0;


$(document).ready(function () {


    var crystal = {
        cry1: {
            name: "amethyst",
            value: 0
        },
        cry2: {
            name: "amethyst",
            value: 0
        },
        cry3: {
            name: "amethyst",
            value: 0
        },
        cry4: {
            name: "amethyst",
            value: 0
        }
    };



    function startUp() {

        $("#your-total-display").text(yourNum);
        $("#target-display").text(target);
        $("#wins-display").text(wins);
        $("#losses-display").text(losses);


    };

    $("#btn-start").on("click", function () {
        start();

    });

    function start() {
        generateTarget();
        crystalValue();
        // runGame();
        crystal.cry1.value = crystalValue(1, 12);
        crystal.cry2.value = crystalValue(1, 12);
        crystal.cry3.value = crystalValue(1, 12);
        crystal.cry4.value = crystalValue(1, 12);
        console.log("Crystal values: ", crystal.cry1.value, crystal.cry2.value, crystal.cry3.value, crystal.cry4.value);

    }


    function crystalValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function generateTarget() {
        target = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        console.log(target);
        $("#target-display").html(target)
    };

    // on click functions that push crystal value to yourNum and

    $("#cry1").on("click", function () {
        console.log("Crystal 1: " + crystal.cry1.value);
        yourNum = parseInt(yourNum) + crystal.cry1.value;
        $("#your-total-display").html(yourNum);
        check();
    });
    $("#cry2").on("click", function () {
        console.log("Crystal 2: " + crystal.cry2.value);
        yourNum = parseInt(yourNum) + crystal.cry2.value;
        $("#your-total-display").html(yourNum);
        check();
    });
    $("#cry3").on("click", function () {
        console.log("Crystal 3: " + crystal.cry3.value)
        yourNum = parseInt(yourNum) + crystal.cry3.value;
        $("#your-total-display").html(yourNum);
        check();
    });
    $("#cry4").on("click", function () {
        console.log("Crystal 4: " + crystal.cry4.value)
        yourNum = parseInt(yourNum) + crystal.cry4.value;
        $("#your-total-display").html(yourNum);
        check();
    });

    // checks if loss or win 
    function check() {
        // if yourNum is larger than target
        if (yourNum > target) {
            console.log("You Lose");
            alert("You Lose!");
            losses++;
            $("#losses-display").text(losses);
            target = 0;
            yourNum = 0;
            startUp();
            start();

        } else if (yourNum == target) {
            console.log("You Win!");
            alert("You Win!")
            wins++;
            $("#wins-display").text(wins);
            // target = 0;
            startUp();
            start();
            yourNum = 0;
        } else {
            // return check();
        }
    }


    startUp();

});