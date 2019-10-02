function greet(name) {
  document.write(names);
}

const names = [
  "Nicholas",
  "Kevin",
  "Audrey",
  "longer than nick",
  "KJ",
  "Delilah",
  "Josh",
  "way longer than 'longer than nick'"
];

let longest_name = "";

// Q1
let i = 0;
while (i < names.length) {
  document.write(`Hello, ${names[i]}!<br/> `);
  i++;
}

// // breaking while loop
// let t = window.prompt("get number");
// while (t != 0) {
//   t = prompt("pick again");
// }

document.write("<br/>");

// Q2
for (j = 0; j < names.length; j++) {
  document.write(`Hello, ${names[j]}!<br/> `);
}

// Q3

for (k = 1; k < names.length; k++) {
  //debugger;
  if (names[k - 1].length > names[k].length) {
    if (names[k - 1].length > longest_name.length) {
      longest_name = names[k - 1];
    } else {
      longest_name = longest_name;
    }
  } else if (names[k].length > longest_name.length) {
    longest_name = names[k];
  }
}

document.write("<br/>");

document.write(`Hello, ${longest_name}!, You have the longest name`);
