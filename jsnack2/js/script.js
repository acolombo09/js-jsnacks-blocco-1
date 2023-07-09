/*
Snack2
Crea un array di numeri interi e fai la somma di tutti gli elementi 
che sono in posizione dispari.
*/

// creo un array che mi aiuta ad impostare un numero massimo di numeri da stampare.
const numbersList = [3, 5, 6, 7, 9, 20, 23, 35, 42, 63];
/* creo una variabile che parte da =0, così che una volta eseguito il ciclo modifichi 
il proprio valore calcolando la somma di tutti i numeri dispari.
*/
let OddNumbersSum = 0;

// creo un ciclo for con max cicli tanti quanti sono i numeri nell'array.
for (let i = 0; i < numbersList.length; i++) {
  // applico la logica che mi seleziona solo i numeri in posizione dispari.
  // proseguo con settare una condizione che mi somma i numeri dispari trovati nell'array.
  if(i % 2 !==0 ){
    console.log("The number "+ numbersList[i] + " is odd");
    OddNumbersSum += numbersList[i];
  }
};
// stampo i numeri in posizione dispari presenti nell'array
console.log(`La somma dei numeri in posizione dispari è: ${OddNumbersSum}`);

