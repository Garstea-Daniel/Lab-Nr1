<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obține datele din formular
    $nume = htmlspecialchars($_POST['nume']);
    $email = htmlspecialchars($_POST['email']);
    $mesaj = htmlspecialchars($_POST['mesaj']);

    // Deschide fișierul pentru a adăuga mesajul
    $file = "messages.txt";
    $message = "Nume: $nume\nEmail: $email\nMesaj: $mesaj\n\n";

    file_put_contents($file, $message, FILE_APPEND);

    // Redirect către pagina de contact după trimitere
    header("Location: contact.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AutoCost - Suport</title>
    <link rel="stylesheet" href="../assets/css/support.css"> 
</head>
<body>
    <nav>
        <button id="theme-toggle">🌙 Mod întunecat</button> |
        <a href="index.php">Acasă</a> |
        <a href="services.php">Servicii</a> |
        <a href="pricing.php">Prețuri</a> |
        <a href="about.php">Despre Noi</a> |
        <a href="contact.php">Contact</a> |
        <a href="support.php">Suport</a>
    </nav>

    <h1>Mesajele primite</h1>

    <div id="messages">
        <?php
        // Verifică dacă există mesaje salvate
        $file = "messages.txt";
        if (file_exists($file) && filesize($file) > 0) {
            echo "<pre>" . file_get_contents($file) . "</pre>";
        } else {
            echo "<p>Momentan nu există mesaje.</p>";
        }
        ?>
    </div>
    <div class="back-button-container">
    <a href="contact.php">Înapoi la formular</a>
</div>
   
    <script src="../assets/js/index.js"></script>
</body>
</html>