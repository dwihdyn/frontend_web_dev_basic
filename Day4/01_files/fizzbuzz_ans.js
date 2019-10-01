// Challenge: FizzBuzz 
let input = window.prompt("Integer between 1-100:");
if ( isNaN(input) ){  //check whether input not a number
    alert("Please key in Integer only!");
}
else {
    if (0 < input && input <= 100){ //check whether number between 1-100
        if ((input % 3 === 0) && (input % 5 === 0)){
            alert('fizzbuzz');
        }
        else if (input % 3 === 0){
            alert('fizz');
        }
        else if (input % 5 === 0){
            alert('buzz');
        }
        else {
            alert(input);
        }
    }
    else {
        alert('Please key in Integer between 1-100!');
    }
}