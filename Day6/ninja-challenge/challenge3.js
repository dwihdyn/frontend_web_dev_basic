// Challenge 3: Write your answers here

/*
- find out how the current background in black or white by :
    1) go to the source of the black background, knowing it by going to index.html,  we can see the source is `random-section`
    2) to go deep in `random-section` , define that in `let abc = document.GetElementById("random-section")`
    3) go to `inspect > console, can see two option (id or style). since we looking at color, go to style by entering `abc.style` into inspect > console
    4) click the drag-down and u will see lots of choices. since we want to find the background source, find `backgroundColor` in the list
    5) finally, u found it. the answer path is `abc.style.backgroundColor` 
- store `abc.style.backgroundColor` inside a variable
- if (abc == black) {fontColor black; fontweight (to bold it) 1000}
*/

let randomBackground = document.getElementById("random-section");
let currentBackground = randomBackground.style.backgroundColor;
// console.log(currentBackground);
if (currentBackground == "black") {
  randomBackground.style.color = "white";
  randomBackground.style.fontWeight = 1000;
}
