/*

var nombre = Number(prompt("Entrez un nombre :"));
if (isNaN(nombre))
{
    console.log(" erreur: valeur saisie incorrect");
}
else
{
    if (nombre > 0) {
        console.log(nombre + " est positif");
    }
    else {
        console.log(nombre + " est negatif ou nul");
    }
}
*/


var jours = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
var jour = prompt("Entrez un nom de jour ");
switch(jour)
{
    case "lundi":
        console.log(" demain nous seront " + jours[1]);
        break;
        
    case "mardi":
        console.log(" demain nous seront " + jours[2]);
        break;
        
    case "mercredi":
        console.log(" demain nous seront " + jours[3]);
        break;
    case "jeudi":
        console.log(" demain nous seront " + jours[4]);
        break;
    case "vendredi":
        console.log(" demain nous seront " + jours[5]);
        break;
    case "samedi":
        console.log(" demain nous seront " + jours[6]);
        break;
    case "dimanche":
        console.log(" demain nous seront " + jours[0]);
        break;
        
}

/*
 
 var nombre = Number(prompt("Entrez un nombre :"));
 if (isNaN(nombre))
 {
 console.log(" erreur: valeur saisie incorrect");
 }
 else
 {
 if (nombre > 0) {
 console.log(nombre + " est positif");
 }
 else {
 console.log(nombre + " est negatif ou nul");
 }
 }
 */

// program to find the next day of the week

var jours = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
var jour = prompt("Entrez un nom de jour ");
switch(jour)
{
    case "lundi":
        console.log(" demain nous seront " + jours[1]);
        break;
        
    case "mardi":
        console.log(" demain nous seront " + jours[2]);
        break;
        
    case "mercredi":
        console.log(" demain nous seront " + jours[3]);
        break;
    case "jeudi":
        console.log(" demain nous seront " + jours[4]);
        break;
    case "vendredi":
        console.log(" demain nous seront " + jours[5]);
        break;
    case "samedi":
        console.log(" demain nous seront " + jours[6]);
        break;
    case "dimanche":
        console.log(" demain nous seront " + jours[0]);
        break;
        
}

// program to find the next time on second level


/*var heure = NumberCheck(Number(prompt("Entrez une heure ex: du format a suivre 14h17m59s entrez l'heure ")));

var minute = NumberCheck(Number(prompt("Entrez la minute ")));

var seconde = NumberCheck(Number(prompt("entrez la seconde ")));

if (isNaN(minute)||isNaN(heure)||isNaN(seconde)) console.log("fin du programme");

var minute2=minute;
var  seconde2=seconde;
var heure2 = heure;

if (seconde === 59)
{
    minute2 = minute+1;
    seconde2 = 0;
}

else {
    seconde2 = seconde + 1;
}

if (minute === 59)
{
    heure2 = heure + 1;
    
    if (heure2 === 24)
    {
        heure2 = 0;
        minute2 = 0;
        seconde2 = 0;
    }
    else
    {
        minute2 = 0;
        seconde2 = 0;
    }
} else minute2 = minute +1;

console.log(heure2+"h "+minute2+"m "+seconde2+"s ");*/

// program to build triangle with stars



var x, y;
x= NumberCheck(Number(prompt("Entrez les Coordonées X  ")));
y= NumberCheck(Number(prompt("Entrez les Coordonées Y  ")));

var i;
for(var j = 1 ; j<y+1; j++)
// while( i=0,i<=j) console.log("*");
// for(var i = 0 ; i<=j; i++)
// console.log("*");

var ligne = "";
for (var i = 1; i <= 7; i++) {
    ligne = ligne + "#";
    // Autre possibilité avec l'opérateur +=
    //ligne += "#";
    console.log(ligne);
}

function NumberCheck(input)
{
    if (isNaN(input))
    {
        console.log(" erreur: valeur saisie incorrect");
        return NaN;
    }
    else return input;
    
}
