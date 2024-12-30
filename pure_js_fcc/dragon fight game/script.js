
// craeting some variables for the game, must use let so they can be latter changed

let xp = 0;
let gold = 50;
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
const weapons = [
    {
        name: "stick", 
        power: 5
    }, 
    {
        name: "dagger", 
        power: 30
    }, 
    {
        name: "clwa hammer", 
        power: 50
    }, 
    {
        name: "sword", 
        power: 100
    }
]
// defining the monsters to fight and their levels and health
const monsters = [
    {
        name: "slime",
        level : 2,
        health: 15
    }, 

    {
        name: "fanged beast",
        level : 8,
        health: 60
    }, 

    {
        name: "dragon",
        level : 20,
        health: 300
    }
]



// functions for control 
/*
function goTown(){
    button1.innerText = "Go to store"
    button2.innerText = "Go to cave"
    button3.innerText = "Fight Dragon"

    button1.onclick = goStore
    button2.onclick = goCave
    button3.onclick = fightDragon

    text.innerText = "You are in the town square. you see a sign that says Store."

}*/

/*
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
}*/

function goCave(){
    update(locations[2])
}


// FUNCTIONS TO FIGHT

function fightDragon(){
    fighting = 2;
    goFight();
}

function fightBeast(){
    fighting = 1;
    goFight();
}

function fightSlime(){
    fighting = 0;
    goFight();
}


// initializing the buttons 
button1.onclick = goStore
button2.onclick = goCave
button3.onclick = fightDragon

// adding the additional functions for buying weapons, goint to town square and buying health 


function buyHealth(){
    if (gold >= 10) {
        gold -= 10;
        health += 10;

        goldText.innerText = gold;
        healthText.innerText = health;
    }else {
       text.innerText = "You do not have enough gold to buy health."
    }

}

function buyWeapon(){
    if (currenWeaponIndex < weapons.length){
        if (gold >= 30){
            gold -= 30;
            currenWeaponIndex++;
            goldText.innerText = gold;
            let newWeapon = weapons[currenWeaponIndex];
            text.innerText = "You now have a " + newWeapon +".";
            inventory.push(newWeapon);
            text.innerText += " In your inventory you have: "+ inventory;
        } else {
            text.innerText = "You do not have enough gold to buy a weapon.";
        }
    } else {
        text.innerText = "You already have the most powerful weapon!";
        button2.innerText = "Sell weapon for 15 gold";
        button2.onclick = sellWeapon;   /// To be created!
    }

}

function goTown(){

    update(locations[0])

}

function goStore(){

    update(locations[1]);

}


// go town and go store have redundancy code... hahaha, the spagheti code!, lets fix that 

const locations = [
    {
        name : "town square",
        "button text": ["Go to store", "Go to cave", "Fight Dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text : "You are in the town square. you see a sign that says Store.", 

    }, 

    {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store"
    }, 

    {
        name: "cave",
        "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
        "button functions": [fightSlime. fightBeast, goTown],
        text: "You enter the cave. You see some monsters."
    }, 

    {
        name: "fight",
        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, goTown],
        text: "You are fighting a monster."
    },
       
   {
        name: "kill monster",
        "button text": ["Go to town square", "Go to town square", "Go to town square"],
        "button functions": [goTown, goTown, goTown],
        text: "The monster screams Arg! as it dies. You gain experience points and find gold."
   }, 

   {
        name : "lose" ,
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text : "You die. &#x2620;"
  }, 

  {
        name: "win",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;"
  }, 

  { 
        name: "easter egg", 
        "button text": ["2", "8", "Go to town square?"], 
        "button functions": [pickTwo, pickEight, goTown], 
        text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!" 
  }
]

// create a function to update the locations

function update(location){
    monsterStats.style.display = 'none';
    button1.innerText = location["button text"][0]
    button2.innerText = location["button text"][1]
    button3.innerText = location["button text"][2]

    button1.onclick = location["button functions"][0]
    button2.onclick = location["button functions"][1]
    button3.onclick = location["button functions"][2]

    text.innerHTML = location.text;
}


function sellWeapon(){
    if (inventory.length > 1){
        gold += 15;
        goldText.innerText = gold;
        let currenWeapon = inventory.shift();
        text.innerText = "You sold the "+ currenWeapon + ".";
        text,innerText += " In your inventory you have: "+ inventory;
        
    }
}



// Safety Functions 
function attack(){
        text.innerText = "The " + monsters[fighting].name + " attacks.";
        text.innerText += "You attack it with "+ weapons[currenWeaponIndex].name + ".";

        health -= monsters[fighting].level 
        monsterHealth -= weapons[currentWeaponIndex].power + Math.floor(Math.random() * xp) + 1;

        healthText.innerText = health;
        monsterHealthText.innerText = monsterHealth;
        // incase the user loses or the monster dies 
        if (health <= 0) {
            lose();
          }else if (monsterHealth <= 0){
              defeatMonster()
          }

}


function dodge() {
    text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}


// action functions 

function goFight(){
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = "block";
    monsterName.innerText = monsters[fighting].name;
    monsterHealthText.innerText= monsterHealth ;
}

function defeatMonster() {
    gold += Math.floor(monsters[fighting].level * 6.7);
    xp += monsters[fighting].level;
    goldText.innerText = gold;
    xpText.innerText = xp;
    update(locations[4])
    
  }

  // restart Function 

  function restart(){
    xp = 0;
    health= 100;
    gold =50;
    currentWeaponIndex = 0;
    inventory = ["stick"];
  
    goldText.innerText = gold;
    healthText.innerText = health;
    xpText.innerText = xp;
  
    goTown()
  }

  function getMonsterAttackValue(level) {
    const hit = (level * 5) - (Math.floor(Math.random() * xp));
    console.log(hit);
    return hit >0 ? hit : 0 ;
  }

  function isMonsterHit() {
    return Math.random() > .2  || health < 20;
  }

  function easterEgg() {
    update(locations[7]);
  }

  function pick(guess) {
    const numbers = [];
    while (numbers.length < 10) {
        numbers.push(Math.floor(Math.random() * 11))
    }
  }