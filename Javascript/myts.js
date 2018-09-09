// ---------- TypeScript ----------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// TypeScript brings a type system and future
// capabilities of JS today
// To compile TypeScript to JavaScript you
// must install a compiler
// Install Node at https://nodejs.org/en/
// Check that npm is installed OSX :
// sudo npm install npm -g
// Check that npm is installed Windows :
// npm install npm -g (As Admin)
// Type in your terminal : npm install -g typescript
// I'll use Ecmascript 5 in this tutorial
// Compile to JS with tsc tstut.ts --target ES5
// On Linux / OSX machines autocompile by typing
// tsc *.ts --watch --target ES5 in the terminal
// ---------- VARIABLES ----------
// Variables must start with a letter, _, or $
// and then can contain numbers
// Declaring variables as statically typed is optional
// If you only provide a value the type is inferred
document.write("字符串 :string " + "<br />");
var myName = "Typescript Test!";
document.write("数字: number" + "<br />");
var myAge = 152;
document.write("逻辑: boolean" + "<br />");
document.write("任意类型any: " + "<br />");
// booleans can only be true or false
var canVote = true;
// A variable marked as any is a dynamic type任意类型
var anything = "dog";
anything = true;
anything = 2;
// You can print in the defined element
document.getElementById("tsStuff").innerHTML = "新题目开头" + myName;
document.write("My Name is " + myName);
document.write("My Name is " + myName + "<br />");
// A variable that didn't get a value assigned
// gets undefined
// null is a user assigned value saying that
// no value is assigned
// typeof returns the data type
document.write("myName 类型 is a " + typeof (myName) + "<br />");
document.write("canVote 类型 is a " + typeof (canVote) + "<br />");
document.write("anything 类型 is a " + typeof (anything) + "<br />");
// We can convert strings to numbers字符串解析成数字
document.write("解析字符串:'556' " + "<br />");
var strToNum = parseInt("556");
document.write("strToNum is a " + typeof (strToNum) + " " + " " + " " + strToNum + "<br />");
document.write("解析字符串:'555aa' " + "<br />");
var strToNum = parseInt("555aa");
document.write("strToNum is a " + typeof (strToNum) + " " + " " + " " + strToNum + "<br />");
document.write("解析字符串:'555.99'只转整数 " + "<br />");
var strToNum = parseInt("555.99");
document.write("strToNum is a " + typeof (strToNum) + " " + " " + " " + strToNum + "<br />");
document.write("解析字符串:'.99'只转整数 " + "<br />");
var strToNum = parseInt(".99");
document.write("strToNum is a: " + typeof (strToNum) + " " + " " + " " + strToNum + "<br />");
// toString() converts anything into a string转换成字符串
document.write("567.99转换成字符串 " + "<br />");
var numToStr = 567.99;
document.write("numToStr is a " + typeof (numToStr.toString()) + "     " + numToStr + "<br />");
// You define constants with const定义常数
var PI3 = 3.14159;
document.write("const PI = " + PI3 + "<br />");
var superman = {
    realName: "Clark Kent",
    superName: "Superman"
};
// It is best to always separate with +
// document.write(superman.realName + " is " + superman.superName + "<br />");
// More on interfaces below
// ---------- ARRAYS ----------
// Creates an array of strings that only excepts
// string values
var employees = ["Bob", "Sally", "Sam", "Tom", "Jack"];
// This would cause an error
// employees.push(5);
// Print all values in array
document.write(employees.toString() + "<br />");
// You can create arrays of interfaces
var superheroes = [];
superheroes.push({
    realName: 'Bruce Wayne',
    superName: 'Batman'
});
superheroes.push({
    realName: 'Johan Smith',
    superName: 'Star'
});
document.write(superheroes[0].realName + " is " + superheroes[0].superName + "<br />");
document.write(superheroes[1].realName + " is " + superheroes[1].superName + "<br />");
// ---------- MATH ----------
document.write("5 + 40 = " + (5 + 40) + "<br />");
document.write("500 - 4 = " + (500 - 4) + "<br />");
document.write("5 * 4 = " + 5 * 4 + "<br />");
document.write("5 / 4 = " + 5 / 4 + "<br />");
document.write("5 % 4 = " + 5 % 4 + "<br />");
// If you try to add anything to a string both
// become strings
document.write("5 + String 2 = ", (5 + '2') + "<br />");
var randNum = 1;
// If you increment after the current value is used
// and then it is incremented after
// The same is true with placing the -- after the
// variable
document.write("randNum++ = " + randNum++ + "<br />");
document.write("randNum = " + randNum + "<br />");
document.write("++randNum = " + ++randNum + "<br />");
document.write("randNum = " + randNum + "<br />");
document.write("randNum-- = " + randNum-- + "<br />");
document.write("randNum = " + randNum + "<br />");
document.write("--randNum = " + --randNum + "<br />");
document.write("randNum = " + randNum + "<br />");
// ---------- CONDITIONALS ----------
// If, Switch and the Ternary operator work
// the same in TypeScript as in JS
// Variables defined with let in blocks don't
// change the value of variables outside the block
var sampLet = 123;
if (true) {
    var sampLet_1 = 456;
}
document.write("sampLet : " + sampLet + "<br />");
var sampVar = 123;
if (true) {
    var sampVar = 456;
}
document.write("sampVar : " + sampVar + "<br />");
// ---------- LOOPING ----------
// Looping works the same in TypeScript as in JS
// but for..of is added to get values in either
// an array or string
var randArray = [50, 60, 70, 80];
// for..in provides the indexes
for (var val in randArray) {
    document.write(val + "<br />");
}
// Convert a number array into a string array
var strArray = randArray.map(String);
// for..of provides the values
for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
    var val = strArray_1[_i];
    document.write(val + "<br />");
}
// ---------- FUNCTIONS ----------
// You can assign the variable types for the attributes
// You assign the return type after the attributes
// or if nothing is returned use void
var getSum = function (num1, num2) {
    return num1 + num2;
};
var theSum1 = getSum(5, 2);
document.write("5 + 2 = " + theSum1 + "<br />");
// Assign a default value in the function declaration
// If an attribute isn't required follow the variable
// with a ?
var getDiff = function (num1, num2, num3) {
    if (num2 === void 0) { num2 = 2; }
    // Check if a value was assigned with typeof
    if (typeof num3 !== 'undefined') {
        return num1 - num2 - num3;
    }
    return num1 - num2;
};
document.write("5 - 2 = " + getDiff(5) + "<br />");
document.write("5 - 2 - 3 = " + getDiff(5, 7, 3) + "<br />");
document.write("--------add all----------------------- " + "<br />");
// You can receive an unknown number of values
// with a rest parameter ...nums
var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    // We can use reduce with the array to add all
    // the values together one by one
    var sum = nums.reduce(function (a, b) { return a + b; }, 0);
    document.write("Sum : " + sum + "<br />");
};
sumAll(1, 2, 3, 4, 5);
// Arrow functions don't include function in
// the definition
document.write("----箭头函数Arrow functions-var addOne = (x)=>x+1;------------------ " + "<br />");
var x;
var addOne = function (x) { return x + 1; };
document.write("1 + x = " + addOne(9) + "<br />");
// ---------- CLASSES ----------
// Classes describe real world objects by defining
// their attributes (fields) and capabilities
// (methods)
document.write("--- CLASSES --------------- " + "<br />");
var Animal = /** @class */ (function () {
    // If you define an attribute with private
    // the value is automatically assigned
    function Animal(name, owner) {
        this.name = name;
        this.owner = owner;
        Animal.numOfAnimals++;
    }
    // You can define methods as private but then
    // it can't be seen by subclasses, or accessed
    // by any code other then that within the class
    Animal.prototype.ownerInfo = function () {
        document.write(this.name + " is owned by " + this.owner + "<br />");
    };
    // Static methods are accessed using the class
    // name
    Animal.howManyAnimals = function () {
        return Animal.numOfAnimals;
    };
    Object.defineProperty(Animal.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: true,
        configurable: true
    });
    // static fields have values that are shared
    // by every object
    Animal.numOfAnimals = 0;
    return Animal;
}());
// Create an Animal object
var spot = new Animal("Spot", "Doug");
spot.ownerInfo();
spot.weight = 100;
document.write("Spot's weight is " + spot.weight + "<br />");
// You can only access static methods by proceeding
// it with the class name
document.write("# of Animals : " + Animal.howManyAnimals() + "<br />");
// You can inherit all methods and fields from
// another class with extends
// Additional methods and fields can be added
// or overwritten
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, owner) {
        var _this = _super.call(this, name, owner) || this;
        Dog.numOfAnimals++;
        return _this;
    }
    return Dog;
}(Animal));
var grover = new Dog("Grover", "Jimmy");
var grover = new Dog("AA", "Simon");
// A call to howManyAnimals() is now 2
document.write("# of Animals : " + Animal.howManyAnimals() + "<br />");
// Use instanceof to check for inheritance
document.write("Is a Dog an Animal : " + (grover instanceof Animal) + "<br />");
// Check if a field exists for an object
document.write("Does grover have a name : " + ('name' in grover) + "<br />");
var Car = /** @class */ (function () {
    function Car(wheels) {
        this.wheels = wheels;
    }
    Car.prototype.drive = function () {
        document.write("The car drives with " + this.wheels + " wheels<br />");
    };
    return Car;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle(wheels) {
        this.wheels = wheels;
    }
    Bicycle.prototype.drive = function () {
        document.write("The bicycle drives with " + this.wheels + " wheels<br />");
    };
    return Bicycle;
}());
var car = new Car(4);
var bike = new Bicycle(2);
car.drive();
bike.drive();
// ---------- GENERIC FUNCTIONS ----------
// We use generic functions when we want
// to be able to work with multiple data
// types in similar ways
// To create a generic function we place
// 1 or more data type markers in angled
// brackets after the function name. We
// then use those data type markers
// instead of actual data types.
function GetType(val) {
    return typeof (val);
}
var aStr = "A String";
var aNum = 10;
document.write(GetType(aStr) + "<br />");
document.write(GetType(aNum) + "<br />");
// You define a generic function that
// excepts any class that implements
// an interface
function GetWheels(veh) {
    return veh.drive();
}
GetWheels(car);
GetWheels(bike);
// You can also define generic classes that
// can work with multiple data types
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var aNumber = new GenericNumber();
// Define how we want add to work with numbers
aNumber.add = function (x, y) { return x + y; };
document.write("5 + 4 = " + aNumber.add(5, 4) + "<br />");
var aStrNum = new GenericNumber();
// Define how we want add to work with strings
aStrNum.add = function (x, y) { return String(Number(x) + Number(y)); };
document.write("5 + 6 = " + aStrNum.add("5", "6") + "<br />");
// ---------- DESTRUCTORING ----------
// You can assign multiple values on one line
var randVals = { x: 1, y: 2, z: 3 };
var x = randVals.x, y = randVals.y, z = randVals.z;
document.write("x+y+z = " + x + y + z + "<br />");
// Do the same with arrays
_a = [z, y, x], x = _a[0], y = _a[1], z = _a[2];
document.write("Switch : " + x + y + z + "<br />");
document.write("Switch : " + z + y + x + "<br />");
document.write("x: " + x + "<br />");
document.write("y: " + y + "<br />");
document.write("z: " + z + "<br />");
// ---------- TEMPLATE STRINGS ----------
// Create multiline strings
var multStr = "I go on for\nmany lines<br />";
document.write(multStr);
// You can use string interpolation
document.write("<b>" + multStr + "</b>");
// ---------- SPREAD OPERATOR ----------
// We can separate values in an array into
// attributs in a function
document.write("x: " + x + "<br />");
document.write("y: " + y + "<br />");
document.write("z: " + z + "<br />");
function theSum(x, y, z) {
    document.write("Sum : " + (x + y + z) + "<br />");
    document.write("x: " + x + "<br />");
    document.write("y: " + y + "<br />");
    document.write("z: " + z + "<br />");
}
var args = [10, 20, 30];
theSum.apply(void 0, args);
// ---------- ENUMS ----------
// Enums are number based in TS
var Emotion;
(function (Emotion) {
    Emotion[Emotion["Happy"] = 1] = "Happy";
    Emotion[Emotion["Sad"] = 2] = "Sad";
    Emotion[Emotion["Angry"] = 3] = "Angry";
})(Emotion || (Emotion = {}));
;
var myFeeling = Emotion.Happy;
// Same as
myFeeling = 1;
var _a;
