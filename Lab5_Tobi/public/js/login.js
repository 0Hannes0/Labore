document.getElementById

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:3000/users.json") // Sicherstellen, dass der Pfad korrekt ist
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.username === username && user.password === password);
            if (user) {
                alert(`Willkommen, ${user.vorname} ${user.nachname}!`);
                window.location.href = `dashboard.html?interest=${user.interesse}`;
            } else {
                alert("Falscher Benutzername oder Passwort.");
            }
        })
        .catch(error => console.error("Fehler beim Laden der Daten:", error));
});
