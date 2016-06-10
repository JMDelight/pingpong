var pingPong = function(number) {
  var result = [];
  for(count = 1; count <= number; count ++) {
    if (count % 3 === 0){
      result.push("ping");
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
