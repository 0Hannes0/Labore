const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

// Startseite
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Registrierungsseite
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

// Registrierung verarbeiten
app.post('/register', (req, res) => {
  const { firstname, lastname, username, password, gender, interests, comments, terms } = req.body;

  // Validierung (vereinfacht)
  if (!firstname || !lastname || !username || !password || !gender || !interests || !terms) {
    return res.send('Bitte füllen Sie alle erforderlichen Felder aus.');
  }

  // Passwortvalidierung
  const passwordRegex = /^(?=.*[0-9])(?=.*[!#,+-_?])[a-zA-Z0-9!#,+-_?]{8,20}$/;
  if (!passwordRegex.test(password)) {
    return res.send('Passwort muss mindestens 8 Zeichen lang sein und eine Zahl und ein Sonderzeichen enthalten.');
  }

  // Benutzername-Validierung
  const usernameRegex = /^[a-zA-Z0-9_-]+$/;
  if (!usernameRegex.test(username)) {
    return res.send('Benutzername darf nur Buchstaben, Zahlen, "-" oder "_" enthalten.');
  }

  // Vorname/Nachname-Validierung
  const nameRegex = /^[a-zA-Z_-]{1,20}$/;
  if (!nameRegex.test(firstname) || !nameRegex.test(lastname)) {
    return res.send('Vor- und Nachname dürfen nur Buchstaben, "-" oder "_" enthalten und maximal 20 Zeichen lang sein.');
  }

  // Benutzerdaten speichern
  const newUser = { firstname, lastname, username, password, gender, interests, comments };
  const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'users.json'), 'utf8'));
  users.push(newUser);
  fs.writeFileSync(path.join(__dirname, 'data', 'users.json'), JSON.stringify(users, null, 2));

  res.send(`Willkommen, ${gender === 'male' ? 'Herr' : 'Frau'} ${firstname} ${lastname}! <a href="/">Zurück zum Login</a>`);
});

// Login verarbeiten
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'users.json'), 'utf8'));
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.render('dashboard', { user });
  } else {
    res.send('Ungültiger Benutzername oder Passwort.');
  }
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});