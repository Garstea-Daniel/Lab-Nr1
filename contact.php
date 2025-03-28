<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AutoCost - Contact</title>
    <link rel="stylesheet" href="../assets/css/contact.css"> 
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
    <img src="../assets/images/contact.png" alt="3">
    <h1>Contactați-ne</h1>
    <p>Pentru orice întrebări, ne puteți contacta folosind formularul de mai jos:</p>

    <form action="cod.php" method="post">
    <label>Nume:</label>
    <input type="text" name="nume" required><br><br>
    
    <label>Email:</label>
    <input type="email" name="email" required><br><br>
    
    <label>Mesaj:</label><br>
    <textarea name="mesaj" rows="5" cols="40" required></textarea><br><br>
    
    <input type="submit" value="Trimite">
</form>

    <h2>Informații de contact</h2>
    <p>Email: contact@autocost.md</p>
    <p>Telefon: +373 123 456 789</p>
    <script src="../assets/js/index.js"></script>
</body>
</html>