// STEP1.   Make sure to create a repo called "My Javascript Journey" and link this folder with that repository.
//          You should not have any issues, if you are having issues, go back to the git note or ask your friend 
//          before asking your lecturer for help.(You cannot forget git commands)
// STEP2.   Every push to github must be to a branch and a pull request has to be made to merge the branch with main. 
//          Any pushes to main will result in you having to restart from the beginning(from creating a repo).
// STEP3.   Follow the order : 1 create repo, 2 run all commands necessary to link these to folders, 
//          3 create and work on branch, 4 push branch and use a pull request to merge. 5 PULL YOUR CODE TO LOCAL REPO BEFORE CREATING ANOTHER BRANCH
// STEP4.   You must link this javascript file to an index.html page, taking FOLDER STRUCTURE into consideration.

//INTO TO JAVASCRIPT EXERCISE

// A. TASK 1:VARIABLES and OPERATORS
// 1. Create a variable called “language” and assign it the value “JavaScript”. Then create
// a variable called “score” and assign it the value “10”.

let language = 'javaScript'
console.log(language)
let score = 10
console.log(score)

// 2.Create two variables called “length” and “width”. Assign each variable a value of 10 and 5 respectfully. Use
let length = 10;
let width = 5;
let area = length*width;
console.log(`the area of rectangle is ${length*width}`)
// the variables to calculate the area of a rectangle with the length and width specified (remember area = length x width).
// Write the following to the console using CONCATENATION and BACKTICKS: 
// “The area of the rectangle is …” where … is the area you calculated.

// 3.Create two variables called “num1” and “num2.” Assign each variable a value of 10 and 4 respectfully.
// Calculate and display in the console what the remainder is if num1 is divided by num2.
let numb1 = 10
let numb2 =4
console.log(`the answer is ${numb1/numb2}`)
console.log(`the remainder is ${10%4}`)

// 4.Using the variables you created in the previous step, output the results
// of the division in the following format: “num1 / num2 = x remainder y.” HINT: Backticks
let results = numb1/numb2
let remainder = numb1%numb2
console.log(`numb1/numb2 = ${results} remainder ${remainder}`)



// B. Task 2:Data Types
// 1. Define thefollowing data types with your own contents[ 'integer', 'decimal', 'string', 'array'(minimum: 3 items), 'Object'(minimum: 4 values)]
let number = 100
let decimal= 3.5656
let string = 'hello world'
let array =[1,2,3];
let fruits= ['apple','orange','mengo' ];

// 2. Once you’ve created the variables, display them to the console
console.log(number)
console.log(decimal )
console.log(string )
console.log(array)
console.log(fruits)



// 3. Use the ‘typeof’ function to check each variable
console.log(typeof number)
console.log(typeof decimal)
console.log(typeof string )
console.log(typeof array )
console.log(typeof fruits)

// 4. Create an array with numbers and strings. Comment what data type you expect this tobe. Then use the ‘typeof’ function on this array
let data =[22,'rethabile']
console.log(typeof data)
// 5. Create a null variable and an undefined variable
let win = null
let car;


// ***********C. Task 3. functions and contional statements************
// N.B. READ WITH UNDERSTANDING!!!
//  1.  Create 3 functions to convert R1000 into dollars, euros and pounds. Take function naming into consideratio
// Function to convert R1000 to dollars
function convertToDollars(rands) {
    const exchangeRate = 0.067; // 1 Rand to USD
    const dollars = rands * exchangeRate;
    return dollars;
  }
  
  // Function to convert R1000 to euros
  function convertToEuros(rands) {
    const exchangeRate = 0.059; // 1 Rand to EUR
    const euros = rands * exchangeRate;
    return euros;
  }
  
  // Function to convert R1000 to pounds
  function convertToPounds(rands) {
    const exchangeRate = 0.049; // 1 Rand to GBP
    const pounds = rands * exchangeRate;
    return pounds;
  }
  
  const rands = 1000; // R1000
  const dollars = convertToDollars(rands);
  const euros = convertToEuros(rands);
  const pounds = convertToPounds(rands);
  
  console.log(`R1000 is equivalent to $${dollars.toFixed(2)}`);
  console.log(`R1000 is equivalent to €${euros.toFixed(2)}`);
  console.log(`R1000 is equivalent to £${pounds.toFixed(2)}`);
  




//  2.  Create a function that takes a value and calculates the amount entered including VAT (15%), amount entered should be R400.
//      Then display the message in the console, "The amount after tax is ...".
function calculateAmountWithVAT(amount) {
  // Assuming the VAT rate is 15%
  const vatRate = 0.15;
  const vatAmount = amount * vatRate;
  const totalAmount = amount + vatAmount;

  console.log(`The amount after tax is R${totalAmount}`);
}

// Call the function with an amount of R400
calculateAmountWithVAT(400);

  
//  3.  Declare 3 variables 1stNum, 2ndNum, 3rdNum and assign values of 8, 20 and 14 respectfully. Now write a function that compares “num1” and “num2” and 
//      displays the larger value.
// Declare the variables and assign values
const Num1 = 8;
const Num2 = 20;
const Num3 = 14;

// Function to compare and display the larger value
function compareAndDisplayLarger(num1, num2) {
  if (num1 > num2) {
    console.log(`The larger value is: ${num1}`);
  } else if (num2 > num1) {
    console.log(`The larger value is: ${num2}`);
  } else {
    console.log("Both numbers are equal.");
  }
}

compareAndDisplayLarger(Num1, Num2);

  


  
//  4.  Write a function that determines whether “num1” is odd or even and displays the
//      result. (Tip: remember the modulus operator %
function isOddOrEven(num1) {
  if (num1 % 2 === 0) {
    console.log(`${num1} is even.`);
  } else {
    console.log(`${num1} is odd.`);
  }
}

isOddOrEven(num1);

//  // Declare the variables and assign values
const numF= 8;
const numS = 20;
const numT = 14;

// Conditional statement to sort the numbers from largest to smallest
if (numF >= numS && numF >= numT) {
  if (numS >= numT) {
    console.log(`Sorted numbers: ${numF}, ${numS}, ${numT}`);
  } else {
    console.log(`Sorted numbers: ${numF}, ${numS}, ${numT}`);
  }
} else if (numS >= numF && numS >= numT) {
  if (numF >= numT) {
    console.log(`Sorted numbers: ${numS}, ${numF}, ${numT}`);
  } else {
    console.log(`Sorted numbers: ${numS}, ${numT}, ${numF}`);
  }
} else if (numT >= numF && numT >= numS) {
  if (numF >= numS) {
    console.log(`Sorted numbers: ${numT}, ${numF}, ${numS}`);
  } else {
    console.log(`Sorted numbers: ${numT}, ${numS}, ${numF}`);
  }
}
