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

let cars = ["Benz", "Toyota", "Rolce Royce", "Jaguar", "Bentley", "Aston Martin", "Peugot", "Isuzu", "Suzuki", "Ferrari", "Bugahtti", "Masserati"];
console.log(cars.length);
let mix = ["chinedu", 12345, "Going to chrch", null];
console.log(mix);

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


const home = document.getElementById("home");
function seek(){ 
  return "Hello World Nice to See u";
}
home.innerHTML = seek();

function check(){ 
    let a = 20;
    let b = 40;
    let c = a + b;
    return c;
 
}
const still = document.getElementById("still");
still.innerHTML += check();

let nativeName = "Chidera";
let madianName = "Nwangene";
let allName = nativeName + " " +  madianName;
console.log(allName);

let number = 50;
let main = "Chelsea";

let full = number + " " + main;
console.log(full);

let message = "Hello";
message += ", how are you?";
console.log(message);

let same = "Alice";
let agee = 30;
let info = "My name is " + same + " and I am " + agee + " years old.";
console.log(info);

let side = "Alice";
let mac = 30;

let infos = `My name is ${side} and I am ${mac + 12} years old.`;
console.log(infos);

let poem = `
Roses are red, Violets are blue, JavaScript is awesome, And so are you!`;

function greet(name, gage) {
  return `Hello, ${name.toUpperCase()}! I am ${gage}`;
}
console.log(`Message: ${greet("biiZii", 30)}`);

let product = "Laptop";
let price = 250000;
let discount = 50000;

let summary = `
Product: ${product}
Original Price: ₦${price}
Discount: ₦${discount}
Total Payable: ₦${price - discount}
`;

console.log(summary);

// document.body.innerHTML = "<h1>Welcome to My Website</h1><p>This text is added using JavaScript.</p>";

let newDiv = document.createElement("div");
newDiv.innerHTML = "<h3>Dynamic Section</h3><p>Created using createElement()</p>";

document.body.appendChild(newDiv);



let card = `
  <div class="card">
    <h2>Product Name</h2>
    <p>Price: ₦25000</p>
  </div>
`;

document.getElementById("so").innerHTML += card;


const change = document.getElementById("photo").src = "RihannaArt.jpeg";

let items = ["HTML", "CSS", "JavaScript", "React"];
let html = "<ul>";

for (let item of items) {
  html += `<li>${item}</li>`;
}

html += "</ul>";
document.getElementById("list").innerHTML = html;

let userInput = `Chinedu Nwankwo`;
let p = document.createElement("p");
p.textContent = userInput;  // Prevents HTML injection
document.querySelector(".allSec").appendChild(p);
let th = !(10 > 5);
console.log(th);


let ps = 12 + 5 * 2; 
console.log(ps);

let a = 0;
let b = 5;
let c = a > b && a !== 0 ? a + b : a - b;
console.log(c);