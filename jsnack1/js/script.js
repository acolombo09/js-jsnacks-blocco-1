/*
Snack1
Generatore di “nomi cognomi” casuali:
il Grande Gatsby ha una lista di nomi e una lista di cognomi,
e da queste vuole generare una falsa lista di invitati con nome e cognome.
-----------------------------------------------------------------------------
*/

// setto la lista mail con accesso e testo l'array.
const mailList = ["miamail@gmail.com", "suamail@gmail.com", "nostramail@gmail.com", "vostramaik@gmail.com"];
// console.log(mailList);
// console.log(mailList[0]);
// console.log(mailList[1]);
// console.log(mailList[2]);

// chiedo all'utente la sua mail.
const btnLogin = document.querySelector(".request");
const emailInputElement = document.querySelector("[name='email']");
let emailCheck = false;

btnLogin.addEventListener("click", function() {
  if (emailInputElement) {
    const email = emailInputElement.value;
    console.log(email);
  } else {
    console.log("Impossibile trovare l'elemento con il selettore '[name=mail]'");
  }

    // controllo e confronto se la mail dell'utente è presente nella lista.
    const email = emailInputElement.value;

    for (let i = 0; i < mailList.length; i++) {
    /*creo una variabile che di base è false e diventa true se la mail
      inserita corrisponde ad una delle mail in elenco
    */
    
    if (email === mailList[i]) {
      emailCheck = true;
    }
  }
    // stampo alert in base all'esito del controllo.
    if (emailCheck === true) {
    alert("Accesso consentito, benvenuto.");
  }
    else {
    alert("Accesso non consentito.");
  }
});
