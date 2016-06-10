var pingPong = function(number) {

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
