let x = window.prompt("enter a number between 1 to 100");

// // Basic FizzBuzz
// if (Number.isInteger(parseInt(x, 10))) {
//   if (x >= 0 && x <= 100) {
//     if (x % 3 == 0 && x % 5 == 0) {
//       console.log("FizzBuzz");
//     } else if (x % 5 == 0) {
//       console.log("Buzz");
//     } else if (x % 3 == 0) {
//       console.log("Fizz");
//     } else {
//       console.log(x);
//     }
//   } else {
//     alert("dude, no");
//   }
// } else {
//   alert("gobbledygook");
// }

// Advanced FizzBuzz

if (Number.isInteger(parseInt(x, 10))) {
  // or use isNaN, rather than Number.isInteger(parseInt(x,10))

  if (x >= 0 && x <= 100) {
    if (x % 3 == 0 && x % 5 == 0) {
      x = x + "fizz buzz";
    } else if (x % 3 == 0) {
    }
  } else if (x % 5 == 0) {
    console.log("Buzz");
  } else if (x % 3 == 0) {
    console.log("Fizz");
  } else if (x % 7 == 0) {
    console.log("Woff");
  } else if (x.indexOf(3) == 1 || x.indexOf(3) == 0) {
    console.log("Fizz");
  } else {
    alert("dude, no");
  }
} else {
  alert("gobbledygook");
}
