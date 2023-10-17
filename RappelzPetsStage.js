// Grundwerte - Select Möglichkeiten
let Classic = [1, 90.25, 70.25, 49.25, 34.25, 24.25];
let Seele = [1, 45.25, 30.25, 25.25, 17.25, 12.25];
let Epic = [1, 50.25, 40.25, 30.25, 20.25, 10.25];

//Drop Down List - Pet Art Funktionen - 
function resultClassic(Pet1, Pet2, Stage){
  return Classic[Stage] + (Pet1 * 0.125 + Pet2 * 0.125 - 0.25);
}

function resultSeele(Pet1, Pet2, Stage){
  return Seele[Stage] + (Pet1 * 0.125 + Pet2 * 0.125 - 0.25); 
}

function resultEpic(Pet1, Pet2, Stage){
  return Epic[Stage] + (Pet1 * 0.125 + Pet2 * 0.125 - 0.25);
}



//Element Values - Input type=Number Values
let Pet1 = document.getElementById("Pet1").valueAsNumber;
let Pet2 = document.getElementById("Pet2").valueAsNumber;
let Stage = document.getElementById("Stage").valueAsNumber;


function Pet1Value() {
  Pet1 = document.getElementById('Pet1').valueAsNumber;
 return Pet1;
}


function Pet2Value() {
  Pet2 = document.getElementById('Pet2').valueAsNumber;
  return Pet2;
 }


 function StageValue() {
  Stage = document.getElementById('Stage').valueAsNumber;
  return Stage;
 }



// Checkboxen Value - Joker & Catalyst
let x ="";
let y ="";

const Cat = document.getElementById("Cat");
const Joker = document.getElementById("Joker");

let box = document.querySelectorAll("input[type=checkbox]");


function addCat() {
if (Cat.checked) {
  x = 10;
  y = 0; 
}
else {
  x = 0;
}
return x;
}


function addJoker(){
if (Joker.checked) {
  y = 30;
  x = 0;
}
 else {
  y = 0;
}
return y;
}


//Checkbox uncheck wenn bereits eine Box ausgewählt

box.forEach(n => n.addEventListener("change", check));
function check(i) {
  let status = i.target.checked; // Speichert Status der "checked Box"
  box.forEach(n => n.checked = false); // Löscht alle "checked Boxen"
  i.target.checked = status; // Stellt "checked Box" Status wieder her
}
// Quelle: https://www.sitepoint.com/community/t/trying-to-select-only-one-checkbox-at-a-time/420567/7 //


// Site Output & Manipulation innerHTML


let output = document.getElementById("output");
let Endresult ="";


function result() {

function runden() {
  if (Endresult > 100) {
    Endresult = 100;}
    else {
       return Endresult
    
  }
}


if (document.querySelector("select").value == "Seele") {
  Endresult = resultSeele(Pet1, Pet2, Stage) + x + y ;
  runden(Endresult);
  output.innerHTML = Endresult + "%";
}

else if (document.querySelector("select").value == "Epic") {
  Endresult = resultEpic(Pet1, Pet2, Stage) + x + y ;
  runden(Endresult);
  output.innerHTML = Endresult + "%";
}

else {
  Endresult = resultClassic(Pet1, Pet2, Stage) + x + y ;
  runden(Endresult);
  output.innerHTML = Endresult + "%";
}

}

