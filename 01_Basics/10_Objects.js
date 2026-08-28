//Object ko singleton kese kr skte hai
//suppose u're making an app tinder..
const tinderUser=new Object()//Object declare//singleton object h//{}
//const tinderUser={}//{} non signelton obj h

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
console.log(tinderUser);


//regularUser object hai.. fullname apne aap me object hai & username bhi
//nested kitne v kr skte..
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firtsname:"Poonam",
            lastname:"Kumari"

        }
    }

}
console.log(regularUser.fullname.userfullname.firtsname);

const obj1={1:"a",2:"b"}//1 key,a value
const obj2={3:"a",4:"b"}
//mainly use line 30 wala
//const obj3={...obj1, ...obj2}//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// const obj3={obj1,obj2}//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj3=Object.assign({},obj1,obj2)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj3);

//jb bhi data base se value aayegi wo aarary of objects hoga
const users=[
    {
    id:1,
    email:"h@gmail.com"
    },
    {
    },
    {
    },

]
//7 if u want to access user 1st value
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser))//[ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser));

//sometimes we loop trhrough in an object and finding value..so value maybe exist hin nhi krti ho..
//if value nhi hogi to crash ho ksti so..directly ask that u have value or not
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true

//Lec3 objects
//DEstructing Of Objects and aarays.. 1st Objects
//destructing of objects
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}
//now u can do to get valuess
console.log(course.courseInstructor);//Hitesh
//but above was lil mess  u've to write again & agin all
//so

const{courseInstructor}=course 
console.log(courseInstructor);//Hitesh

//u can also one do rename or make small example: CourseInstructor:Instructor (write simply)
const {courseInstructor:instructor}=course
/*1. To extract value from object => const {keyname} = object name;
2. To rename keyname for using more times => const {keyname: new name } = object name;
3. JSON is a collection of key-value pairs just like object and a JSON array is an ordered list of value.*/

console.log(courseInstructor);//Hitesh


//#below was destructing
// const navbar=({company})=>{

// }
// navbar(company="hitesh")

//#API concept(jab apna kaam dusre pe dalo..use apis kehte hai)
//Apis-backend se jo value aati hai use kese likhte h
//ab values json me aati hai {}.. this object is json
// {
//     name:"hitesh"
//     "coursename":"js in hindi",
//     "price":"free"

// }

//sometimes Apis milte hai object of array ke form me
[
    {},
    {},
    {}
]