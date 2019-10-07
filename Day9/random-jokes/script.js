//===== using vanilaJS
/*
step1 : fetch url
step2 : convert url to json using inputName.json()
step3 : printout the data
*/

fetch("https://api.chucknorris.io/jokes/random") // get the jokes from this site
  .then(function(rESpOnSe) {
    console.log(rESpOnSe);
    // debugger;
    return rESpOnSe.json(); // converts given link to json (lists of objects). output is successful (200) or unsuccessful (400)
  })
  // below create function that printout the joke, with name called 'dAtA'
  .then(function(dAtA) {
    console.log(dAtA);
    console.log(dAtA.value);
    // debugger;

    /* Method1 to add the in the page | appendChild method
    // let addJoke = document.createElement("h3");
    // addJoke.innerHTML = dAtA.value;
    // console.log(addJoke);
    // document.body.appendChild(addJoke);
    */

    // Method2 | direct body innerHTML method
    // document.body.innerHTML += `<h3>${dAtA.value}</h3>`; // innerhtml is also a string itself. hence can be combined

    // Method3 | direct ID innerHTML method
    document.getElementById("JS-method").innerHTML += `<p>${dAtA.value}</p>`;

    // Method4 | entirely replaced method (not recommended)
    // document.write(dAtA.value);
  });
document.write("hello world vanillaJS");

//===== using JQuery
/*
step1 : state url
step2 : method "GET" or "POST"
step3 : explain what to do if success
step4 : explain what to do if error
*/

$.ajax({
  url: "https://api.chucknorris.io/jokes/random", // #1
  method: "GET", // # 2
  // #3
  success: function(rEsULT) {
    console.log(rEsULT.value);
    document.getElementById(
      "JQuery-method"
    ).innerHTML += `<p>${rEsULT.value}</p>`;
  },
  // #4
  error: function(ohNo) {
    console.log(`Error : ${ohNo}`);
  }
});
