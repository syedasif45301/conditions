/*If a is greater than b return 'a is greater than b' else 'a is less than b'.
 Try to implement it in two ways using if else 

console.log(" CONDITIONS EXERCISE-1");

let a = 2;
let b = 22;

if (a > b) {
    console.log("a is greater than b");
}
else {
    console.log("a is less than b");
}


// if else using  ternary operator
console.log("using ternary operator:")
let a1=24;
let b1=45;
console.log((a1>b1)?"a is greater than b":"a is less than b");

*/

/*Check if a number is even or not
Enter a number: 2 
2 is an even number
 Enter a number: 9 
 9 is is an odd number 

let num=prompt("Enter number:")
if(num%2==0){
    document.write(`${num}`," is an even number");
}
else{
    document.write(`${num}`," is an odd number");
}


/*Get user input using prompt(“Enter your age:”). If user is 18 or older , 
give feedback: 'You are old enough to drive' but if not 18 give another feedback 
stating to wait for the ‘number’ of years he needs to turn 18. 
Enter your age: 30
You are old enough to drive. 
Enter your age:15 You are left with 3 years to drive. 


let age=prompt("Enter your age:");
if(age>=18){
    document.write("You are old enough to drive");
}
else{
    document.write("You are left with " +`${18-age}`+ " years to drive"); 
}


 // largest of 3 numbers i.e  2,4,7

let a2=2;
let b2=4;
let c2=7;
console.log("Printing biggest of 3 numbers i.e 2,4 and 7")
if(a2>b2 && a2>c2){
    console.log(a2,"a2 is big");
}
else if(b2>c2 && b2>a2){
    console.log(b2,"b2 is big");
}
else{
    console.log(c2,"c2 is big");
}



/*Check if the day is working day or weekend day. Using switch case 

let day="monday";
switch(day){
    case "monday":console.log("working day");
    break;

    case "tuesday":console.log("html");
    break;

    case "wednesday":console.log("css");
    break;

    default:console.log("sunday");

}

*/


