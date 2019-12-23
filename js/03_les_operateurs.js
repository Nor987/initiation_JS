/***************************
LES OPERATEURS ARITHMETIQUES
***************************/

// je vérifie ma connexion au fichier HTML

// alert('ok js');

// l'addition

// 1- déclaration de plusieurs variables :
var nb1, nb2, resultat;

nb1 = 10;
nb2 = 5;

// l'addition de nb1 et nb2 avec l'opérateur " + "
resultat = nb1 + nb2;
console.log(resultat);

// la soustraction de nb1 et nb2 avec l'opérateur " - "
resultat = nb1 - nb2;
console.log(resultat);

// la division de nb1 et nb2 avec l'opérateur " / "
resultat = nb1 / nb2;
console.log(resultat);

// la multiplication de nb1 et nb2 avec l'opérateur " * "
resultat = nb1 * nb2;
console.log(resultat);

/* 
le modulo correspond au reste de la division
le modulo de nb1 et nb2 avec l'opérateur " % "
*/
resultat = nb1 % nb2;
console.log(resultat);

/* 
LES ECRITURES SIMPLIFIEES
*/

// addition
// je créé ma variable nb1 et je lui affecte une valeur 15 (avec le symbole =)
nb1 = 15;

// première variante :
// pour ajouter 5 à ma valeur de 15, je réaffecte à ma variable une nouvelle instruction :
// je lui dis que ma variable nb1 sera maintenant le résultat de ma valeur de base (donc 15) auquel je lui rajoute 5 :
/* ma variable   la valeur de référence */ 
    //    nb1     =         nb1          +    5; // ici on dit que le résultat final de nb1 est la somme de notre variable +5

// console.log(nb1); // retourne 20 donc 15 + 5

// deuxième variante
nb1 += 5; // ce qui équivalent à écrire nb1 = nb1 + 5
console.log(nb1);

/* 
je peux procéder de la même manière pour tous les autres opérateurs arithmétiques :
" + ", " - ", " * ", " / " et " % "
*/