let selector = document.getElementById("soul");
let b1 = document.getElementById("wikibutton");
let b2 = document.getElementById("databasebutton");
let b3 = document.getElementById("dictionarybutton");
var select = new Audio('https://files.catbox.moe/rxzb1m.wav');
var move = new Audio('https://files.catbox.moe/paul1o.wav');


var repeater
function hoverwiki() {
  selector.style.display = "block";
  var rect = b1.getBoundingClientRect();
  selector.style.top = (rect.top + selector.offsetHeight)  + "px";
  selector.style.left = (rect.left - selector.offsetWidth) + "px";
}
function hoverdatabase() {
  selector.style.display = "block";
  var rect = b2.getBoundingClientRect();
  selector.style.top = (rect.top + selector.offsetHeight)  + "px";
  selector.style.left = (rect.left - selector.offsetWidth) + "px";
}
function hoverdictionary() {
  selector.style.display = "block";
  var rect = b3.getBoundingClientRect();
  selector.style.top = (rect.top + selector.offsetHeight)  + "px";
  selector.style.left = (rect.right + selector.offsetWidth) + "px";
}

function hide() {
  selector.style.display = "none";
}