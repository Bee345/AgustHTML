// Bellow Here I Am Starting the practicals For My Students In JavaScript.
// We Are Talking About Variables.
let chinedu = 12345678901234567890n;
console.log(typeof(chinedu));

if (true) {
  let x = 5;
  const y = 10;
  console.log(x, y); // ✅ Works inside block
}
// console.log(x, y);

let g = 0 / 0;
console.log(g);
console.log(typeof g);


const notif = document.getElementById("show");
const age = 20;
const isAdult = true;
// let hope = "";
if(age >= 18 && isAdult === true){ 
console.log("Welcome U Are Above the Age Limit");
notif.innerHTML += "<h3>Welcome U Are Above the Age Limit</h3>";
}else{
    notif.innerHTML = "Sorry U are Not Allowed";
    console.log("Sorry U are Not Allowed")
}
let big = 1234567890123456789012345678901234567890n;
console.log(typeof big);

const cars = ["Benz", "Toyota", "Rolce Royce", "Jaguar", "Bentley", "Aston Martin", "Peugot", "Isuzu", "Suzuki", "Ferrari", "Bugahtti", "Masserati"];
console.log(cars[2]);

let person = {
  name: "Alice",
  age: 25,
  isStudent: true
};
console.log(person); 

let user = {
    firstName: "Akachukwu",
    userName: "QueenBella",
    school: "UNIZIK",
  greet: function() {
    console.log(`Hello ${user.firstName} U Are welcome And Ur Username Is ${user.userName} And U School At ${user.school}`);
  }
};
user.greet();
console.log(user.firstName);



function check(){ 
    let a = 20;
    let b = 40;
    let c = a + b;
    return c;
 
}
const still = document.getElementById("still");
still.innerHTML += check();