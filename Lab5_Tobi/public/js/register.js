document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const newUser = {
        vorname: document.getElementById("vorname").value,
        nachname: document.getElementById("nachname").value,
        username: document.getElementById("newUsername").value,
        password: document.getElementById("newPassword").value,
        interesse: document.getElementById("interesse").value
    };

    fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)  // Sende die Benutzerdaten
    })
    .then(response => response.text())  // Antwort vom Server
    .then(data => {
        alert(data);  // Erfolgsnachricht anzeigen
        window.location.href = "index.html";
    })
    .catch(error => {
        console.error("Fehler bei der Registrierung:", error);
        alert("Es gab ein Problem bei der Registrierung. Bitte versuche es später noch einmal.");
    });
});
