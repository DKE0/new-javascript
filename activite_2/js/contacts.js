/*
Activité : gestion des contacts
*/

// TODO : complétez le programme

var contacts = ["carole lévisse","Mélodie Nelsonne"];

console.log("Bienvenue dans le gestionnaire des contacts !");
console.log("1 : Lister les contacts");
console.log("2 : Ajouter un contact");
console.log("0 : Quitter");
var userVal ;
do {

   userVal = Number(prompt(" choisissez une option "));
   switch (userVal) {
    case 1:
    console.log(" Voici la liste de tous vos contacts :");
    contacts.forEach(function(contact)
                  {
                    var contactTab = contact.split(" ");
                    console.log("Nom : "+contactTab[0]+ ","+"Prénom : "+contactTab[1]);
                  });
                  console.log("\n");
    break;

    case 2:
    var nom = prompt(" Entrez le nom du contact ");
    var prenom = prompt(" Entrez le prénom du contact ");
    contacts.push(nom+" "+prenom);
    console.log("le nouveau contact a été ajouté ");
    break;

    case 0:
    console.log("Au revoir");
    break;

  default: console.log("erreur de saisie");
  }

} while (userVal);
