
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
const monsterHealthText = document.querySelector("#monsterHealth");


// functions for control 

function goStore(){
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";

    // after the text is changed from the first click, reinitializing the buttons on click 

    button1.omclick = buyHealth
    button2.onclick = buyWeapon
    button3.onclick = goTown

    // change the text when the user enter the store 
    text.innerText = "You enter the store."
}

function goCave(){
    console.log("Going to cave.")
}

function fightDragon(){
    console.log("fighting dragon.")
}


// initializing the buttons 
button1.onclick = goStore
button2.onclick = goCave
button3.onclick = fightDragon

// adding the additional functions for buying weapons, goint to town square and buying health 

function goTown(){
    button1.innerText = "Go to store"
    button2.innerText = "Go to cave"
    button3.innerText = "Fight Dragon"

    button1.onclick = goStore
    button2.onclick = goCave
    button3.onclick = fightDragon

    text.innerText = "You are in the town square. you see a sign that says Store."


}
function buyHealth(){

}

function buyWeapon(){

}