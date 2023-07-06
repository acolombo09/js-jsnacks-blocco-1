/*
Snack1
Generatore di “nomi cognomi” casuali:
il Grande Gatsby ha una lista di nomi e una lista di cognomi,
e da queste vuole generare una falsa lista di invitati con nome e cognome.
-----------------------------------------------------------------------------
*/

// creo la lista dei nomi con l'array.
const namesList = ["Andrea", "Andrew", "Andy", "André", "Andreas"];

// creo la lista dei cognomi con l'array.
const surnamesList = ["Colombo", "Colombs", "Hawk", "Colombeur", "Muller"];

// creo un array test per i nomi 
for (let i = 0; i < namesList.length; i++) {
  let randomNameIndex = Math.floor(Math.random() * namesList.length);
  let randomName = namesList[randomNameIndex];
  console.log(randomName);
};

// creo un array test per i cognomi
for (let i = 0; i < surnamesList.length; i++) {
  let randomSurnameIndex = Math.floor(Math.random() * surnamesList.length);
  let randomSurname = surnamesList[randomSurnameIndex];
  console.log(randomSurname);
};

// VERSIONE finale
/* Non c'è bisogno di farne due separati in quanto ho presupposto che
  le lunghezze delle liste sono per forza uguali in quanto sto cercando
  nomi E cognomi.
*/
for (let i = 0; i < namesList.length; i++) {
  let randomNameIndex = Math.floor(Math.random() * namesList.length);
  let randomName = namesList[randomNameIndex];
  
  let randomSurnameIndex = Math.floor(Math.random() * surnamesList.length);
  let randomSurname = surnamesList[randomSurnameIndex];
  
  console.log(randomName + " " + randomSurname);
}

// Ad oggi non saprei come dire all'array come evitare gli eventuali doppioni.