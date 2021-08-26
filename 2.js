//1.Function
let dob = 2002;
function Age(dob){
    const now = new Date();
    let age = now.getFullYear()-dob;
    return age;
}
console.log("i born in",dob,"and now i'am",Age(dob),"years old.");

//2.String

//concat
let a = "   Hello";
let b = "World   ";
let c = a.concat(" ",b);
console.log(c);

//includes
console.log(c.includes("Hello"));

//length
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(txt.length);

//split
console.log(c.split(" "));

//slice
console.log(txt.slice(-3));

//substring
console.log(txt.substring(0,3));

//toLowerCase
let txt2 = txt.toLowerCase();
console.log(txt2);

//toUpperCase
console.log(txt.toUpperCase());

//trim
console.log(c.trim());

//valueOf
console.log(c.valueOf());

