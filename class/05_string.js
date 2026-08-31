let name="saurabh"
let gameScore=256

console.log(`hello my name is ${name} and i 
    get ${gameScore} in game which is my score`)

const gameName = new String("saurabh")
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf("r"))
const subString = gameName.substring(0,5);
console.log(subString);
const newString = gameName.slice(-6,4)
console.log(newString);

const email= "saurab hpande y@gami il.com"
console.log(email);

console.log(email.trim())
console.log(email.replace("@","jaihoo"));
console.log(email.includes("saurabh"));

console.log(email.split(" "));
