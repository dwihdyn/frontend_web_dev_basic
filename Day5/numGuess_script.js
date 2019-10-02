const gen = Math.floor(Math.random() * 11);

let ent;

while (gen != ent) {
  ent = prompt(`Enter 1 to 10`);
  if (gen == ent) {
    alert("good job mate");
  } else if (gen > ent) {
    alert("pick bigger number");
  } else {
    alert("pick smaller number");
  }
}
