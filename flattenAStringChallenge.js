/*Learn how to access an item in an array, that is in an array
by playing aroung, google, etc.

var name = [ ["Gina", "DeBell"] , ["Scott", "Yamada"] ];
console.log(name[0][0]);   //Gina
console.log(name[0][1]);   //DeBell
console.log(name[1][0]);   //Scott
console.log(name[1][1]);   //Yamada
*/


var inputArray = [ [ 11, 13 ] , [ 0, 2 ] ];
//make sure I can access each digit
// console.log(inputArray[0][0]);    //grabs digit 11
// console.log(inputArray[0][1]);    //grabs digit 13
// console.log(inputArray[1][0]);    //grabs digit 0
// console.log(inputArray[1][1]);    //grabs digit 2

//declare variables
//var first;
//var second;
var third;
var fourth;

var firsthalf = inputArray.slice(0,1);
console.log(firsthalf);
console.log(fourth = firsthalf[0][0]);     //grabs digit 11
console.log(third = firsthalf[0][1]);     //grabs digit 13

var secondhalf = inputArray.slice(1,2);
console.log(secondhalf);
console.log(second= secondhalf[0][0]);    //grabs digit 0
console.log(first = secondhalf[0][1]);    //grabs digit 2

var finalArray = [];
finalArray.push(first);
finalArray.push(second);
finalArray.push(third);
finalArray.push(fourth);

console.log("ANSWER: " + finalArray);
