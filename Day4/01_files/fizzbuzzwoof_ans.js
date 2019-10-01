// Challenge: FizzBuzzWoof 
let input = window.prompt("number between 1-100:");
if ( isNaN(input) ){  //check whether input not a number
    alert("Key in number please!");
}
else {
    if (input>0 && input<=100) {
        let answer;
        answer = "" ;
        
        if (input % 3 === 0){
            //is same as answer = answer + 'fizzbuzz'
            answer+= 'fizz';
        }
        if (String(input).indexOf(3) !== -1) {
            if (input[0]!==input[1]){
                answer+= 'fizz';
            }
            else {
                answer+= 'fizzfizz';
            }
        }
        if (input % 5 === 0){
            answer+= 'buzz';
        }
        if (String(input).indexOf(5) !== -1) {
            if (input[0]!==input[1]){
                answer+= 'buzz';
            }
            else {
                answer+= 'buzzbuzz';
            }
        }
        if (input % 7 == 0){
            answer+= 'woof';
        }
        if (String(input).indexOf(7) !== -1) {
            if (input[0]!==input[1]){
                answer+= 'woof';
            }
            else {
                answer+= 'woofwoof';
            }
        }
        if (answer === "") {
            answer = input; 
        }
        alert(answer); 
    }
    else {
        alert('key in number between 1-100!');
    }
}

