let readlineSync = require('readline-sync');

let playerName = readlineSync.question('Wat is je naam? ');
console.log('Welkom, '+ playerName +'!');

let playerHealth = 21;
console.log('Je hebt '+ playerHealth + ' HP')

let slimeName = ("Slijm")
let slimeHealth = 10;

let characterDamage = Math.floor(Math.random() * 10) + 1;
let slimeDamage = Math.floor(Math.random() * 10) + 1;

if(playerHealth >=20) {
    console.log('Je komt een slijm tegen')
let combat = readlineSync.question('Wat wil je doen? (Vechten of vluchten) ');
} else{ console.log('Je hebt nog maar'+ playerHealth + ' HP')
    let lowhealth = readlineSync.question('Weet je zeker dat je wilt vechten? (Vechten of vluchten) ')
    }


if(combat = "vechten"){
    console.log(playerName +" valt aan en doet " + characterDamage + " damage");
      slimeHealth -= characterDamage;
         console.log( slimeName + " valt aan en doet " + slimeDamage + " damage");
         playerHealth -= slimeDamage;
}

if(combat = "vluchten"){
        console.log("Je rent weg van het monster.")
    }



//break
    

