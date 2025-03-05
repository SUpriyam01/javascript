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
console.log(typesof myFunction);

