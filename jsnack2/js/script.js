/*
Snack2
Crea un array di numeri interi e fai la somma di tutti gli elementi 
che sono in posizione dispari.
*/

// creo una costante che mi aiuta ad impostare un numero massimo di numeri da stampare.
const maxNumbers = [parseInt(100)];
let number = Math.floor(Math.random() * maxNumbers);

// // creo la lista dei numeri pari.
for (let i = 0; i < maxNumbers.length; i++) {
  console.log(number);
};



if(number % 2==0){
  console.log("The number is even");
}
else {
  console.log("The number is odd");
}
