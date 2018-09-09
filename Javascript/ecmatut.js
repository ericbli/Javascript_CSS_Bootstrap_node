// ---------- LET ----------
if(true){
  // If you use var then the variable is available
  // globally versus let which makes the variable
  // available only in the block
//   let x = 10; // Local
  var x = 23400;  //Global
  document.write("Global x = " + x + "<br />");
}

// x is undefined here
document.write("x = " + x + "<br />");

// If you use let in a block with the same name
// it won't effect the value outside of the block

var y = 10

if(true){
  let y = 20
  document.write("Local y = " + y + "<br />");
}

document.write("y = " + y + "<br />");

// ---------- CONST ----------
// You can define constant values that can't change
const PI = 3.14159
document.write("PI = " + PI + "<br />");

// This throws an error
// PI = 2.13

// This won't since the constant is in a block
if(true){
  const PI = 2.13
  document.write("local PI = " + PI + "<br />");

}
document.write("________________________________________<br />");

// ---------- DATA TYPES ----------
// You still don't declare a data type, but instead
// the value defined defines the type being Boolean,
// Number, String, Object, Symbol

document.write("typeof true : "+typeof true + "<br />");
document.write("typeof 3.14 : "+typeof 3.14 + "<br />");
document.write("typeof string: "+typeof "string" + "<br />");
document.write("typeof Symbol() : "+typeof Symbol() + "<br />");
document.write("typeof {a:1} : "+typeof {a:1} + "<br />");
document.write("typeof [1,2,3] : "+typeof [1,2,3] + "<br />");
document.write("typeof undefined : "+typeof undefined + "<br />");

// ---------- STRINGS ----------
// You can use string interpolation using template
// literals
let fName = "Eric";
let lName = "Li";
document.write(`fName lName ` + "<br />");
document.write("fName lName " + "<br />");
document.write(`${fName}  ${lName}` + "<br />");//string interpolation
document.write(`${fName} ____  ${lName}` + "<br />");
document.write(`${fName} __,,__  ${lName}` + "<br />");
document.write("${fName} ____  ${lName}" + "<br />");
// Calculation in output using template literals
let num1 = 100
let num2 = 50
document.write(`10 * 5 = ${num1 * num2}` + "<br />");
document.write(`10 * 5 = ${num1}*${ num2}` + "<br />");//not work!!!


document.write("________________________________________<br />");

// You can use tagged template literals to modify
// output using a function
// The strings array contains the strings and the
// values array the substitutions
//您可以使用标记的模板文字进行修改
//使用函数输出
//字符串数组包含字符串和
// values数组替换
function doMath(strings, ...values) {
  if (strings[0] == 'Add'){
    document.write(`${values[0]} + ${values[1]} = ${values[0] + values[1]} <br />`);
  } else if (strings[0] == 'Sub'){
    document.write(`${values[0]} - ${values[1]} = ${values[0] - values[1]} <br />`);
  }
  else if (strings[0] == 'Mul'){
    document.write(`${values[0]} - ${values[1]} = ${values[0] * values[1]} <br />`);
  }
  else if (strings[0] == 'Div'){
    document.write(`${values[0]} / ${values[1]} = ${values[0] / values[1]} <br />`);
  }
}

doMath`Add${10} ${200}`;
doMath`Sub${10} ${209}`;
doMath`Mul${10} ${209}`;
doMath`Div${10} ${209}`;
// Iterate over characters for循环打印
for(let c of fName){
  document.write(`${c} <br />`);
}

// Repeat a string
document.write("Hello 你好！   ".repeat(3) + "<br />");

// Does a string start with a value
document.write(fName.startsWith("Er") + "<br />");

// Does it end with
document.write(fName.endsWith("c") + "<br />");

// Does it include
document.write(fName.includes("ri") + "<br />");
document.write(fName.includes("e") + "<br />");

// Multiline strings
let multilineStr = "This is \
a multiline \
string";
let aaa = "This is \
a multiline \
string";
document.write(`${multilineStr} <br />`);
document.write(`${aaa} <br />`);
let anothermlstr = `Another
multiline
string`;
let bbb = `Another都是一样

multiline
string`;
document.write(`${anothermlstr} <br />`);

document.write(`${bbb} <br />`);
document.write("-------------------------------------<br />");
// ---------- FUNCTIONS ----------
// Default values are defined next to parameters
function getSum(num1 = 1, num2 = 1){
  document.write(`${num1} + ${num2} = ${num1+num2}<br />`);

  // arguments[] only receives the value passed
  document.write(`${arguments[0]} + ${arguments[1]}<br />`)
}

  getSum(3,8);
  document.write("-------------------------------------<br />");
    getSum(8);
  document.write("-------------------------------------<br />");
//getSum(7);

// Rest parameters, which are preceeded by ...
// become an array
// You can only have 1 rest parameter and it must
// be defined last

