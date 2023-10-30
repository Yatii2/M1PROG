
//opdracht 1
var huidigeTijd = new Date().getHours();
var lesBeginUur = 9;
var lesEindUur = 16; 

if (huidigeTijd >= lesBeginUur && huidigeTijd < lesEindUur) {
    console.log("Ik moet op school zijn");
} else {
    console.log("Ik hoef niet op school te zijn");
}

//opdracht 2
var readlineSync = require('readline-sync');
 
var userName = readlineSync.question('Goedenavond hoe oud ben je? ');
if (userName >20){
    var ID = readlineSync.question('Mag ik je ID zien?');
    console.log('Kom verder')
} else {
    console.log('Je mag niet naar binnen');
}



//opdracht 3
var schooldag = "maandag";

if (schooldag === "zaterdag" || schooldag === "zondag") {
    console.log("Ik hoef niet naar school");
} else {
    console.log("Ik moet naar school");
}
