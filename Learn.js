// declaring a variable that can be changed
// premitive variable
let age = 5;
let count;
const Character = "#"; // cannot change
console.log("printing the same string multiple times using repeat"+ "\n" + Character.repeat(20))
// non-premitive array
let array = []

// adding items to the array using push
array.push("Lungile" , "Mawila" , "Mpumie")

// removing the last item
console.log(array);


// popped cannot be changed
const popped = array.pop()

// printing to the console
console.log(array);
console.log(popped);

// adding an element to an array index
array[1] = "Nompumelelo";

console.log(array)


// craeating a pyramid using loops 
count = 8;
for (let i =0 ; i < count ; i = i+ 1){
    console.log(Character.repeat(i) )

}

// Functions overview  

// function declaration
function greet(){
    console.log("Hello, World")
}

function ret(){
    return "Hello, World"
}

// functtion call 

greet();

ret();

//capturing the return value of a function
let returnValue = ret();
console.log(returnValue);


// creating a function that takes in a parameter
function addTwoNumbers(a , b){
    return a+b
  }
  
  const sum = addTwoNumbers(5, 10);
  console.log(sum)

  // conditional statements, if.. else if .. else 

  if ("") {
    console.log("Condition is true");
  } else if (5 < 10) {
    console.log("5 is less than 10");
  } else {
    console.log("This is the else block");
  }

  // while loop syntax 

let continueLoop = false;
let done = 0;

while (continueLoop){
  // logic goes in here!
}