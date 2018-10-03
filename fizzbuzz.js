/*let number = prompt("whats the first number we should check  ");
if (number % 15 === 0){
    document.write("Fizz Buzz")
} else if(number % 3 === 0){
    document.write("fizz");
} else if(number % 5 === 0){
    document.write("buzz");
} else{
    document.write(number)
}*/

//let userName = prompt("what is your user name");
//if (userName.length  % 2 === 0){
  //  document.write("even")
//} else {
//    document.write("odd");
//}
let number1 = prompt("whats is your first number");
let number2 = prompt("what is your second number");
let number3 = prompt("what is your thrid number");
let number4 = prompt("what is your fourth number");
let sum = parseInt(number1) + parseInt(number2) + parseInt(number3) + parseInt(number4);
document.write(sum)

// && = And all conditions have to true to run it 
// || = Or at least one condition has to be true
let name = "Tray";
let age = 26;
let pi =26.00;
let isTrue = false;

if( name === "Tray" && age ===26){
    console.log("That's correct")
}

if(name != "Devan" || age != 26){
    console.log("That's incorrect")
}