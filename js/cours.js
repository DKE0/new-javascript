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






// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var tentative = 0 ;
var nbUtil;
var win= false;

while((tentative<6) && (win==false))

{
    do
    {
        nbUtil = Number(prompt(" Entrez un nombre "));
    }
    while (isNaN(nbUtil)) ;
    
    if (nbUtil < solution ) console.log(nbUtil + " est trop petit ");
    if (nbUtil > solution ) console.log(nbUtil + " est trop grand ");
    if (nbUtil === solution) {
        console.log("Bravo ! La solution Était " + nbUtil);
        win = true;
    }
    tentative++;
}


/*do
{
    nbUtil = Number(prompt(" Entrez un nombre "));
}
while (isNaN(nbUtil)) ;*/


/*var perso = {
     nom:"Aurora",
     sante:150,
     force:25,
    
decrire: function(){
    var description = this.nom + " a " + this.sante + " points de vie " + this.force + " en force";
    return description;
}
    
};

console.log(perso.decrire());

perso.sante = perso.sante - 20;

perso.force = perso.force + 10;

console.log(perso.decrire());
*/

/*var compte = {
solde: 0,
titulaire: "Alex",

    crediter : function(nbUtil) {
        this.solde+=nbUtil;
    },
    
debiter: function (nbUtil) {
    this.solde -=nbUtil;
},
    
decrire: function(){
    console.log("Titulaire : " + this.titulaire + " solde : " + this.solde);
}
    
}

do
{
    nbUtil = Number(prompt(" Montant à crediter "));
}
while (isNaN(nbUtil)) ;
compte.crediter(nbUtil);
do
{
    nbUtil = Number(prompt(" Montant à debiter "));
}
while (isNaN(nbUtil)) ;

compte.debiter(nbUtil);
compte.decrire();

// retour sur le jeu de role

var perso = {
    
nom: "Aurora",
    
sante: 150,
    
force: 25,
    
xp: 0,
    
    // Renvoie la description du personnage
    
decrire: function () {
    
    var description = this.nom + " a " + this.sante + " points de vie, " +
    
    this.force + " en force et " + this.xp + " points d'expérience";
    
    return description;
    
}
    
    
};

console.log(perso.decrire());

// Aurora est blessée par une flèche

perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force

perso.force = perso.force + 10;

// Aurora apprend une nouvelle compétence

perso.xp = perso.xp + 15;

console.log(perso.decrire()); */

var unObjet = {
    a : 2
};

// Crée unAutreObjet avec unObjet comme prototype

var unAutreObjet = Object.create(unObjet);

console.log(unAutreObjet.a);
unAutreObjet.b = 4;
console.log(unAutreObjet.b);

var Personnage = {
    
// Initialise le personnage
    
initPerso: function (nom, sante, force) {
    
    this.nom = nom;
    
    this.sante = sante;
    
    this.force = force;
    
}
    
    // Attaque un personnage cible
    
attaquer: function(cible)
    {
        if (this.sante > 0)
        {
            var degats = this.force;
            console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégâts");
            cible.sante = cible.sante - degats;
            if (cible.sante > 0) console.log(cible.nom + " a encore " + cible.sante + " points de vie");
            else {
                cible.sante = 0;
                console.log(cible.nom + " est mort !");
            }
        } else console.log(this.nom + " ne peut pas attaquer : il est mort...");
    }
    
};

var joueur = Object.create(Personnage);

// Initialise le joueur

joueur.initJoueur = function(nom, sante, force){
    this.initPerso(nom, sante, force);
    this.xp = 0;
};
joueur.decrire =  function () {
    var description = this.nom + " a " + this.sante + " points de vie, " +
    
    this.force + " en force et " + this.xp + " points d'expérience";
    
    return description;
};

// combat un adversaire

joueur.combattre = function(adversaire)
{
    this.attaquer(adversaire);
    if (adversaire.sante === 0)
    {
        console.log(this.nom + " a tué " + adversaire.nom + " et gagne " +
                    adversaire.valeur + " points d'expérience");
        this.xp += adversaire.valeur;
     }
}

var adversaire = Object.create(Personnage);

adversaire.initAdversaire = function(nom, sante, force, race, valeur) {
    this.initPerso(nom,sante,force);
    this.race = race;
    this.valeur = valeur;
};

var joueur1 = Object.create(joueur);
joueur1.initJoueur("Aurora", 150,25);

var joueur2 = Object.create(joueur);
joueur2.initJoueur("Gamora", 130, 30);

console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");

console.log(joueur1.decrire());

console.log(joueur2.decrire());

var monstre = Object.create(Adversaire);
monstre.initAdversaire("ZORG", 40, 20, "Orc", 10);

console.log("Un affreux monstre arrive : c'est un " + monstre.race + " nommé " + monstre.nom);

monstre.attaquer(joueur1);
monstre.attaquer(joueur2);

joueur1.combattre(monstre);
joueur2.combattre(monstre);

console.log(joueur1.decrire());

console.log(joueur2.decrire());


var
