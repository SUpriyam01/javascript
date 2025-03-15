const name ="supriyam"
const repoCount = 50
//console.log(name + repoCount + " value");




console.log("Hello my name is ${name.To} and my repo count is ${repoCount}");



const gameName = new String('supriyam');

console.log(gameName.__proto__);




//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(4));
//
// 
//console.log(gameName.indexOf('i'));
const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-15,4)
console.log(anotherString);

const newStringOne = "  supriyam  "
console.log( newStringOne);
console.log(newStringOne.trim());

const url = 'http://supriyam.com/supriyam%30raj'

console.log(url.replace('%30','-'))

console.log(url.includes('gopal'))

console.log(gameName.split('_'))