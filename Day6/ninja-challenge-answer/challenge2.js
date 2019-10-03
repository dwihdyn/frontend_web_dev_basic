// Challenge 2: Write your answers here

// 1.Add a new <section> at the end of the page
let newSection = document.createElement('section');
newSection.innerHTML = "<h1>What do i think of JS</h1><p>this is some description</p>";
let parent = document.querySelector('article');
parent.appendChild(newSection);

// 2.Use appendChild to add new skill and education items to the their respective lists
// -skill list
const unorderedList = document.getElementById('skills-list');
let newListItem = document.createElement('li');
newListItem.innerHTML = "Coding Javascript";
unorderedList.appendChild(newListItem);

// -education list
const orderedList = document.getElementById('education-list');
let newListItem2 = document.createElement('li');
newListItem2.innerHTML = "Next Academy";
orderedList.appendChild(newListItem2);

// 3.Add new rows to Employment table
let myTable = document.getElementById('employment-table')
let newRow = document.createElement('tr')
newRow.innerHTML = `<td>Intern</td>
                    <td>Ninja Bus Delivery</td>
                    <td>2014-2015</td>`
myTable.appendChild(newRow)

// 4.Add new skill images
let skillImageDiv = document.getElementById('skill-images')
let newImage = document.createElement('img')
newImage.setAttribute('src','./rabbit.gif')
skillImageDiv.appendChild(newImage)