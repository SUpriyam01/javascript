//  Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//let myCreateDate = new Date(2025, 1, 4)
//let myCreateDate = new Date(2025, 1, 4,  6, 7)
//let myCreateDate = new Date("2025-1-14")
let myCreateDate = new Date("02-12-2025")


//console.log(myCreateDate.toDateString());

//let myTimeStamp = Date.now();
//console.log(myCreateDate.getTime());

//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() +1);

newDate.toLocaleString('default',{
    weekday:"long"
    
})