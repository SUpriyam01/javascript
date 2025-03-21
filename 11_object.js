//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123and"
tinderUser.Name = "Supriyam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "supriyam1001@ggmail.com",
    fullname: {
        userfullname: {
            firstname: "supriyam",
            lastname: "raj"

        }
    }
}
//console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "sup", 2: "b"}
const obj2 = {3: "sup", 4: "b"}
const obj4 = {5: "sup", 6: "B"}

//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({},obj1, obj2, obj4)


const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const Users = [
    {
        id: 1, 
        email: "sup@gmail.com"
    },
    {
        id: 1, 
        email: "sup@gmail.com"
    },
    {
        id: 1, 
        email: "sup@gmail.com"
    },
    {
        id: 1, 
        email: "sup@gmail.com"
    },
]

Users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('ísLoggedIn'));


const course = { 
    coursename: "js-hindi",
    price: "777",
    courseInstructor: "supriyam"

}
//course.courseInstructor
        const {courseInstructor:  instructor} = course
      //console.log(courseInstructor);
      console.log(instructor);
// {
//     "name": "supriyam",
//     "coursename": "js in Hindi",
//     "price": "100"
// }

[
    {},
    {},
    {},         //randomuser me api very famous api
                //used tools jason formater
]