function getSumMore(...vals){
  let sum = 0;
  for(let i = 0, len = vals.length; i < len; i++){
    sum += vals[i];
  }
  document.write(`The sum is ${sum}<br />`);
}

getSumMore(1,2,3,4);

// You can also pass arrays
let vals = [1,2,3,4,5];
getSumMore(...vals);

// Arrow functions define parameters followed
// by the body of the function
document.write("--------函数名=(参数 )=>处理后的返回值---------<br />");
//函数名=(参数 )=>处理后的返回值
let difference = (num1, num2) => num1 - num2;
document.write(`5 - 10 = ${difference(5,10)}<br />`);

// They can contain more then 1 statement
//函数名=(参数 )=>处理 没有返回值
document.write("--------函数名=(参数 )=>处理 没有返回值---------<br />");

let mult = (num1, num2) => {
  let product = num1 * num2;
  document.write(`${num1} * ${num2} = ${product}<br />`);
};

mult(5,50);
document.write("-------------------------------------<br />");
// You can use arrow functions with map, filter and
// map
let valArr = [1,2,3,4];

// Reduce applies a function against an accumulator
// to get a single result
let sumVals = valArr.reduce((a, b) => a + b);
document.write(`Sum : ${sumVals}<br />`);

let sumVals2 = valArr.reduce((a, b) => a * b);
document.write(`Sum2 : ${sumVals2}<br />`);
let sumVals3 = valArr.reduce((a, b) => a / b);
document.write(`Sum3 : ${sumVals3}<br />`);

let sumVals4 = valArr.reduce((a, b) => a - b);
document.write(`Sum4 : ${sumVals4}<br />`);

// Filter returns those values that pass the condition
let evens = valArr.filter(v => v % 2 == 0);
document.write(`Evens : ${evens}<br />`);

let odds = valArr.filter(v => v % 2 != 0);
document.write(`Odds : ${odds}<br />`);
// Map performs the given action on every item passed
let doubles = valArr.map(v => v * 2);
document.write(`Doubles : ${doubles}<br />`);
let tripples = valArr.map(v => v * 3);
document.write(`TRipples : ${tripples}<br />`);
document.write("-------------------------------------<br />");
// ---------- OBJECTS ----------
// You create object literals like this
function createAnimal(name, owner){
  return {
    // Properties
    name,
    owner,
    // Create a method
    getInfo(){
      return `${this.name} is owned by ${this.owner}`
    },
    // Objects can contain other objects
  address: {
    street: '123 Main St',
    city: 'Pittsburgh'
  }
  };
}

var spot = createAnimal("Spot", "Doug");

// Execute method
document.write(`${spot.getInfo()}<br />`);

// Access object in the object
document.write(`${spot.name} is at ${spot.address.street}<br />`);

// Get properties and methods of object
document.write(`${Object.getOwnPropertyNames(spot).join(" ")} <br />`);

// You can store values from Objects with destructoring
let { name, owner } = spot;
document.write(`Name : ${name}<br />`);

// Get the inner class value
let { address } = spot
document.write(`Address : ${address.street}<br />`);

// You can destructor arrays as well
let favNums = [2.718, .5772, 4.6692];
let [,,chaos] = favNums;
document.write(`Chaos : ${chaos}<br />`);

// You can use rest items to grab part of an array
let [, ...last2] = favNums;
document.write(`2nd Num : ${last2[0]}<br />`);

// This can be used to switch values
let val1 = 1, val2 = 2;
[val1,val2] = [val2,val1];
document.write(`Val2 : ${val2}<br />`);
document.write("-------------------------------------<br />");
// ---------- CLASSES ----------
// Classes now work much like they do in other languages
class Mammal{
  constructor(name){
    this._name = name;
  }

  // Getter
  get name() {
    return this._name;
  }

  // Setter
  set name(name){
    this._name = name;
  }

  // Static Mammal creator
  static makeMammal(name){
    return new Mammal(name);
  }

  getInfo(){
    return `${this.name} is a mammal`;
  }

}

// Create an object
let monkey = new Mammal("Fred");

// Change name
monkey.name = "Mark";

// Call getter
document.write(`Mammal : ${monkey.name}<br />`);

// Create Mammal using static function
let chipmunk = Mammal.makeMammal("Chipper");
document.write(`Mammal 2 : ${chipmunk.name}<br />`);

// You can inherit properties and methods with extends
class Marsupial extends Mammal{
  constructor(name, hasPouch){
    // Call the super class constructor
    super(name);
    this._hasPouch = hasPouch;
  }

  get hasPouch() {
    return this._hasPouch;
  }

  set hasPouch(hasPouch){
    this._hasPouch = hasPouch;
  }

  // You can override methods
  getInfo(){
    return `${this.name} is a marsupial`;
  }

}

