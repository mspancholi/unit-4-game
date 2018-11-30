$(document).ready(function() {

    var Wins = 0;
    var Loses = 0;
    var mathRandom1 = Math.floor((Math.random() * (121-19 + 1) + 19));
    var mathRandom2 = Math.floor((Math.random() * (13-1 + 1) + 1));
    var mathRandom3 = Math.floor((Math.random() * (13-1 + 1) + 1));
    var mathRandom4 = Math.floor((Math.random() * (13-1 + 1) + 1));
    var mathRandom5 = Math.floor((Math.random() * (13-1 + 1) + 1));
    var totalScore = 0

    function compare (){
    if (totalScore === mathRandom1){
        Wins++;
        $("#YouWonLost").text("You Won");
        $("#Wins").text(Wins);
        totalScore = 0;
        $("#Total_Score").text(totalScore);
        generateRandom();
    }
    else if(totalScore > mathRandom1) {
        Loses++;
        $("#YouWonLost").text("You Lost"); 
        $("#Loses").text(Loses);
        totalScore = 0;
        $("#Total_Score").text(totalScore);
        generateRandom();
    }
    else {
        $("#YouWonLost").text("");
        }  

    }
   
    function generateRandom () {
        mathRandom1 = Math.floor((Math.random() * (121-19 + 1) + 19));
        $("#mathRandom1").text(mathRandom1);
        mathRandom2 = Math.floor((Math.random() * (13-1 + 1) + 1));
        mathRandom3 = Math.floor((Math.random() * (13-1 + 1) + 1));
        mathRandom4 = Math.floor((Math.random() * (13-1 + 1) + 1));
        mathRandom5 = Math.floor((Math.random() * (13-1 + 1) + 1));

        console.log("Max = .99 " + (Math.floor(0.99 * (121-19)+19)));
        console.log("Max = 0 " + (Math.floor(0 * (121-19)+19)));

    }


    $("#mathRandom1").text(mathRandom1);
    console.log("display chosen number");

    $("#crystal_1").on("click", function() {
        totalScore += mathRandom2; 
        $("#Total_Score").text(totalScore);
        compare();
        console.log("Crystal_1 pressed");
    
      });

      $("#crystal_2").on("click", function() {
        totalScore += mathRandom3;
        $("#Total_Score").text(totalScore);
        compare();
        console.log("Crystal_2 pressed");
      });

      $("#crystal_3").on("click", function() {
        totalScore += mathRandom4;
        $("#Total_Score").text(totalScore);
        compare();
        console.log("Crystal_3 pressed");
      });

      $("#crystal_4").on("click", function() {
        totalScore += mathRandom5;
        $("#Total_Score").text(totalScore);
        compare();
        console.log("Crystal_4 pressed");
      });

});