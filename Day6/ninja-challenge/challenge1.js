// Challenge 1: Write your answers here

/* 
FORMAT : 
> let nameHere =  document.whereYouWantToDoChanges
> nameHere.whatSettingYouWant
*/

//===== change body background color
document.querySelector("body").style.backgroundColor = "lightblue"; // use `querySelector()`since only one body | alternate answer `document.body.style.backgroundColor = "lightblue";`

//===== change header background image
document.querySelector("header").style.backgroundImage =
  "url('company_logo.jpg')"; // use `querySelector()`since only one header, and querySelector() select the FIRST one only. | `.style.backgroundImage = "url('company_logo.jpg')"` if the image is in local storage

//===== change color of all h2
let title = document.getElementsByTagName("h2"); // define it as `title`, because we will run for loop to all  h2
console.log(title);

for (let i = 0; i < title.length; i++) {
  // looping to color all h2
  title[i].style.color = "blue"; // directly `title.style.color="blue"` will not work bc `title` is an array, you need put color exactly on each h2
}

//===== update the profile with your details
// name
document.getElementById("name").innerHTML = "<strong>Dwii hadyan</strong>"; // innerHTML can change the font. innerText only can change the words

// description (HARDER VERSION)
let newDesc = document.getElementsByClassName("descriptions")[1]; // get the second `descriptions` class
// console.log(newDesc);
let newStringDesc = newDesc.innerHTML.replace(
  "coding",
  "dehbwbdbxjbhjsbjkx asbsabhx ksjxbskbx"
); // enter which part you want to change, and which part is the new sentence
newDesc.innerHTML = newStringDesc; // deploy the new word

// description (easy)
let updateLesson = document.getElementsByTagName("strong"); // there are two strong. 0 : Dwi hadyan in line 22, this file | 1: line 22, index.html file
// console.log(updateLesson);
updateLesson[1].innerHTML = "HTML, CSS, Javascript (python soon)";

// skills

// education

// employment

//===== change profile pic & skill pic USING FOR LOOP
let images = document.getElementsByTagName("img");
console.log(images);
// loop through to all `img` tags. if want to change different pic, do the `//-- put `learn javascript too` method
for (let j = 0; j < images.length; j++) {
  images[j].setAttribute(
    "src",
    "https://i.kym-cdn.com/entries/icons/facebook/000/000/091/TrollFace.jpg"
  );
}
