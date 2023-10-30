//opdracht A
function ShakeFunctie(woordDatGeschudtMoetWorden){

  const characters = woordDatGeschudtMoetWorden.split('');
  for (let i = characters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
   
    [characters[i], characters[j]] = [characters[j], characters[i]];
  }
  
  const geschudWoord = characters.join('');
  return geschudWoord;
}

  var woord1 = ShakeFunctie("Boekenkast");
  let woord2 = ShakeFunctie("fruit");
  let woord3 = ShakeFunctie("potlood");
console.log(woord1,woord2,woord3);

//opdracht B
function berekenInhoud(lengte, hoogte, diepte) {
  let inhoud = lengte * hoogte * diepte;
  return inhoud;
}

let kubusInhoud = berekenInhoud(10, 5, 10);
console.log(kubusInhoud);

function berekenCilinderInhoud(diameter, hoogte) {
  var straal = diameter / 2;
  var inhoud = Math.PI * straal * straal * hoogte;
  return inhoud;
}

var cilinderInhoud = berekenCilinderInhoud(10, 20);
console.log(cilinderInhoud);

function berekenLangeZijde(lengte, hoogte) {
  return Math.sqrt((lengte * lengte )+( hoogte * hoogte));
}

var lengteVanLangeZijde = berekenLangeZijde(3, 4);
console.log(lengteVanLangeZijde);

function berekenGemiddelde(getal1, getal2, getal3, getal4, getal5, getal6, getal7) {
  
  var totaal = getal1 + getal2 + getal3 + getal4 + getal5 + getal6 + getal7;

  var gemiddelde = totaal / 7;

  return gemiddelde;
}

const gemiddelde = berekenGemiddelde(10, 20, 30, 40, 50, 60, 70);
console.log(gemiddelde);

//opdracht C

let now = new Date();
let birth = new Date(2006, 2, 9); 
let miliseconds = now-birth;

let jaren = miliseconds / 1000 / 60 / 60 / 24 / 365;
console.log(jaren);
