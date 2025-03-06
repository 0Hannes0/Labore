const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Damit JSON-Daten richtig gesendet werden können
app.use(express.json());

// Statische Dateien bereitstellen (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route, um die users.json zu laden
app.get('/users.json', (req, res) => {
    // Pfad zur users.json-Datei
    const filePath = path.join(__dirname, 'users.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Fehler beim Laden der Benutzerdatei:', err);
            res.status(500).send('Fehler beim Laden der Daten');
        } else {
            res.json(JSON.parse(data)); // JSON-Daten zurückgeben
        }
    });
});

// Weitere Route, falls du deine Startseite (index.html) oder andere Dateien ansprechen möchtest
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Server starten
const port = 3000;
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
