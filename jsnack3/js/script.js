/*
Snack3 (Bonus)
Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

// Creo due array che hanno un numero di elementi diversi.

const lista1 = [];
const lista2 = [];

for(let i = 0; i < 10; i++){
  // voglio creare una lista di numeri col push.
  //in questo caso da 0 a 99 (floor).
  // potrei anche fare da 1 a 100 con ceil.
  lista1.push(Math.floor(Math.random() * 100));
  // console.log(lista1);
}

for(let i = 0; i < 23; i++){
  // voglio creare una lista di numeri col push.
  //in questo caso da 0 a 99 (floor).
  // potrei anche fare da 1 a 100 con ceil.
  lista2.push(Math.floor(Math.random() * 100));
  // console.log(lista2);
}

// voglio capire quale delle lue liste è la più lunga.
const differenzaListe = lista1.length - lista2.length;
// console.log(differenzaListe);

/* dato che il risultato è negativo (-13), deduco che 
  la prima lista è minore della seconda (lo so già)

  Dopodichè aggiungo elementi all'array (lista) più corto
  fino a quando ne avrà tanti quanti l'altro.
*/

/* siccome la differenzaListe è un numero negativo e non potrei
  fare cicli in negativo, con suggerimento di Florian, utilizzo la funzione math.abs
  per trasformare tutti i numeri negativi in positivi (valore assoluto).
*/

for (let i = 0; i < Math.abs(differenzaListe); i++) {
  if (differenzaListe < 0) {
    lista1.push(20);
  } else {
    lista2.push(20);
  }
}

console.log(lista1);

console.log(lista2);
