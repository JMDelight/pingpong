var pingPong = function(number) {
  var result = [];
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
      result.push("pingpong");
    } else if (count % 3 === 0){
      result.push("ping");
    } else if (count % 5 === 0) {
      result.push("pong");
    } else {
      result.push(count);
    }
  };

  return result;
};

$(document).ready(function() {
  $(".ping-form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#user-input").val());
    var output = pingPong(userInput);
    $("#result").text(output);
  });
});
