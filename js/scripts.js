$(document).ready(function(){
  var age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $('#age').show();
  } else {
    $('#below').show();
  }

  event.preventDefault();
});