let kangaroo = new Marsupial("Paul", true);
document.write(`It is ${kangaroo.hasPouch} that ${kangaroo.name} has a pouch<br />`);

// Test overridden method
document.write(`${chipmunk.getInfo()}<br />`);
document.write(`${kangaroo.getInfo()}<br />`);

// You can dynamically inherit from Classes
function getClass(classType){
  if (classType == 1) {
    return Mammal;
  } else {
    return Marsupial;
  }
}

class Koala extends getClass(2){
  constructor(name){
    super(name);
  }
}

let carl = new Koala("Carl");
document.write(`${carl.getInfo()}<br />`);
document.write("-------------------------------------<br />");


// ---------- SYMBOLS ----------
// A Symbol is like an enumerated type that can be used as
// identifiers and they can't be changed (immutable).

// Create a symbol that is used like a label in an array
// You can provide a description in quotes
let capital = Symbol("State Capital");

let pennsylvania = {};
pennsylvania[capital] = "Harrisburg";
document.write(`Capital of PA : ${pennsylvania[capital]}<br />`);

// Get the description
document.write(`Symbol Capital : ${capital.toString()}<br />`);

// You can share symbols by using symbol.for()
let employNum = Symbol.for("Employee Number");

let bobSmith = {};
bobSmith[employNum] = 10;

let sallyMarks = {};
sallyMarks[employNum] = 11;

document.write(`Bob : ${bobSmith[employNum]}<br />`);
document.write(`Sally : ${sallyMarks[employNum]}<br />`);

// ---------- ARRAYS ----------
// Array.of() is used to create arrays instead of the array
// constructor
let array1 = Array.of(1,2,3);

// Create an object into an array
let array2 = Array.from("word");

// You can use Array.from to manipulate values
let array3 = Array.from(array1, (value) => value * 2);

// Iterate over values
for (let val of array3) document.write(`Array Val : ${val}<br />`);
document.write("-------- SETS: no duplicates------------------<br />");


// ---------- SETS ----------
// A Set is a list of values with no duplicates
var randSet = new Set();
randSet.add(10);
randSet.add(10);randSet.add(100);randSet.add(1090);
randSet.add("Word");randSet.add("ADWord");


// Check to see if set contains a value
document.write(`Has 10 : ${randSet.has(10)}<br />`);
document.write("-------------------------------------<br />");
// Get size of Set
document.write(`Set Size : ${randSet.size}<br />`);
document.write("-------------------------------------<br />");
// Delete item from list
randSet.delete(10);
document.write(`Set Size : ${randSet.size}<br />`);
// Iterate a Set
for (let val of randSet) document.write(`Set Val : ${val}<br />`);
document.write("-------MAPS:----- key/value pairs-----------<br />");



// ---------- MAPS ----------
// A Map is a collection of key/value pairs
var randMap = new Map();
randMap.set("key1", "Random String");
randMap.set("key2", 10);
randMap.set("key3", 180);randMap.set("key5", 1890);randMap.set("key266", 10);
// Get values
document.write(`key1 : ${randMap.get("key1")}<br />`);
document.write(`key2 : ${randMap.get("key2")}<br />`);
document.write("-------------------------------------<br />");
// Get size
document.write(`Map Size : ${randMap.size}<br />`);
document.write("-------------------------------------<br />");
// Iterate Map
randMap.forEach(function(value, key){
  document.write(`${key} : ${value}<br />`);
});
document.write("-------------------------------------<br />");


// ---------- PROMISES ----------
// Promises define code that is to be executed later
// Promises either succeed or fail once
// They either are fulfilled, rejected, pending, or settled

// A Promise that is handled immediately
var p1 = Promise.resolve('Resolve Me direct!');

// then takes 2 optional arguments being first a callback
// for a success and another for failure
p1.then((res) => document.write(`${res}<br />`));
document.write("-------------------------------------<br />");

// Create a promise that executes after 2 seconds
var p2 = new Promise(function(resolve, reject){
  setTimeout(() => resolve('Resolve Me'), 2000000);
});

p2.then((res) => document.write(`${res}<br />`));
document.write("-------------------------------------<br />");


// Here I demonstrate how then is used if a promise is
// fulfilled or rejected
let randVal = 6;

var p3 = new Promise(function(resolve, reject){
  if (randVal == 6){
    resolve("Good Value");
  } else {
    reject("Bad Value");
  }
});

p3.then((val) => document.write(`${val}<br />`),
        (err) => document.write(`${err}<br />`));
document.write("-------------------------------------<br />");


// You should add catch to a chain to handle errors

var p4 = new Promise((resolve, reject) => {
  if (randVal <= 17){
    throw new Error("Can't Vote"); // Same as a Reject
  } else {
    resolve("Can Vote");
  }
});

p4.then((val) => document.write(`${val}<br />`))
  .catch((err) => document.write(`${err.message}<br />`));
