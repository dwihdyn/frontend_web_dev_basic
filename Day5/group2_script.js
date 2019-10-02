const romanNumerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
  // key: value
};

let Input = prompt("enter between 1 to 3999");
let Out = "";

if (isNaN(Input) || Input < 0 || Input > 4000) {
  alert("dude, no");
} else {
  In = Input;

  while (In != 0) {
    if (In >= romanNumerals.M) {
      In = In - romanNumerals.M;
      Out = Out + "M";
    } else if (In >= romanNumerals.CM) {
      In = In - romanNumerals.CM;
      Out = Out + "CM";
    } else if (In >= romanNumerals.D) {
      In = In - romanNumerals.D;
      Out = Out + "D";
    } else if (In >= romanNumerals.CD) {
      In = In - romanNumerals.CD;
      Out = Out + "CD";
    } else if (In >= romanNumerals.C) {
      In = In - romanNumerals.C;
      Out = Out + "C";
    } else if (In >= romanNumerals.XC) {
      In = In - romanNumerals.XC;
      Out = Out + "XC";
    } else if (In >= romanNumerals.L) {
      In = In - romanNumerals.L;
      Out = Out + "L";
    } else if (In >= romanNumerals.XL) {
      In = In - romanNumerals.XL;
      Out = Out + "XL";
    } else if (In >= romanNumerals.X) {
      In = In - romanNumerals.X;
      Out = Out + "X";
    } else if (In >= romanNumerals.IX) {
      In = In - romanNumerals.IX;
      Out = Out + "IX";
    } else if (In >= romanNumerals.V) {
      In = In - romanNumerals.V;
      Out = Out + "V";
    } else if (In >= romanNumerals.IV) {
      In = In - romanNumerals.IV;
      Out = Out + "IV";
    } else if (In >= romanNumerals.I) {
      In = In - romanNumerals.I;
      Out = Out + "I";
    }
  }
  alert(`the roman number of ${Input} is ${Out}`);
}
