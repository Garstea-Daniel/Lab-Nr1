document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".choose-plan");
    const message = document.getElementById("selected-plan-message");
    const thankYouMessage = document.getElementById("thank-you-message");
    const themeToggle = document.getElementById("theme-toggle");

    // Verifică dacă utilizatorul a ales deja un plan (salvat în localStorage)
    const savedPlan = localStorage.getItem("selectedPlan");
    if (savedPlan) {
        message.innerHTML = `✅ Ai ales planul <b>${savedPlan}</b>!`;
    }

    // Aplică tema întunecată dacă a fost activată anterior
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️ Mod luminos";
    } else {
        themeToggle.textContent = "🌙 Mod întunecat";
    }

    // Eveniment pentru schimbarea temei
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            themeToggle.textContent = "☀️ Mod luminos";
        } else {
            localStorage.setItem("darkMode", "disabled");
            themeToggle.textContent = "🌙 Mod întunecat";
        }
    });

    // Eveniment pentru selectarea unui plan
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const planName = this.getAttribute("data-plan");
            localStorage.setItem("selectedPlan", planName);

            // Actualizează mesajul de selecție
            message.innerHTML = `✅ Ai ales planul <b>${planName}</b>!`;

            // Afișează mesajul de mulțumire cu detalii
            let details = "";
            if (planName === "Basic") {
                details = "Acest plan îți oferă acces gratuit la calculul consumului de combustibil.";
            } else if (planName === "Premium") {
                details = "Acest plan îți permite să estimezi costurile și să compari diferite modele auto.";
            } else if (planName === "Pro") {
                details = "Ai acces la toate funcționalitățile și suport tehnic dedicat.";
            }

            thankYouMessage.innerHTML = `🎉 Mulțumim că ai ales planul <b>${planName}</b>!<br>${details}`;
            thankYouMessage.style.display = "block";
            thankYouMessage.style.color = "#003366";
            thankYouMessage.style.fontSize = "18px";
            thankYouMessage.style.fontWeight = "bold";
            thankYouMessage.style.marginTop = "20px";
        });
    });
});