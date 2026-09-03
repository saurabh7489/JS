let MyDate=new Date
// console.log(MyDate.toString());
// console.log(MyDate.toDateString());
// console.log(MyDate.toISOString());
// console.log(MyDate.toJSON());
// console.log(MyDate.toLocaleDateString());
// console.log(MyDate.toLocaleString());
// console.log(MyDate.toLocaleTimeString());

// console.log(typeof MyDate)



let timestamp =   Date.now()
console.log(timestamp);
 
console.log(Math.floor(MyDate.getTime()/1000));

console.log(
 MyDate.toLocaleString('default',{
weekday : "long",
// Date: "long",
}));


