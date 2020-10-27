// Lista Cognomi
// Chiedere all'utente il cognome
// inserirlo in un array con altri cognomi: 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

var cognomeUtente = prompt("Inserisci il tuo cognome");

var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

cognomi.push(cognomeUtente);
cognomi.sort();

// output
var listaEl = document.getElementById("listaCognomi");

var posUtente = 0;

for (i = 0; i < cognomi.length; i++) {
  listaEl.innerHTML += "<li>" + cognomi[i] + "</li>";
  if(cognomeUtente == cognomi[i]) {
    posUtente = i;
  };
};

document.getElementById("posCognomi").innerHTML += posUtente + 1;
