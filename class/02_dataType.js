// there are various type of data type such as
// integer,string,boolean,big int,undefined,and object=null;
// let name="sourabh" //string
// let age=20 //integer or number
// let isLoggedIn =true //boolean
// let temp=null; // object 
// let addharCard; //undefined

// console.table([  typeof name,typeof age,typeof isLoggedIn,typeof temp,typeof addharCard])


// premitive datatype
// 7type string,boolean,number,null,undefine,bigint,symbol;

// non premitive or reference data type
// array , object , function 

let name = "saurabh" //string
let myboolean = true
let num=1234
let temp=null
let userEmail;
let number = 132566372891n
let id = Symbol(123)
let userId=Symbol(123)

let heroes=["ironmen","capton","spider"]
let myobj={
    name:"saurabh",
    age:20,
}
const myfunction = function(){
    console.log("hello world")
}
console.table({name,myboolean,num,temp,userEmail,number,id,userId,heroes,myobj,myfunction})

console.log(id===userId)