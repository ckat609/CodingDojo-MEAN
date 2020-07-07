// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
var example;
console.log(example); // logs undefined
example = "I'm the example!";


// 1.-
// console.log(hello);                                   
// var hello = 'world';  
console.log("*****1******");
var hello;
console.log(hello);
hello = 'world';

// 2.-
// var needle = 'haystack';
// test();

// function test() {
//     var needle = 'magnet';
//     console.log(needle);
// }
console.log("*****2******");
var needle = 'haystack';

function test() {
    var needle = 'magnet';
    console.log(needle);
}

test();

// 3. -
console.log("*****3******");
var brendan = 'super cool';

function print() {
    brendan = 'only okay';
    console.log(brendan);
}

console.log(brendan);

// 4.- 
// var food = 'chicken';
// console.log(food);
// eat();

// function eat() {
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
console.log("*****4******");
var food = 'chicken';

function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
console.log(food);
eat();

// 5.-
// console.log("*****5******");
// mean();                  this one crahes because mean is a variable being declared as a function
// console.log(food);       the variable part gets hoisted all the way up, but everything after the "=" isn't
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// 6.-
// console.log(genre);
// var genre = "disco";
// rewind();

// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
console.log("*****6******");
var genre;
console.log(genre);

genre = "disco";

function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
rewind();
console.log(genre);

// 7.-
// dojo = "san jose";
// console.log(dojo);
// learn();

// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
console.log("*****7******");
dojo = "san jose";
console.log(dojo);

function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
learn();
console.log(dojo);

// 8.-
// console.log("*****8******");
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));

// function makeDojo(name, students) {
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     } else if (dojo.students <= 0) {
//         dojo = "closed for now";         this will crash because I'm redefining a const, which is not allowed
//     }
//     return dojo;
// }