//button + input
var button = document.getElementById('button');
var input = document.getElementById('input');
//films
var inception = document.getElementById('inception');
var justice = document.getElementById('justice-league');
var panther = document.getElementById('black-panther');
var wwoman = document.getElementById('wonder-woman');
var deadpool = document.getElementById('deadpool');


//start functions
button.onclick = function () {
  if (input.value === inception.getAttribute('value')) {
    return inception.style.opacity = 1;
    }
  else if (input.value === justice.getAttribute('value')) {
    return justice.style.opcativy = 1;
  }
  else if (input.value === panther.getAttribute('value')) {
    return penther.style.opcativy = 1;
  }
  else if (input.value === wwoman.getAttribute('value')) {
    return wwoman.style.opcativy = 1;
  }
  else if (input.value === deadpool.getAttribute('value')) {
    return deadpool.style.opcativy = 1;
  }
  else {
    return input.style.background = "red";
  }
}
