// Referința catre elementele din DOM ( scheletul HTML)
var form = document.querySelector("form");
var tabelaStudenti = document.querySelector("#detalii-student table");
var detaliiContainer = document.querySelector("#detalii-student");

// Funcție pentru gestionarea evenimentului de submit al formularului
function handleSubmit(event) {
  event.preventDefault();

  // Obține valorile introduse în formular
  var nume = document.getElementById("first_name").value;
  var prenume = document.getElementById("last_name").value;
  var initiala = document.getElementById("initiala").value;
  var nota = document.getElementById("nota").value;
  var specializare = document.getElementById("specializare").value;
  var grupa = document.getElementById("grupa").value;
  var programStudiu = document.getElementById("program_studiu").value;

  //Creez linia tabelului
  var newRow = document.createElement("tr");

  //Creez coloanele
  var numeCell = document.createElement("td");
  numeCell.textContent = nume;
  newRow.appendChild(numeCell);

  var prenumeCell = document.createElement("td");
  prenumeCell.textContent = prenume;
  newRow.appendChild(prenumeCell);

  var initialaCell = document.createElement("td");
  initialaCell.textContent = initiala;
  newRow.appendChild(initialaCell);

  var notaCell = document.createElement("td");
  notaCell.textContent = nota;
  newRow.appendChild(notaCell);

  var specializareCell = document.createElement("td");
  specializareCell.textContent = specializare;
  newRow.appendChild(specializareCell);

  var grupaCell = document.createElement("td");
  grupaCell.textContent = grupa;
  newRow.appendChild(grupaCell);

  var programStudiuCell = document.createElement("td");
  programStudiuCell.textContent = programStudiu;
  newRow.appendChild(programStudiuCell);

  // Adaugă rândul în tabel
  tabelaStudenti.appendChild(newRow);

  // Afișează containerul cu detaliile studentului
  detaliiContainer.style.display = "block";

  
  form.reset();

  // Creează un obiect pentru student ( Aproximativ OOP)
  var student = {
    nume: nume,
    prenume: prenume,
    initiala: initiala,
    nota: nota,
    specializare: specializare,
    grupa: grupa,
    programStudiu: programStudiu
  };

  // Verifică dacă există studenți salvați în localStorage
  var studentiSalvati = localStorage.getItem("studenti");
  var listaStudenti = [];
  if (studentiSalvati) {
    // Dacă există, convertește JSON-ul într-un array de obiecte
    listaStudenti = JSON.parse(studentiSalvati);
  }

  // Adaugă noul student în lista de studenți
  listaStudenti.push(student);

  // Salvează lista actualizată în localStorage
  localStorage.setItem("studenti", JSON.stringify(listaStudenti));
}


form.addEventListener("submit", handleSubmit);

 // Salvează lista actualizată în localStorage
 localStorage.setItem("studenti", JSON.stringify(listaStudenti));

 

  




















/*
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var formData = new FormData(form);
  
      fetch('secretariat.php', {
        method: 'POST',
        body: formData
      })
      .then(function(response) {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('Eroare de rețea');
        }
      })
      .then(function(data) {
        console.log('Răspuns de la server:', data);
        // Aici puteți adăuga orice alte acțiuni pe care doriți să le efectuați după trimiterea formularului
      })
      .catch(function(error) {
        console.error('Eroare:', error);
      });
    });
  });
  */

  
  

  
  