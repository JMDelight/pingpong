var pingCounter = 0;
var pongCounter = 0;

var pingPong = function(number) {
  var results = [];
  var count = 0;
  var countingNumber = 1;
  if (number >= 1 ) {
    countingNumber = 1, count = 0;
  } else {
    countingNumber = -1, count = 2;
  }
  while (count != number) {
    count += countingNumber;
    if (count % 15 === 0) {
      results.push("pingpong");
      pingCounter += 1;
      pongCounter += 1;
    } else if (count % 3 === 0){
      results.push("ping");
      pingCounter += 1;
    } else if (count % 5 === 0) {
      results.push("pong");
      pongCounter += 1;
    } else {
      results.push(count);
    }
  };
  return results;
};

$(document).ready(function() {
  $(".ping-form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#user-input").val());
    var output = pingPong(userInput);
    $("#result").empty();
    $("#ping").text(pingCounter);
    $("#pong").text(pongCounter);
    output.forEach(function(item) {
      $("#result").append("<li>" + item + "</li>");
    });
    if (pingCounter === 15 && pongCounter === 15) {
      alert("You found the secret Pong game(under construction)");
      window.location.href = 'pong.html';
    }
  });
});
