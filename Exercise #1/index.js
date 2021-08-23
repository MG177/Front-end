console.log("Hello World");

let eyoo = "eyoo";
console.log(eyoo);
eyoo = "Eheey";
console.log(eyoo);

var hoo = "hoo";
console.log(hoo);

console.log(eyoo,hoo);

let firstName   = "Prayer";
let middleName   = "MG";
let lastName    = "Terok"
let name = middleName;
console.log("Hello my name is",firstName,middleName,lastName,"but you can call me", name);

const now = new Date();
let dob = 2002;
let age = now.getFullYear()-dob;
console.log("i born in",dob,"and now i'am",age,"years old.");

let collegeStudent = true;
if (collegeStudent == true) {
    console.log("I am a College Student");
    let gpa = null;
    if (gpa >= 3.5) {
        console.log("OTW Cumlaude");
    }
}else{
    console.log("I am not a College Student");
}
