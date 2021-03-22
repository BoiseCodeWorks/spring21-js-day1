// console.log("hello world")

// CREATING VARIABLES

// var (hoisted)
//    console.log(x);
//    var x = 1;
//    console.log(x);

// let (non-hoisted)
//    console.log(x);
//    let x = 1;
//    console.log(x);


// const (non-hoisted)
//    const x = 1;
//    console.log(x);
//    x = 4;


// DATA TYPES

// Primatives (Value) Types
// STRINGS
//   DEFAULT TO SINGLE QUOTES FOR STRINGS (unless you really want the apostrophy in the string)
//    let fullName = 'Mark Ohnsman'
//    let fullName = "Mark Ohnsman"
//    let fullName = `Mark Ohnsman`

// JOINING Strings
let firstName = "Mark"
let lastName = "Ohnsman"
// Concatentation
//    let fullName = firstName + ' ' + lastName
// Interpolation (template literal) -- MUST USE THE BACKTICK
//    let fullName = `${firstName} ${lastName} ${1 + 1}`

// BONUS: (split, substr, substring, toUpperCase, toLowerCase, contains, indexOf)
// NUMBERS
let myNum = 1
//   Increment and decrement (Changes value)
//     myNum++
//     myNum--
//   Assignment with =
//      myNum += 2 // myNum = myNum + 2
//      myNum -= 2 // myNum = myNum - 2
//      myNum *= 2 // myNum = myNum * 2
//      myNum /= 2 // myNum = myNum / 2


// BONUS (Math.______)

// BOOLEAN
//   let myBool = true
//    ! operator flips the bool 
//    myBool = !myBool


// NULL (undefined) for removing the value of a varialbe or starting it without a value
//   let myVar = "some thing"
//   myVar = null
//   myVar = undefined
//   let undelcared = null
//   undelcared = 8


// Non-Primatives (Refrence) Types
// ARRAY (Collection of like items)
let nums = [23, 24, 4, 5, 23, 12, 4, 5]
//   0 Based index, each element can be grabbed by the index starting at 0
//   When accessing a value from an array, provide the address in full from variable name 'at' [] index
//      nums[3]
//   Array.length is the number of elements in the array
//      nums.length == 8
//   You can get the last element from the array with Array[Array.length-1]
//      nums[nums.length-1]
// DO NOT MIX DATATYPES WITHIN AN ARRAY


// BONUS (.forEach(), .map(), .filter(), .find(), .indexOf(), .join(), .sort())


// OBJECTS
//  EVERYTHING is an object
// Objects are made of keys (properties, methods) and values 
let car = {
  color: 'red',
  brand: 'honda',
  year: 1989,
  price: 10000,
  seats: ["driver seat", "passenger seat", "back bench seat"],
  tires: {
    fr: {
      color: "white-wall",
      brand: 'goodyear',
      airPressure: 40
    }
  }
}

// Accessing Objects
// Dot Notation
// car.brand;

// Bracket Notation
// when accessing an object using another variable
let myVar = 'year'
car[myVar] == car.year


// NaN (not a number)
// only comes up if math failed


// *SYMBOL (creates strings into refrence types)



// CONTROL FLOW
// CONDITIONALS / Switches

// boolean operators
//  100 > 10 // true
//  100 < 10 // false
//  100 >= 100 // true
//  100 <= 100 // false
//  100 == '100' // true
//  100 === '100' // false

// AND states both sides must be true
100 > 10 && 10 < 80

// OR states one side must be true
100 < 10 || 10 < 80


// IF whatever is in the () is true, then run the code between {}
if (100 > 10) {
  console.log("numbers work");
}

// IF/ELSE
// if(STATEMENT){
// Run if true
// }else {
//runs on the prior condition being false;
// }


// if/else if/else

// if(STATEMENT){


// }else if(STATEMENT){

// }else {

// }


// SWITCHES
// a series of potential true outcomes, if one is hit it can hit others

let dir = "north"
let coords = { x: 0, y: 0 }

switch (dir) {
  // if num === 3
  case "north":
    coords.y++
    break
  case "south":
    coords.y--
    break
  case "east":
    coords.x++
    break
  case "west":
    coords.x--
    break
  default:
    console.log("Invalid direction");
    break
}


//COUNTING CARDS 2-6 = +1; 7-9= 0; 10-Ace= -1
let card = "5"
let count = 0
switch (card) {
  case "2":
    console.log("its a 2")
  case "3":
  case "4":
  case "5":
  case "6":
    count++
    break
  case "10":
  case "J":
  case "Q":
  case "K":
  case "A":
    count--
    break
}
