// alert('ok js')
// -- déclarer un tableau indexé :
// 1 -
var monTableau = [];
console.log(monTableau);
// 2 -
var myArray = new Array;
console.log(myArray);
// myArray et mon tableau sont des tableaux qui peuvent contenir plusieurs informations
// affecter des valeurs au tableau, plusieurs méthodes :
// a -
var nosPrenoms = ["Sahar", "Philippe", "Mamadou", "Zitouni", "Sébastien"];
console.log(nosPrenoms);
// b -
monTableau[0] = "Sahar";
monTableau[1] = "Mamadou";
monTableau[2] = "Philippe";
monTableau[3] = "Zitouni";
monTableau[4] = "Sébastien";
console.log(monTableau);

// déclarer et affecter des valeurs à un objet
var coordonnee = {
    prenom : "Hugo",
    nom : "LIEGEARD",
    age : 82
};
console.clear(); // permet d'effacer les lignes de débug qui précède le console.clear();
console.log(coordonnee); // j'affiche toutes les informations de mon tableau
console.log(coordonnee['prenom']); // je n'affiche que le prénom
console.log(coordonnee.nom); // je n'affiche que le nom

// *-- on va créer deux tableaux indexés

var listeDePrenom = ["Oussmane", "Cherif", "Hugo"];
var listeDeNom = ["MAMA", "BENALLAL", "LIEGEARD"];
var Annuaire = [listeDePrenom, listeDeNom];
console.log(Annuaire);
document.write(); // fonction native de JS qui permet d'inscrire un résultat directement sur la page HTML et non plus sur la console
document.write(Annuaire[0][2] + " " + Annuaire[1][2]);
document.write("<hr>");
document.write(Annuaire[0][0]);
document.write(" ");
document.write(Annuaire[1][1]);

// tableau à 2 dimensions non indexé

var contact = [
    {prenom: "Hugo", nom: "LIEGEARD", tel:"07 83 97 15 15"},
    {prenom: "Salim", nom: "SOUMARE", tel: "07 83 97 13 14"},
    {prenom: "Pransun", nom: "BALASUBRA", tel: "07 83 97 18 19"}
];
console.log(contact);

/*----------------------------------------------------------------------------------------------------------------------------/
|                                                  EXERCICE                                                                   |
| ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ |
| Créez un Tableau à 2 dimensions appelé "AnnuaireDesStagiaires" qui contiendra toutes les coordonnées pour chaque stagiaire. |
| Ex : Nom, Prénom, Tel                                                                                                       |
/----------------------------------------------------------------------------------------------------------------------------*/

var AnnuaireDesStagiaires = [
    { prenom: "Hugo", nom: "LIEGEARD", tel: "07 83 97 15 15" },
    { prenom: "Salim", nom: "SOUMARE", tel: "07 83 97 13 14" },
    { prenom: "Pransun", nom: "BALASUBRA", tel: "07 83 97 18 19" }
];
// var AnnuaireDesStagiaires = [contact];
console.log(AnnuaireDesStagiaires);

// exemple à 3 dimensions

var array3Dimensions = [
    {
        prenom: "Hugo",
        nom: "LIEGEARD",
        coordonnees: {
            email: "hugo.liegeard@lepoles.com",
            tel: {
                fixe: "05 96 10 83 28",
                fax: "05 96 10 86 32",
                portable: {
                    prive: "07 83 97 10 15",
                    pro: "07 83 97 15 15"
                }
            },
            adresse: {
                ville: "DUCOS",
                CP: "97224",
                region: "Martinique",
                pays: {
                    code: "FR",
                    nom: "FRANCE"
                }
            }   
        }
    }
];
console.log(array3Dimensions);
console.log(array3Dimensions[0].coordonnees.email);

/*-------------------------
|    AJOUTER UN ELEMENT   |
-------------------------*/

var couleur = ['Rouge', 'Jaune', 'Vert'];
console.clear();
console.log(couleur);
console.log(couleur.length); // .length me permet d'afficher sur ma console le nombre d'élément que contient mon tableau

// pour ajouter un élément dans mon tableau, je fais appel à la fonction push()
var nbElementsDeMonTableau = couleur.push('Violet');
console.log(couleur);
console.log(nbElementsDeMonTableau);

// pour ajouter un élément au début de mon tableau, je vais faire appel à la fonction unshift ()
var nbElementsDeMonTableau = couleur.unshift('Bleu', 'Orange');
console.clear();
console.log(couleur);
console.log(nbElementsDeMonTableau);

// pour supprimer le dernier élément de mon tableau, je fais appel à la fonction pop()
couleur.pop();
console.log(couleur);
console.log(nbElementsDeMonTableau);

// pour supprimer le premier élément de mon tableau, j'utilise la fonction shift()
couleur.shift();
console.log(couleur);
console.log(nbElementsDeMonTableau);

// insère un élément à l'index 2 de mon tableau 
couleur.splice(2, 0, 'Noir');
console.log(couleur);
console.log(nbElementsDeMonTableau);

// remplace un élément à l'index 4 de mon tableau 
couleur.splice(4, 1, 'Blanc');
console.log(couleur);
console.log(nbElementsDeMonTableau);