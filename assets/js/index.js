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
            themeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("darkMode", "disabled");
            themeToggle.textContent = "🌙";
        }
    });
});