// 1. Setting types
// var myString: string;
// // I can assign myString like this:
// myString = "Bee stinger";
// // Why is there a problem with this? What can I do to fix this?
// myString = 9;

//.1
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?copy
myString = "9"; //<<<<< the variable type wasn't matching it was expecting a string and it passing an integer



// 2. Setting the types for function parameters
// function sayHello(name: string){
//    return `Hello, ${name}!`;
// }
// // This is working great:
// console.log(sayHello("Kermit"));
// // Why isn't this working? I want it to return "Hello, 9!"
// console.log(sayHello(9));

//.2
function sayHello(name: string) {
    return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello("9")); //<<<<< the variable type wasn't matching it was expecting a string and it passing an integer



// 3. Optional parameters
// function fullName(firstName: string, lastName: string, middleName: string){
//    let fullName = `${firstName} ${middleName} ${lastName}`;
//    return fullName;
// }
// // This works:
// console.log(fullName("Mary", "Moore", "Tyler"));
// // What do I do if someone doesn't have a middle name?
// console.log(fullName("Jimbo", "Jones"));

//3.
function fullName(firstName: string, lastName: string, middleName: string) {
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones", "John")); //<<<<< the function was expecting three attributes, but it was only getting two


// 4. Interfaces and function parameters
// interface Student {
//    firstName: string;
//    lastName: string;
//    belts: number;
// }
// function graduate(ninja: Student){
//    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
// }
// const christine = {
//    firstName: "Christine",
//    lastName: "Yang",
//    belts: 2
// }
// const jay = {
//    firstName: "Jay",
//    lastName: "Patel",
//    belt: 4
// }
// // This seems to work fine:
// console.log(graduate(christine));
// // This one has problems:
// console.log(graduate(jay));


//4.
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}
function graduate(ninja: Student) {
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}
const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4 //<<<<< the interface specifies "belts", the object jay had that variable mispelled as "belt"
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));



// 5. Classes and function parameters
// class Ninja {
//    fullName: string;
//    constructor(
//       public firstName: string,
//       public lastName: string){
//          this.fullName = `${firstName} ${lastName}`;
//       }
//    debug(){
//       console.log("Console.log() is my friend.")
//    }
// }
// // This is not making an instance of Ninja, for some reason:
// const shane = Ninja();
// // Since I'm having trouble making an instance of Ninja, I decided to do this:
// const turing = {
//    fullName: "Alan Turing",
//    firstName: "Alan",
//    lastName: "Turing"
// }
// // Now I'll make a study function, which is a lot like our graduate function from above:
// function study(programmer: Ninja){
//    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
// }
// // Now this has problems:
// console.log(study(turing));

//5.
class Ninja {
    fullName: string;
    constructor(
        public firstName: string,
        public lastName: string) {
        this.fullName = `${firstName} ${lastName}`;
    }
    debug() {
        console.log("Console.log() is my friend.")
    }
}
// This is not making an instance of Ninja, for some reason:
const shane = new Ninja("Shane", "Lewis"); //<<<<< the contructor wasn't getting any parameters
// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = new Ninja("Alan", "Turing"); //<<<<< turin was a generic object, so I made it into a Ninja object

// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja) {
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));



// 6. Arrow functions
// var increment = x => x + 1;
// // This works great:
// console.log(increment(3));
// var square = x => {x * x};
// // This is not showing me what I want:
// console.log(square(4));
// // This is not working:
// var multiply = x,y => x * y;
// // Nor is this working:
// var math = (x, y) => let sum = x + y;
//    let product = x * y;
//    let difference = Math.abs(x-y);
//    return [sum, product, difference];

//6.
// This works great:
var increment = (x: number): number => { return x + 1; }; //<<<<< varibales and the function needed to be set and the functions needed to return something
console.log(increment(3));
// This is not showing me what I want:
var square = (x: number): number => { return x * x }; //<<<<< varibales and the function needed to be set and the functions needed to return something
console.log(square(4));
// This is not working:
var multiply = (x: number, y: number): number => { return x * y; }; //<<<<< varibales and the function needed to be set and the functions needed to return something
console.log(multiply(3, 4));
// Nor is this working:
var math = (x: number, y: number): Array<number> => { //<<<<< varibales and the function needed to be set and the functions needed to return something
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}
console.log(math(5, 4));


// 7. Arrow functions and 'this'
// class Elephant {
//    constructor(public age: number){}
//    birthday = function(){
//       this.age++;
//    }
// }
// const babar = new Elephant(8);
// setTimeout(babar.birthday, 1000)
// setTimeout(function(){
//    console.log(`Babar's age is ${babar.age}.`)
//    }, 2000)
// // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.

//7.
class Elephant {
    constructor(public age: number) { }
    birthday = () => { //<<<<< an arrow function was needed because function() wasn't letting "this" escape its scope
        this.age++;
    }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function () {
    console.log(`Babar's age is ${babar.age}.`)
}, 2000)