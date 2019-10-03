// what html do i need?
// a button, something to show when user click the button

// what javascript i need?
// to move the button & change color of button when onhover

const myButton = document.getElementById('my-button');

// this function will return random color code in this format => 'rgb(0,0,0)'
function randomColor (){
    // to understand more about Math.floor and Math.random, read this (https://www.w3schools.com/js/js_math.asp)
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`
}
// you can use console.log(randomColor()) to see what is the output
// everytime you call the function,it will give you different output 
// console.log(randomColor())

let count = 0;
// add event handler to move the button & change color when mouseover
myButton.onmouseover = function (){
    // if count less than 10, then do the code below
    if (count<10) {
        let width = myButton.offsetWidth //get the width of button
        let height = myButton.offsetHeight //get the width of button
        myButton.style.backgroundColor = randomColor(); //set the button backgroundColor to the color you get from randomColor function
        //using innerHeight&innerWidth to get the window height&width to make sure the button won't display outside the screen
        myButton.style.top = Math.random() * (window.innerHeight-height) + 'px'; //set the position of button from top
        myButton.style.left = Math.random() * (window.innerWidth-width) + 'px'; //set the position of button from left
        count++; //everytime mouseover, increase the count by 1
        myButton.innerHTML = count; // then replace the word in button
    }
    // when count >= 10, then do the code below
    else {
        myButton.innerHTML = 'Finally!';
        myButton.style.color = 'red';
        myButton.style.backgroundColor = 'yellow';
    }
}    
// add event listener to button
myButton.onclick = function () {
    const endGame = document.getElementById('show-word');
    // when user click button after it stop move away, then do code below
    if (count == 10){
        endGame.innerHTML = "Too slow!"
    }
    // when user click before count reached 10, do the code below
    else {
        endGame.innerHTML = "You are Awesome!";
    }
}        
