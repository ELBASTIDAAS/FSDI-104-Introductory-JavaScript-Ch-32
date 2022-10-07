//arrays
let myArray = [1, 2, 3, 4];
let myArray2 = ['a', 'b', 'c', 'd'];
let myArray3 = [true, false];
let array = [1, 'one', false];

//make an array with the values 'what is he meaning of life' 42 true

let arr = ['what is he meaning of life', 42, true]

console.log('Hello');
let numbers = [30, 40, 50];
numbers.push(60, 70, 80);
numbers.splice(30, 40);
numbers.push(90, 100);
numbers.splice(0, 1);
numbers.splice(0, 2);
console.table(numbers);

//if statements
let yourName = 'Miguel';
if (confirm('Are you ' + yourName + '?')) {
    console.log('Hello' + yourName);
} else {
    console.log('what is your name?');
}

let num1 = 1;
let num2 = 2;
if (num1 < num2) {
    console.log("num 1 is smallet than n um2");
} else {
    console.log("num1 is bigger than num2");
}

let n1 = 1;
let n2 = 2;
let n3 = 3;

let notTrue = false;
if (n1 < n2 && n3 > n2) {
    console.log("n1 is smaller than n2 and n3 is larger than n2");
};
if (n1 == 1 || n2 == 2 || n3 == 1) {
    console.log("n1 is 1 or n2 is 1 or n3 is 1")
};
if (!notTrue) {
    console.log("not not true is true")
};  
