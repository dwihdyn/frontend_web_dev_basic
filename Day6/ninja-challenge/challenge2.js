// Challenge 2: Write your answers here

//===== add <section> at the end of the page | using creatElement("tagHere")
let newSection = document.createElement("section");
// add the title & content | <h2> will still use original red color because in index.html, challenge1.js setting has been loaded already. so, whatever <h2> setting madde in challenge2.js will be IGNORED, and still follow original setting. if we load challenge2 first, then challenge1, challenge2 <h2> will be blue too
newSection.innerHTML = `<h2>What do I think of JS</h2> <br/> <p>Lorem ipsum dolor 
  sit amet consectetur adipisicing elit. Ab, omnis. Numquam placeat quos
   sint. Dolores optio atque ut possimus voluptatem.</p>`;

/* alternative method
let parent = document.querySelector("article");         // go directly to <article>, can use querySelector since theres only one <article>
parent.appendChild(newSection);                         // inside <article>, put the new section at the BOTTOM (since we using .appendChild)
*/

document.body.appendChild(newSection); // adding the new `child` at the BOTTOM of the body

//===== use .appendChild to add new skill & education
/*
- go to wholeSkill (getElementById)
- create newSkill (createElement())
- populate newSkill data (innerHTML)
- put that newSkill data at the bottom of the wholeSkill (existingSkill.appendChild(newSkill))
*/
// new skill
let wholeSkill = document.getElementById("skills-list");
let newSkill = document.createElement("li");
newSkill.innerHTML = "trolling other students (occasionally teachers too)";
wholeSkill.appendChild(newSkill);

// new education
let wholeEdu = document.getElementById("education-list");
let newEdu = document.createElement("li");
newEdu.innerText = "Bsc (Hons) Trolling, Major in Meme Maker, lmao University";
wholeEdu.appendChild(newEdu);

//===== add new rows of employment | same method as previous question (using .appendChild.......)
let wholeTable = document.getElementById("employment-table");
let newRow = document.createElement("tr");
newRow.innerHTML =
  "<td>Cleaner</td><td>Ninja Van Delivery</td><td>2013-2016</td>";
// console.log(newRow);
wholeTable.appendChild(newRow);

//===== add new images in `skill` section
let allSkillImg = document.getElementById("skill-images");
let newSkillImg = document.createElement("img");
newSkillImg.setAttribute(
  "src",
  "https://image.shutterstock.com/image-vector/shield-letter-s-logosafesecureprotection-logomodern-260nw-633031571.jpg"
);
allSkillImg.appendChild(newSkillImg);
