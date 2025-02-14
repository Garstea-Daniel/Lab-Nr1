/*Home button script */
document.getElementById("home-link").addEventListener("click", function(event) {
    event.preventDefault();
    const homeSection = document.getElementById("home-section");
    const currentDisplay = window.getComputedStyle(homeSection).display;
    if (currentDisplay === "none") {
        homeSection.style.display = "block";
    } else {
        homeSection.style.display = "none";
    }
});
/*Contact button script */
document.getElementById("contact-link").addEventListener("click", function(event) {
    event.preventDefault(); 

    const contactBox = document.getElementById("contact-box");
    console.log(contactBox.style.display);  

    if (contactBox.style.display === "none" || contactBox.style.display === "") {
        contactBox.style.display = "block"; 
    } else {
        contactBox.style.display = "none"; 
    }
});