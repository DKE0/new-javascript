var Chien = {
    
init: function( nom, race, taille )
    {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
aboyer: function()
    {
        if (this.race === "mâtin de Naples") return "Grr !  Grr !";
        if (this.race === "bichon") return "Kai ! Kai !";
    }
    
};

var crokdur = Object.create(Chien);

crokdur.init("Crokdur", "mâtin de Naples", 75);

console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");

console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());


var pupuce = Object.create(Chien);

pupuce.init("Pupuce", "bichon", 22);

console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");

console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());


var Personnage = {
    
    // Initialise le personnage
    
initPerso: function (nom, sante, force) {
    
    this.nom = nom;
    
    this.sante = sante;
    
    this.force = force;
    
    this.xp = 0;
    this.pOr = 10;
    this.nbCle = 1;
    
},
    
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

};
joueur.decrire =  function () {
    var description = this.nom + " a " + this.sante + " points de vie, " +
    
    this.force + " en force et " + this.xp + " points d'expérience, " + this.pOr + "pièces d'or et " + this.nbCle + " Clé(s)";
    
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
        this.nbCle += adversaire.nbCle;
        this.pOr += adversaire.pOr;
    }
};

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

var monstre = Object.create(adversaire);
monstre.initAdversaire("ZORG", 40, 20, "Orc", 10);

console.log("Un affreux monstre arrive : c'est un " + monstre.race + " nommé " + monstre.nom);

monstre.attaquer(joueur1);
monstre.attaquer(joueur2);

joueur1.combattre(monstre);
joueur2.combattre(monstre);

console.log(joueur1.decrire());

console.log(joueur2.decrire());
