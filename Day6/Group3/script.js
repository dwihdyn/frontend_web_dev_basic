// add many styles
function addFunc() {
  document
    .getElementById("mod-div")
    .classList.add("add-style", "dumb-style", "another-dumb-style");
}

// remove selected styles
function removeFunc() {
  document.getElementById("mod-div").classList.remove("another-dumb-style");
}

// check whether given styles are implemented (return true/false)
function containsFunc() {
  abc = document.getElementById("mod-div").classList.contains("dumb-style");
  console.log(abc);
}

// see the name of the style in that index location. (return name_of_the_style OR null, if index out of range or style dont exist
function itemFunc() {
  def = document.getElementById("mod-div").classList.item("2");
  console.log(def);
}

// toggle : another way to add/remove styles
function toggleAddFunc() {
  document
    .getElementById("mod-div")
    .classList.toggle("another-dumb-style", true);
}

function toggleRemoveFunc() {
  document
    .getElementById("mod-div")
    .classList.toggle("another-dumb-style", false);
}

// only selecting the first of the many classes
function qSelFunc() {
  document.querySelector(".q-sel").style.backgroundColor = "lightblue";
}

// innerHTML : return html content of what has been defined in innerHTML()
function inHtml() {
  document.getElementById("mod-div").innerHTML =
    "i want blue background too :(";
}
