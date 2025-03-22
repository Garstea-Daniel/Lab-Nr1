document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");

    // Aplică tema întunecată dacă a fost activată anterior
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️"; // Iconiță de mod luminos
    } else {
        themeToggle.textContent = "🌙"; // Iconiță de mod întunecat
    }

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Salvează preferința utilizatorului în localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            themeToggle.textContent = "☀️"; // Iconiță de mod luminos
        } else {
            localStorage.setItem("darkMode", "disabled");
            themeToggle.textContent = "🌙"; // Iconiță de mod întunecat
        }
    });
});

document.getElementById("fuel-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne reîncărcarea paginii

    // Preluarea valorilor introduse
    let distance = parseFloat(document.getElementById("distance").value);
    let fuelAmount = parseFloat(document.getElementById("fuel-amount").value);

    // Verifică dacă valorile sunt valide
    if (isNaN(distance) || isNaN(fuelAmount) || distance <= 0 || fuelAmount <= 0) {
        alert("Te rog completează toate câmpurile corect!");
        return;
    }

    // Calculul consumului mediu de combustibil
    let averageConsumption = (fuelAmount / distance) * 100;

    // Afișarea rezultatului
    document.getElementById("average-consumption").innerText = `Consum mediu: ${averageConsumption.toFixed(2)} l/100 km`;
});
document.getElementById("annual-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Preluarea valorilor introduse de utilizator
    let annualDistance = parseFloat(document.getElementById("annual-distance").value);
    let annualConsumption = parseFloat(document.getElementById("annual-consumption").value);
    let fuelPrice = parseFloat(document.getElementById("fuel-price").value);
    let insuranceCost = parseFloat(document.getElementById("insurance-cost").value);
    let maintenanceCost = parseFloat(document.getElementById("maintenance-cost").value);

    // Calculul costului anual pentru combustibil
    let fuelCost = (annualDistance * annualConsumption) / 100 * fuelPrice;

    // Calculul totalului estimat
    let totalEstimate = fuelCost + insuranceCost + maintenanceCost;

    // Afișarea rezultatelor
    document.getElementById("fuel-cost").innerText = fuelCost.toFixed(2);
    document.getElementById("insurance-cost-value").innerText = insuranceCost.toFixed(2);
    document.getElementById("maintenance-cost-value").innerText = maintenanceCost.toFixed(2);
    document.getElementById("total-estimate").innerText = totalEstimate.toFixed(2);
});