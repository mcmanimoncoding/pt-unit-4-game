// Create startup function
// calculates a Math.random and pushes value to var targetNum
// function displays 4 crystals var crystal1 - crystal 4
// assigns random number value to each crystal var
// onclick crystal will display assigned value, value will be added to var total

// variables
var targetNum = "0";
var yourNum = "0";
var wins = 0;
var losses = 0;

// var crystal1;
// var crystal2;
// var crystal3;
// var crystal4;

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
        $("#target-display").text(targetNum);
        $("#wins-display").text(wins);
        $("#losses-display").text(losses);


    };
    
    $("#btn-start").on("click", function () {

        generateTarget();
        // pushCrystals();
        // generateNum();
        crystalValue();
        
        crystal.cry1.value = crystalValue(1, 12);
        crystal.cry2.value = crystalValue(1,12);
        crystal.cry3.value = crystalValue(1,12);
        crystal.cry4.value = crystalValue(1,12);
        console.log(cry1.value);
    });

    function crystalValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // function pushCrystals(){

       
    // };
        

    function generateTarget() {
        var target = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        console.log(target);
        $("#target-display").text(target)
    };

    

    $("#cry1").on("click", function () {
        console.log("Cry1")
    });
    $("#cry2").on("click", function () {
        console.log("Cry2")
    });
    $("#cry3").on("click", function () {
        console.log("Cry3")
    });
    $("#cry4").on("click", function () {
        console.log("Cry4")
    });


    startUp();

});