//  primitive(call by value)

//   7 types : string,Number,,boolean,null,undefined,symbol,bigInt

const score = 400
const scoreValue =100.9

const isLoggedIn = false
const outsideTemp = null


let userEmail;


const id = Symbol('123')
const anotherId = Symbol('1234')


console.log(id === anotherId);

//const bigNumber = 649288288386272n
//  Refrence (Non primitive)

//Array, Object, Function


const heros = ["shakiman", "nagraj", "ritik"    ]; //array
let myObj = {
    name: "supriyam",
    age: 22,
}//object
const myFunction = function(){
    console.log("hello world");


}//function
console.log( anotherId);

//++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (primitive), Heap (Non-Primitive)


let myYoutubename = "supriyam"

let anothername = myYoutubename
anothername = "Raj"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "supriyam1001@gmail.com",
    upi:"üser@ybl"
}


let userTwo = userOne
userTwo.email ="supriyam1001@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

