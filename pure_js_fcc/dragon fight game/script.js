
// craeting some variables for the game, must use let so they can be latter changed

let xp = 0;
let gold = 0;
let health = 100;
let currenWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];


// getting the objects for all  the button in the html
const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")

// other variables 

const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
