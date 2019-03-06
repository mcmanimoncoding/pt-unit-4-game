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

var crystal1;
var crystal2;
var crystal3;
var crystal4;

$(document).ready(function () {

    function startUp() {

    $("#your-total-display").text(yourNum);
    $("#target-display").text(targetNum);
    $("#wins-display").text(wins);
    $("#losses-display").text(losses);

    
    };

    $("#btn-start").on("click", function(){
        generateTarget();
        
    });
    function generateTarget() {
    var target = Math.floor(Math.random()*(120-19+1)+19);
    console.log(target);
    $("#target-display").text(target)};

    startUp();

});

