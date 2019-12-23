/************
LES VARIABLES
************/

// 1.je fais une alerte pour vérifier que mon fichier JS est bien relié à mon HTML
// alert('js ok')

/* 
Lorsque l'on a besoin de stocker une information on utilise une variable. Une variable peut être interprété comme une boite dans la quelle nous allons stocker une information

IL EXISTE PLUSIEURS TYPES DE VARIABLE
*/

// pour déclarer une variable (la créer) :
var prenom;

// pour lui affecter une valeur :
var prenom = 'Alpha';

// afficher la valeur d'une variable :
// a- pour tester une valeur on ouvre la console du navigateur (F12) puis on écrit le nom de la variable à droite des ">>" puis ENTER

// b- afficher une alerte avec la variable (NE PAS METTRE DE GUILLEMETS)
alert(prenom);

// c- on écrit dans le script (code)
console.log(prenom);

// il est possible d'écrire plusieurs variables sur une seule ligne :
var nb1, nb2, nb3;
// et d'y affecter des valeurs :
nb1 = 1;
nb2 = 50;
nb3 = 220;

// une instruction se termine TOUJOURS par un point virgule

// le nom d'une variable peut comporter des lettres et des chiffres mais exclut les signes de pontuation (espace, accent...)

//  /!\ LE JS EST SENSIBLE A LA CASSE /!\

/* 
mavariable différent de maVariable ou ma_variable
*/

// écriture snake case = ma_variable
// écriture camelCase = maVariable

/*********************
LES TYPES DE VARIABLES
*********************/

// -- typeof, me permet de connaître le type de ma variable :
console.log(typeof prenom); // fonction native de JS

//  -- déclaration et affectation d'un nombre
var age = 40;
console.log(typeof age);

// -- les variables de type FLOAT
var uneDecimale = -2.984;
console.log(typeof uneDecimale); // la console retourne "number" donc un ou des chiffres

// -- les variables de type Booléens (boolean)
// LE BOOLEAN permet de vérifier si l'information est VRAIE (true) ou FAUSSE (false)
var unBoolean = false; // true
console.log(unBoolean); // retourne false
console.log(typeof unBoolean); // retourne boolean

// les CONSTANTES

// la déclaration CONST permet de créer une constante accessible UNIQUEMENT en lecture. Sa valeur ne pourra pas être modifiée par des réaffectations ultérieures. Une constante ne peut pas être déclarée à nouveau

const HOST = "localhost";
const USER = "root";
const PASSWORD = "mysql";

/*
donc il est impossible de faire cela :
const USER = "Alpha";
la console me retournera => SyntaxError: redeclaration of const USER
*/

// dans la convention on écrit les constantes en majuscule pour les reconnaitre 
var unNombre = "24";
console.log(unNombre); // affiche 24
console.log(typeof unNombre); // retourne string (chaîne de caractère)

// pour convertir string "24" en number :
unNombre = parseFloat(unNombre); // parseFloat permet d'interpréter le string 24 en chiffre 24
console.log(unNombre);
console.log(typeof unNombre); // retourne number

// pour convertir un chiffre en string
var nb4 = 93;
console.log(nb4); // affiche 93
console.log(typeof nb4); // la console interprète le nb4 comme un chiffre

nb4 = nb4.toString(); // toString() permet de convertir un nombre entier ou décimal en chaine de caractère (string)
console.log(typeof nb4);