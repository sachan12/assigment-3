// Chapter-09
// Question-01
var city = prompt ("Enter your City Name ")
if(city == "karachi"){
    console.log("Welcome to city of lights")
}
// Question-02
var gender = prompt ("Enter your Gender Name!")
if(gender == "male"){
    console.log("Good Morning Sir!")
}
if(gender == "female"){
    console.log("Good Morning Maa'm")
}
// Question -03
 var signalcolor = prompt("tell the color of road traffic signal")
 if(signalcolor=="red"){
    console.log("Must Stop");
 }
 else if(signalcolor=="yellow"){
    console.log("ready to move");
 }
 else if(signalcolor=="green"){
    console.log("Move now");
 }
// Question -04
var fuel = prompt ("fuel in Car!")
if(fuel <= 0.25){
    console.log("Please refill the fuel in your Car!")
}
// Question -05
// (a)
var a = 4
if (++a===5){
    alert("given condition for variable is true");
}
//(a)out put statement a work correctly;
// (b) 
var b = 82
if (b++===83){
    alert("given condition for variable b is true")
}
//(b)Does not work;
//(c)
var c = 12;
if (c++===13){
   alert ("condition 1 is true")
}
if (c ===13){
    alert ("condition 2 is true")
}
if (++c<14){
    alert ("condition 3 is true")
}
if (c ===14){
    alert ("condition 4 is true")
}
// condition 2 and condition 4 works others does not
//(d)
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost+laborCost;
if (totalCost===laborCost+materialCost){
    alert("the cost equals")
}
//(d)CODE WORKS
//(e)
if(true){
    alert("true")
}
if(false){
    alert("false")
}
// (e) CODE WORKS
//f
if ("car"<"cat"){
    alert("car is smaller than cat")
}
// Question -06
var totalMarks = +prompt("please put total marks first");
var obtainMarks = +prompt("Please enter your obtain marks");
var grade1 = "A-one";
var grade2 = "A";
var grade3 = "B";
var grade4 = "fail";
var marksinpercent = (obtainMarks*100)/totalMarks;
if (marksinpercent>=80){
    document.write("<h1>MarkSheet</h1>")

document.write("<br>" + "Totalmarks;" +""+totalMarks);
document.write("<br>" + "Obtainmarks:" +""+obtainMarks);
document.write("<br>" + "Percentage:" +""+marksinpercent);
document.write("<br>" + "Grade:" + grade1);
document.write("Excellent:")}
else if (marksinpercent>=70){
document.write("<h1>MarkSheet</h1>")
document.write("<br>" + "Obtainmarks:" +""+obtainMarks);
document.write("<br>" + "Percentage:" +""+marksinpercent);
document.write("<br>" + "Grade:" + grade1);
document.write("Good:")}
else if (marksinpercent>=60){
document.write("<h1>MarkSheet</h1>")
document.write("<br>" + "Obtainmarks:" +""+obtainMarks);
document.write("<br>" + "Percentage:" +""+marksinpercent);
document.write("<br>" + "Grade:" + grade1);
document.write("You need to improve:")}
else if (marksinpercent<=60){
document.write("<h1>MarkSheet</h1>")
document.write("<br>" + "Obtainmarks:" +""+obtainMarks);
document.write("<br>" + "Percentage:" +""+marksinpercent);
document.write("<br>" + "Grade:" + grade1);
document.write("Soory:")}
// Question -07
 var secret = 7
 var user = +prompt("Guess the number from 1 t0 10 \n you have to 2 attempts");
 if (user === secret ){
    alert("oh great you guess the correct number");
 }
 else if (user == 8){
    alert("enough close to the secret number");
 }
 else if (user < 7 || (user<11 && user>8)){
    alert("Try again")
 }
 else if (user > 10 ){
    alert("you dont have permission to enter greater than 10")
 }
// Question -08
var number = prompt ("")
if(number = 3){
    console.log("Hello EveryONE!")
}
// Question-09
var number = prompt ("Please enter even or odd number!")
if (number = "even"){
      console.log(1,3,5,7,9)
}
if (number = "odd"){
    console.log(2,4,6,8,10)
}

// Question-10
var temperature = prompt("Please enter temperature!")
if(temperature > 40){
      console.log("It is too hot Outside")
}
if(temperature > 30){
    console.log("The weather today is normal")
}
if(temperature > 20){
    console.log("Today weather is cool")
}
if(temperature > 10){
    console.log("OMG! Today Weather is so cool")
}

// Chapter -12 and -13
// Question-04
var input = prompt("enter a letter \n example : a,b,c...");
if (input == ("a"||"e"||"i"||"o"||"u")&& input.length<=1){
    alert("True")
}
else if (input.length>1){
    alert("please put one letter")
}
else{
    alert("False");
}
// Question -05
var password = "sachan"
var userPassword = prompt("Enter your Password");
if (userPassword==password){
    alert("you entered coorect password")
}
else{
    alert("wrong password try agian")
}
// Question-06
var greeting;
var hour = 19
if(hour<18){
    greeting = "GoodDay";
}
else {
greeting = "Good evening"
}





