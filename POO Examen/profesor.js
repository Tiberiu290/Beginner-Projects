// Obține referința către tabelul studentilor
var tabelaStudenti = document.querySelector("#tabela-studenti tbody");

// Funcție pentru afișarea studenților din Local Storage în tabel
function afiseazaStudenti() {
  // Verifică dacă există studenți salvati în Local Storage
  if (localStorage.getItem("studenti")) {
    // Obține studenții din Local Storage și îi convertește din formatul JSON într-un array
    var studenti = JSON.parse(localStorage.getItem("studenti"));

    // Golește tabelul
    tabelaStudenti.innerHTML = "";

    // Parcurge fiecare student din array și adaugă un nou rând în tabel
    studenti.forEach(function(student) {
      var newRow = tabelaStudenti.insertRow();

      
      var numeCell = newRow.insertCell();
      numeCell.textContent = student.nume;

      var prenumeCell = newRow.insertCell();
      prenumeCell.textContent = student.prenume;

      var initialaCell = newRow.insertCell();
      initialaCell.textContent = student.initiala;

      var notaCell = newRow.insertCell();
      notaCell.textContent = student.nota;

      var specializareCell = newRow.insertCell();
      specializareCell.textContent = student.specializare;

      var grupaCell = newRow.insertCell();
      grupaCell.textContent = student.grupa;

      var programStudiuCell = newRow.insertCell();
      programStudiuCell.textContent = student.programStudiu;

      var actiuniCell = newRow.insertCell();

      // Button stergere
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Șterge";
      deleteButton.addEventListener("click", function() {
        stergeStudent(student);
      });
      actiuniCell.appendChild(deleteButton);
    });
  }
}

// Funcție pentru ștergerea unui student
function stergeStudent(student) {
  // Verifică dacă există studenți salvati în Local Storage
  if (localStorage.getItem("studenti")) {
    
    var studenti = JSON.parse(localStorage.getItem("studenti"));

    // Găsește indexul studentului în array
    var index = studenti.findIndex(function(item) {
      return item.nume === student.nume && item.prenume === student.prenume;
    });

    // Verifică dacă s-a găsit studentul în array
    if (index !== -1) {
      // Șterge studentul din array
      studenti.splice(index, 1);

      // Actualizează Local Storage cu noul array de studenți
      localStorage.setItem("studenti", JSON.stringify(studenti));

      // Afișează din nou studenții în tabel
      afiseazaStudenti();
    }
  }
}

// Apelează funcția de afișare a studenților la încărcarea paginii
afiseazaStudenti();


document.getElementById("export-btn").addEventListener("click", function() {
    // Obține datele despre studenți din tabel
    var table = document.getElementById("tabela-studenti");
    var data = [];
    for (var i = 0; i < table.rows.length; i++) {
      var rowData = [];
      for (var j = 0; j < table.rows[i].cells.length; j++) {
        rowData.push(table.rows[i].cells[j].textContent);
      }
      data.push(rowData);
    }
  
    // Exportare Excel
    
    var workbook = XLSX.utils.book_new();
    var worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Studenti");
  
  
    XLSX.writeFile(workbook, "detalii_studenti.xlsx");
  });
  

