// Challenge 3: Write your answers here

// 1.If the random-section is in black background color, 
// display the texts in bold and white color so that they become readable.

const random = document.getElementById('random-section');
let backgroundColor = random.style.backgroundColor;
if (backgroundColor == 'black'){
    random.style.color = 'white';
    random.style.fontWeight = '900';
}
