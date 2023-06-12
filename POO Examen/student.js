// Obține referința către butonul de căutare
var cautaBtn = document.getElementById("cauta-btn");

// Asociază funcția de căutare cu evenimentul "click" al butonului
cautaBtn.addEventListener("click", cautaStudenti);

// Funcție CAUTARE @@@@@@@@@
function cautaStudenti() {  
}

function cautaStudenti() {
    // Obține valorile introduse în câmpurile de căutare
    var nume = document.getElementById("nume-input").value.trim();
    var prenume = document.getElementById("prenume-input").value.trim();
    var initiala = document.getElementById("initiala-input").value.trim();
  
    
    if (localStorage.getItem("studenti")) {
      // Am obtinut studenții din Local Storage și i am convertit din formatul JSON într-un array
      var studenti = JSON.parse(localStorage.getItem("studenti"));
  
      
      var studentCautat = studenti.find(function(student) {
        return (
          student.nume.toLowerCase() === nume.toLowerCase() &&
          student.prenume.toLowerCase() === prenume.toLowerCase() &&
          student.initiala.toLowerCase() === initiala.toLowerCase()
        );
      });
  
      // Verificarre gasire student
      if (studentCautat) {
        
        var nota = studentCautat.nota;
        var specializare = studentCautat.specializare;
        var programStudiu = studentCautat.programStudiu;
  
        
        document.getElementById("nota-output").textContent = nota;
        document.getElementById("specializare-output").textContent = specializare;
        document.getElementById("program-studiu-output").textContent = programStudiu;
  
        
        document.getElementById("eroare-output").style.display = "none";
      } else {
        
        document.getElementById("nota-output").textContent = "";
        document.getElementById("specializare-output").textContent = "";
        document.getElementById("program-studiu-output").textContent = "";
  
       
        document.getElementById("eroare-output").style.display = "block";
      }
    }
  }
  