let star = "*";

for (i = 1; i < 5; i++) {
  document.write(`${star.repeat(i)} <br/>`);
}

// // from youtube https://www.youtube.com/watch?v=n1-SS_6ZPQs
// document.getElementsByTagName("title")[0].innerHTML =
//   "0003 - TrianglePatterns_Demo";

// var run = function() {
//   println("printSimpleTriangle");
//   printSimpleTriangle(15);

//   println("");

//   println("printPyramidalTriangle");
//   printPyramidalTriangle(25);

//   println("");

//   println("printPyramidalTriangleV2");
//   printPyramidalTriangleV2(25);
// };

// var printSimpleTriangle = function(depth) {
//   for (var x = 0; x < depth; x++) {
//     for (var y = 0; y <= x; y++) {
//       print("*");
//     }
//     println("");
//   }
// };

// var printPyramidalTriangle = function(depth) {
//   for (var x = 0; x < depth; x++) {
//     for (var y = 0; y <= depth - 1 + x; y++) {
//       if (y >= depth - 1 - x) print("*");
//       else print("&nbsp;&nbsp;");
//     }
//     println("");
//   }
// };

// var printPyramidalTriangleV2 = function(depth) {
//   for (var x = 0; x < depth; x++) {
//     for (var y = 0; y < depth * 2 - 1; y++) {
//       if (y >= depth - 1 - x && y <= depth - 1 + x) print("^");
//       else print("#");
//     }
//     println("");
//   }
// };

// var body = document.getElementsByTagName("body")[0];
// var print = function(text) {
//   body.innerHTML += text;
// };
// var println = function(text) {
//   print(text + "</br>");
// };

// run();
