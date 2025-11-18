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

// let newDiv = document.createElement("div");
// newDiv.innerHTML = "<h3>Dynamic Section</h3><p>Created using createElement()</p>";

// document.body.appendChild(newDiv);



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


let cage = 17;

if (cage >= 18) {
  console.log("You are eligible to vote.");
} 

let temperature = 5;

if (temperature > 30) {
  console.log("It's hot outside.");
} else {
  console.log("It's not too hot today.");
}

let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}


let sage = 16;
let hasLicense = true;
if (sage >= 18 && hasLicense) {
  console.log("You can drive!");
} else {
  console.log("You are not allowed to drive.");
}


let userName = "FlapDeJong";
let password = "123456"
if (userName === "BiiZii") {
  if (password === "123456") {
    console.log(`Welcome ${userName} Login successful!`);
  } else {
    console.log("Incorrect password.");
  }
} else {
  console.log("Username not found.");
}

let numString = "22445";
let num = Number(numString);


console.log(num);           
console.log(typeof numString);

let buu = 2;
let checkers = Boolean(1.00);
console.log( checkers);

// if ("Hello") {
//   console.log("This runs!");  
// } else{ 
//   console.log("This Doesn't Run!");
// }

// if (1) {
//   console.log("This will NOT run.");
// } else {
//   console.log("0 is falsy!");
// }

let rr = 50;
let tt = "50";

if (rr === tt) {
  console.log("Well They are 2 diffrient Things");
} else{ 
  console.log("Still Looking em Up");
}

const select = document.getElementById("ages");

for (let age = 18; age <= 55; age++) {
  let options = document.createElement("option");
  options.value = age;
  options.textContent = age;
  
  select.appendChild(options);
}


// Function Expression
const time = function time(){ 
    const now = new Date();
}

// Arrow Function
const addArrow = (a, b) => a + b;
console.log(addArrow(3, 4));

function add(a, b) {
  // console.log(a + b);
  return a + b;
}

console.log(add(5, 3));


let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[0,2][1,0]);


// Well This Below Is where i made the code for the bulb project
const bulb = document.getElementById("bulb");
const toggleBtn = document.getElementById("toggleBtn");

let isOn = false;

toggleBtn.addEventListener("click", () => { 
  isOn = !isOn; //for the toggle state

  if(isOn){ 
    bulb.src = "./Idea-Bulb-On22.png";
    toggleBtn.textContent = "ON";
    toggleBtn.classList.remove("off");
    toggleBtn.classList.add("on");
  } else{ 
    bulb.src = "./Idea-Bulb-Off2.png";
    toggleBtn.textContent = "OFF";
    toggleBtn.classList.remove("on");
    toggleBtn.classList.add("off");
  }
})
