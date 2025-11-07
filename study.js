let _x = 5;
const $y= 6;
//const for constant values
//let for consitant variable behavior
//var not used because of scope confusion and is not needed to initilize


//---------------------------
//JS operators, arithmetics and assignment pretty much the same as C++
if(false){}else if(true){}else;
switch(expression)
{
    case x:
        break;
    case y:
        break;
    default:
}
//JS if conditional, loops the same as well
let text =(age <18)? "child": "adult";//same as java(ternary)
//loops----------
for(let i = 0; i< 10;i++){}//the same 
//string search
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
let index = text.lastIndexOf("locate");
text.search("locate");
//functions:
function test()//standard
{
    return;
}
//arrow functions
let myFunction = (a,b) => a *b;
//==
let myFunction2 = function(a, b) {return a * b}
//objects
const car = {type:"Fiat", model:"500", color:"white"};
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
console.log(person.age);
//object methods
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
//arrays
const cars = ["Saab", "Volvo", "BMW"];
//==
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
let car = cars[0];
//array methods are standard
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
//sort works for alphabet only
//for numeric
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
//iterations
array.forEach(element => {
    
});
const numbers2 = [45, 4, 9, 16, 25];
let txt = "";
numbers2.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);//the same as java
const numbers3 = [45, 4, 9, 16, 25];
let allOver18 = numbers3.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
const numbers4 = [45, 4, 9, 16, 25];
let someOver18 = numbers4.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
//types arrays
const myArr2 = new Uint8Array(5);
const myArr3 = Uint8Array.of(0,1,2,3,4);
//typed arrays to handle binary data
const myArr4 = new Uint8ClampedArray(10);
//sets only have unique values
const letters = new Set(["a","b","c"]);
const letters2 = new Set();
letters instanceof Set;
//maps
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
//==
const fruit2 = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
fruits.get("apples");
//events
<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
//function constructor
const myFunction = new Function("a", "b", "return a * b");
//hoisting
myFunction(5);

function myFunction(y) {
  return y * y;
}
//self invoking functions
(function () {
  let x = "Hello!!";
})();//functions are objects
//this here is used as global object
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

person.fullName.call(person1);//call used to use a method belonging to another object
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.apply(person1);//takes argyments as array
person.fullName.call(person1, "Oslo", "Norway");
//objects 
const person = new Object({
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
});
function Person(first, last, age, eye) {//same as java
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
//destructering
let {firstName, lastName} = person;
Object.assign(person1, person2);//iterations
let text = Object.entries(person);//
//getter and setter are the same as java
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
let myPromise = new Promise(function(myResolve, myReject) {//producing and consuming code
  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
//promise and async
async function myFunction() {
  return "Hello";
}
async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
let value = await promise;//only able to be used in asynch
async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("!JOFJAISFJLDJ");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {resolve("DSASDSA");}, 3000);
  });//timeout
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();

//The HTML elements as objects
//The properties of all HTML elements
//The methods to access all HTML elements
//The events for all HTML element
<html>
<body>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello World!";
//inner HTML for content of the element
</script>

</body>
</html>
document.createElement(element)
document.removeChild(element)
document.appendChild(element)
document.replaceChild(new, old)
const element = document.getElementsByTagName("p");// all <p> elemnts\
const x = document.getElementsByClassName("intro");// class names
//css
{/* <html>
<body>

<p id="p2">Hello World!</p>

<script>
document.getElementById("p2").style.color = "blue";
</script>

</body>
</html> */}
// <!DOCTYPE html>
// <html>
// <style>
// #container {
//   width: 400px;
//   height: 400px;
//   position: relative;
//   background: yellow;
// }
// #animate {
//   width: 50px;
//   height: 50px;
//   position: absolute;
//   background-color: red;
// }
// </style>
// <body>

// <p><button onclick="myMove()">Click Me</button></p> 

// <div id ="container">
//   <div id ="animate"></div>
// </div>

// <script>
// function myMove() {
//   let id = null;
//   const elem = document.getElementById("animate");   
//   let pos = 0;
//   clearInterval(id);
//   id = setInterval(frame, 5);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++; 
//       elem.style.top = pos + "px"; 
//       elem.style.left = pos + "px"; 
//     }
//   }
// }
// </script>

// </body>
// </html>
//java script events
{/* <script>
document.getElementById("myBtn").onclick = displayDate;
</script> */}
{/* <body onload="checkCookies()"></body> */}
{/* <input type="text" id="fname" oninput="upperCase()"></input> */}
// element.addEventListener(event, function, useCapture);//event listener
// element.addEventListener("click", myFunction);
// element.addEventListener("click", mySecondFunction);

//navigating through nodes
{/* <html>
<body>

<h1 id="id01">My First Page</h1>
<p id="id02"></p>

<script>
document.getElementById("id02").innerHTML = document.getElementById("id01").firstChild.nodeValue;
</script>

</body>
</html> */}
{/* <html>
<body>

<h1 id="id01">My First Page</h1>
<p id="id02">Hello!</p>

<script>
document.getElementById("id02").innerHTML = document.getElementById("id01").childNodes[0].nodeValue;
</script>

</body>
</html> */}