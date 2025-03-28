<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AutoCost - Prețuri</title>
    <link rel="stylesheet" href="../assets/css/pricing.css"> 
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
    <img src="../assets/images/preturi.png" alt="5">
    <p>Oferim mai multe planuri pentru a se potrivi nevoilor tale:</p>
    <h1>Planuri de Preț</h1>
    <table border="1">
        <tr>
            <th>Plan</th>
            <th>Beneficii</th>
            <th>Preț</th>
            <th>Acțiune</th>
        </tr>
        <tr>
            <td><b>Basic</b></td>
            <td>Acces gratuit la calcul consum combustibil</td>
            <td>0€</td>
            <td><button class="choose-plan" data-plan="Basic">Alege</button></td>
        </tr>
        <tr>
            <td><b>Premium</b></td>
            <td>Estimare costuri + comparare modele auto</td>
            <td>10€/lună</td>
            <td><button class="choose-plan" data-plan="Premium">Alege</button></td>
        </tr>
        <tr>
            <td><b>Pro</b></td>
            <td>Toate funcționalitățile + suport dedicat</td>
            <td>20€/lună</td>
            <td><button class="choose-plan" data-plan="Pro">Alege</button></td>
        </tr>
    </table>
    <p id="thank-you-message" style="display: none;"></p>
    
    <p id="selected-plan-message" style="display: none;"></p>
    
    <script src="../assets/js/pricing.js"></script>
</body>
</html>