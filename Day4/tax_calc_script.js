// Tax Adder
function getFinalPrice(price, taxPercent) {
  if (taxPercent >= 0) {
    return price * ((100 + taxPercent) / 100);
  } else {
    alert("i want some negative tax too man lmao");
  }
}

const result1 = getFinalPrice(50, 6);
console.log(result1);

const result2 = getFinalPrice(25, 10);
console.log(result2);

const result3 = getFinalPrice(100, 6);
console.log(result3);

// Handle 0% Tax

const result4 = getFinalPrice(50, 0);
console.log(result4); //should return 50

// Handle negative % Tax

const result5 = getFinalPrice(50, -5);
console.log(result5); // prints out "Please provide a valid number of tax percentage"
