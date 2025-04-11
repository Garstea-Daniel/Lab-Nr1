<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nume = htmlspecialchars(trim($_POST["nume"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $mesaj = htmlspecialchars(trim($_POST["mesaj"]));

    $newMessage = [
        "nume" => $nume,
        "email" => $email,
        "mesaj" => $mesaj,
        "data" => date("Y-m-d H:i:s") // Salvează și data mesajului
    ];

    // Numele fișierului JSON unde salvăm mesajele
    $file = "messages.json";

    // Citim datele existente din fișier (dacă există)
    if (file_exists($file)) {
        $jsonData = file_get_contents($file);
        $messages = json_decode($jsonData, true); // Convertim JSON în array PHP
    } else {
        $messages = []; // Dacă fișierul nu există, creăm un array gol
    }

    // Adăugăm noul mesaj în array
    $messages[] = $newMessage;

    // Salvăm array-ul înapoi în fișier, convertit în JSON
    file_put_contents($file, json_encode($messages, JSON_PRETTY_PRINT));

    // Răspunde cu mesajul de succes (pentru AJAX)
    echo "Mesajul a fost trimis cu succes!";
    exit();
}