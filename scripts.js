//let firstName = prompt("what is your first name");
//let lastName = prompt("What is your last name");
//let favoriteColor = prompt("What's your favorite Color")

//document.write(firstName + " ");
//document.write(lastName + " ");
//document.write(favoriteColor + " ");

//const number = prompt("what is your number");
//if(number < 25){
    //document.write('less than 25');
//}
//else if(number >= 25 && number <= 50){
  //  document.write("Between 25 and 50");
//}

//else if(number >= 50 && number <= 75){
  //  document.write("Between 50 and 75")
//}

//else if(number >= 75 && number <= 100){
  //  document.write("Between 75 and 100")
//}

//let firstName = prompt("what is your First Name");
//let lastName = prompt("Whats your last name");
//document.write(firstName + " " + lastName);

//let random = parseInt(Math.random() *10);
//let userInput = prompt("guess a number");
//if(userInput === random)
//document.write('<img src="/Users/corstudents/Desktop/Projects/first-javascript-program/yes.gif">');
//else if(userInput != random){
    //document.write('<img src="/Users/corstudents/Desktop/Projects/first-javascript-program/giphy.gif">');
//}
//console.log(random);

//Loops
// While Loop - A while loop is a loop that runs as long as a condition is true

//let skyIsBlue = true
//let counter = 1
//while(skyIsBlue === true){
    //exit condition: that ends the loop
    //console.log("its true")
    //if(counter === 5){
      //  skyIsBlue = false

    //}
//}

//let userName = prompt("What is your name")
//while(userName != "Tray"){
  //  alert("Please input the name Tray ")
    //userName = prompt("What is your name")
//}

let random = parseInt(Math.random() *10);
let userInput = prompt("guess a number");
if(userInput === random)
document.write("you got it right");
while(userInput != random ){
    alert("try again")
    userInput = prompt("guess the right number")
}
document.write("you got it right")
