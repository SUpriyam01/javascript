

function sayMyname(){
console.log("s");
console.log("u");
console.log("p");
console.log("r");
console.log("i");
console.log("y");
console.log("a");
console.log("m");

}

//sayMyname  ()  //exectuion or refrence

// function addTwoNumbers( number1, number2){
//     console.log(number1 + number2);

// }
// addTwoNumbers(5, 7);
// addTwoNumbers(5, "7");

function addTwoNumbers( number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
    
}

const result = addTwoNumbers(5, 7);

// console.log("result:", result);

function loginUserMessage(username = "sup"){
    // if(username === undefined){
    //     console.log("please enter a username");
    //     return 
    

    // }
    // return'${username} just logged in'
    if(!username === undefined){
        console.log("please enter a username");
        return 
    

    }
    return'${username} just logged in'


}

// console.log(loginUserMessage("supriyamR"))
// console.log(loginUserMessage("supriyam"))

function calculatecartprice(val1, val2, ...num1){  //...(rest operator or spread operator depend on condition)
    return num1
}
// console.log(calculatecartprice(200, 400, 500, 5000))

const user = {
    username: "supriyam",
    price: 999

}
function handleobject(anyobject){
    console.log('username is ${anyobject.username} and price is ${anyobject.price}');

}
handleobject(user)
handleobject({
    username: "sup",
    price: 499
})
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));