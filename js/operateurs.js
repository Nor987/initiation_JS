// alert('ok js');

/*******************************  EXERCICE 1   *******************************/
// Quelles seront les valeurs des variables A & B après exécution des instructions suivantes ?

var A = 1;
var B = A + 3; // retourne 4
console.log(B); // 4
console.log(A); // 3

/*******************************  EXERCICE 2   *******************************/
// Quelles seront les valeurs des variables A, B & C après exécution des instructions suivantes ?

var A = 5;
var B = 3;
var C = A + B; // 8
A = 2;
C = B - A;
console.log(A); // 2
console.log(B); // 3
console.log(C); // 1

/*******************************  EXERCICE 3   *******************************/
// Quelles seront les valeurs des variables A, B  & C après exécution des instructions suivantes ?

var A = 5;
var B = A + 4; // 9
A = A + 1; // 6
B = A - 4; // 2
console.log(A); // 6 
console.log(B); // 2

/*******************************  EXERCICE 4   *******************************/
// Ecrire un algorithme permettant d'échanger les valeurs de deux variables A et B, et ce quel que soit leur contenu préalable

var A = 10;
var B = A - 3; // 7
B = B - 6;
A = 4;
C = A - B; // 3
console.log(A); // 4
console.log(B); // 1
console.log(C); // 3

var A = 15;
var B = 122;
var C = A; // console.log(C) => retourner 15
A = 4;
console.log(A);
console.log(B);