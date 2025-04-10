document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const raspuns = document.getElementById("raspuns");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Previne trimiterea tradițională a formularului

        const formData = new FormData(form);

        // Trimite datele cu AJAX
        fetch("cod.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text()) // Răspunsul va fi mesajul de succes sau eroare
        .then(data => {
            raspuns.textContent = data; // Afișează mesajul în div-ul "raspuns"
            raspuns.style.color = "green"; // Poți personaliza stilul aici
            form.reset(); // Curăță formularul după trimitere
        })
        .catch(err => {
            raspuns.textContent = "A apărut o eroare la trimiterea mesajului.";
            raspuns.style.color = "red";
        });
    });
});