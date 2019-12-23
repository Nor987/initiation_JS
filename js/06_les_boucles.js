// alert('ok js');

/*---------------------
|     LES BOUCLES     |
---------------------*/

// il y a différents types de boucle, les plus utilisées sont la boucle " FOR " et la boucle " WHILE "
// *-* boucle FOR() :
for(let i = 0; i <= 5; i++) {
    document.write('<p>Nombre de tour(s) de boucle : <em style="background:yellow">'+ i +'</em></p>');
}
document.write("<hr>");

/*
pour i = 0; => j'initialise le départ de ma boucle à 0
pour i <= 5; => tant que la valeur de i est inférieur ou égal à 5
pour i++; => j'incrémente (j'ajoute) un tour de boucle

je donne l'instruction de faire un tour de boucle supplémentaire tant que la valeur de i n'est pas égal ou supérieur à 5
*/

// la boucle WHILE 
var j = 0;
while(j <=5) {
    document.write('<p>Nombre de tour(s) de boucle : <em style="background:gold">'+ j +'</em></p>');
    // ATTENTION A NE PAS OUBLIER L'INCREMENTATION
    j++;
}
document.write("<hr>");

/* ------------------------------
|            EXERCICE           |
------------------------------ */

// -- Supposons le tableau suivant :
var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Jacques', 'Hugo'];

/**
 * CONSIGNE : Grâce à une boucle FOR,
 * affichez la liste des prénoms
 * du tableau ci-dessus dans la console,
 * ou sur votre page.
 */

console.log(Prenoms);

document.write('<p>Liste des prénoms : <ol>');

for (let i = 0; i < Prenoms.length; i++) {
    document.write("<li>" + Prenoms[i] + "</li>");
    document.write("<br>");
    console.log(Prenoms[i]);
}
document.write('</ol>');

// document.write(Prenom[i]);
// dowument.write(" / ");