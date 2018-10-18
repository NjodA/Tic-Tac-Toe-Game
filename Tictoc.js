$(document).ready(function() {
  var move = 1;
  var play = true;
  var count = 0;

  $(".s").click(function() {
    console.log("click", $(this).attr("id"));

    if ($(this).attr("id") == "o") {
      move = 2;
      console.log("move", move);
    }
  });

  $("#square tr td").click(function() {
    console.log("move inside of this", move);
    console.log("Play: ", play);

    if ($(this).text() == "" && play) {
      console.log(count);
      if (move % 2 == 1) {
        $(this).text("X");
        count++;
      } else {
        $(this).text("O");
        count++;
      }

      move++;

      var result = checkWinner();
      if (result == "X" || result == "O") {
        var message = "Player with " + result + " wins!";
        swal(message);

        play = false;
      } else if (count === 9) {
        swal("It is a tie");
      }
    }
  });

  function checkWinner() {
    var space1 = $("#square tr:nth-child(1) td:nth-child(1)").text();
    var space2 = $("#square tr:nth-child(1) td:nth-child(2)").text();
    var space3 = $("#square tr:nth-child(1) td:nth-child(3)").text();

    var space4 = $("#square tr:nth-child(2) td:nth-child(1)").text();
    var space5 = $("#square tr:nth-child(2) td:nth-child(2)").text();
    var space6 = $("#square tr:nth-child(2) td:nth-child(3)").text();

    var space7 = $("#square tr:nth-child(3) td:nth-child(1)").text();
    var space8 = $("#square tr:nth-child(3) td:nth-child(2)").text();
    var space9 = $("#square tr:nth-child(3) td:nth-child(3)").text();
    if (space1 !== "" && space1 == space2 && space2 == space3) {
      return space3;
    } else if (space4 !== "" && space4 == space5 && space5 == space6) {
      return space6;
    } else if (space7 !== "" && space7 == space8 && space8 == space9) {
      return space9;
    } else if (space1 !== "" && space1 == space4 && space4 == space7) {
      return space7;
    } else if (space2 !== "" && space2 == space5 && space5 == space8) {
      return space8;
    } else if (space3 !== "" && space3 == space6 && space6 == space9) {
      return space9;
    } else if (space1 !== "" && space1 == space5 && space5 == space9) {
      return space9;
    } else if (space3 !== "" && space3 == space5 && space5 == space7) {
      return space7;
    }
  }

  //reset
  $(".reset-button").on("click", function(event) {
    console.log("more events");
    $("td").text("");
    play = true;
    move = 1;
  });
});
