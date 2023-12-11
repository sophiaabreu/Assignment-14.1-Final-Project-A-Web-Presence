function playCraps(){
    //playCraps() is a function use to simulate a craps game //
    console.log("playCraps() started");
    //roll the dice
    var die1 = 1 + Math.floor(6 * Math.random());
    console.log(die1);
    document.getElementById("die1Res").innerHTML = die1;
    var die2 = Math.ceil(6 * Math.random());
    console.log(die2);
    document.getElementById("die2Res").innerHTML = die2;
    // find sum of the two dice //
    var sum  = die1 + die2;
    console.log(sum);
    document.getElementById("sumRes").innerHTML = sum;

    //if sum equals 7 or 11, they lose//
    if(sum == 7 || sum == 11){
        document.getElementById("finalRes").innerHTML = "YOU LOSE!! Try again :)";
    } else  if(die1 == die2 && die1%2 == 0){
    //if sum doubles and even, they win//
    document.getElementById("finalRes").innerHTML = "YOU WIN! Great Job";
    } else{
        //othewise, they draw//
        document.getElementById("finalRes").innerHTML = "This was not your lucky round. Please try again";
    }

}

//Aditional concept//

// Function for addition
function add(num1, num2) {
    return num1 + num2;
}

// Function for subtraction
function subtract(num1, num2) {
    return num1 - num2;
}

// Function for multiplication
function multiply(num1, num2) {
    return num1 * num2;
}

// Function for division
function divide(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return 'Cannot divide by zero';
    }
}

let number1 = parseFloat(prompt('Enter the first number:'));
let number2 = parseFloat(prompt('Enter the second number:'));
let operation = prompt('Enter the operation (+, -, *, /):');

// It is going to be perform the selected operation based on user input//
let result;
if (!isNaN(number1) && !isNaN(number2)) {
    switch (operation) {
        case '+':
            result = add(number1, number2);
            break;
        case '-':
            result = subtract(number1, number2);
            break;
        case '*':
            result = multiply(number1, number2);
            break;
        case '/':
            result = divide(number1, number2);
            break;
        default:
            result = 'Invalid operation';
            break;
    }

    alert(`Result of ${number1} ${operation} ${number2} = ${result}`);
} 
else {
    alert('Please enter valid numbers.');
}