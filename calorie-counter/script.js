// scripts

// variables to control form validation 

const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output')


// variable to control error 
let isError = false;

// To match specific characters in a string, you can use Regular Expressions or "regex" for shor

// e.g of 
const regex = /Hello/ ; // will match the string literal "hello" 

// \s - match any space characters

// flags , comes afeter the/ e.g /hello/g, telling the regex to continue to look after it found one instance

const reg = /[+-\s]/g  // yet anothe rexample that looks for +, - and whitespaces globally

//in case user enter a sign before a number (-/+)
function cleanInputString(str){
    const regex = /[+-\s]/g;
    return str.replace(regex , "");
}

// In HTML, number inputs allow for exponential notation (such as 1e10). You need to filter those out.
  // flag i means insensitive and used to flag any case , eg.  hello , Hello , HELLO , even HeLlo
function isInvalidInput(str){
    const regex = /\d+e\d+/i;
}

