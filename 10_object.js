// singleton
//object.create

//object literals



const mySyn = Symbol("key1")


const Jsuser = {
    name: "supriyam",
    "full name": "supriyam raj",
    mySym: "mykey1",
    age: 22,
    location: "bihar",
    email : "supriyam1001@gamil.com",
    isLoggedIn: "False",
    LastLoginDay: ["monday","sunday"]


}



// console.log(Jsuser.email)
// console.log(Jsuser["email"])
//     console.log(Jsuser["full name"])
//     console.log(typeof Jsuser.mySym)

    Jsuser.email ="supriyamgpt@gmail.com"
//Object.freeze(Jsuser)
Jsuser.email = "supriyammicrosoft@gmail.com"
//console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello Js user");
}
Jsuser.greetingTwo = function(){
    console.log('hello Js user, ${this.name}');
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
