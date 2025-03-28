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
            $file = "messages.json";
            if (file_exists($file)) {
                // Citim conținutul fișierului JSON
                $jsonData = file_get_contents($file);
                $messages = json_decode($jsonData, true);

                // Afișăm fiecare mesaj
                if (!empty($messages)) {
                    foreach ($messages as $msg) {
                        echo "<div class='message-box'>";
                        echo "<strong>Nume:</strong> " . htmlspecialchars($msg["nume"]) . "<br>";
                        echo "<strong>Email:</strong> " . htmlspecialchars($msg["email"]) . "<br>";
                        echo "<strong>Mesaj:</strong> " . nl2br(htmlspecialchars($msg["mesaj"])) . "<br>";
                        echo "<small>Trimis la: " . htmlspecialchars($msg["data"]) . "</small>";
                        echo "</div><hr>";
                    }
                } else {
                    echo "<p>Nu există mesaje încă.</p>";
                }
            } else {
                echo "<p>Nu există mesaje încă.</p>";
            }
            ?>
        </div>
    </div>
    <div class="back-button-container">
    <a href="contact.php">Înapoi la formular</a>
</div>
   
    <script src="../assets/js/index.js"></script>
</body>
</html>