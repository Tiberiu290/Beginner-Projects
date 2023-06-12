<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


// Parametrii de conexiune la baza de date
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

// Crearea conexiunii
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificarea conexiunii
if ($conn->connect_error) {
    die("Conexiunea la baza de date a eșuat: " . $conn->connect_error);
}

// Verificarea dacă s-a trimis un formular
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Preluarea datelor din formular
    $nume = $_POST["nume"];
    $prenume = $_POST["prenume"];
    $nota = $_POST["nota"];
    $specializare = $_POST["specializare"];
    $grupa = $_POST["grupa"];
    $program_studiu = $_POST["program_studiu"];

    // Interogare pentru inserarea datelor în tabel
    $sql = "INSERT INTO students (nume, prenume, nota, specializare, grupa, program_studiu) 
            VALUES ('$nume', '$prenume', '$nota', '$specializare', '$grupa', '$program_studiu')";


    if ($conn->query($sql) === TRUE) {
        echo "Datele au fost inserate cu succes în baza de date.";
    } else {
        echo "Eroare la inserarea datelor: " . $conn->error;
    }
}

// Închiderea conexiunii
$conn->close();
?>


