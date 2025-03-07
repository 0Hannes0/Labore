document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.querySelector('form');

  registerForm.addEventListener('submit', (event) => {
    const firstnameInput = document.querySelector('input[name="firstname"]');
    const lastnameInput = document.querySelector('input[name="lastname"]');
    const usernameInput = document.querySelector('input[name="username"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const termsCheckbox = document.querySelector('input[name="terms"]');

    // Regex für Eingaben
    const nameRegex = /^[a-zA-Z_-]{1,20}$/;
    const usernameRegex = /^[a-zA-Z0-9_-]+$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[!#,+-_?])[a-zA-Z0-9!#,+-_?]{8,20}$/;

    let isValid = true;

    // Validierung Vorname & Nachname
    if (!nameRegex.test(firstnameInput.value)) {
      alert('Vorname darf nur Buchstaben, "-" oder "_" enthalten und maximal 20 Zeichen lang sein.');
      isValid = false;
    }
    if (!nameRegex.test(lastnameInput.value)) {
      alert('Nachname darf nur Buchstaben, "-" oder "_" enthalten und maximal 20 Zeichen lang sein.');
      isValid = false;
    }

    // Validierung Benutzername
    if (!usernameRegex.test(usernameInput.value)) {
      alert('Benutzername darf nur Buchstaben, Zahlen, "-" oder "_" enthalten.');
      isValid = false;
    }

    // Validierung Passwort
    if (!passwordRegex.test(passwordInput.value)) {
      alert('Passwort muss 8-20 Zeichen lang sein, mindestens eine Zahl und ein Sonderzeichen (!#,+-_?) enthalten.');
      isValid = false;
    }

    // Checkbox prüfen
    if (!termsCheckbox.checked) {
      alert('Bitte akzeptieren Sie die Nutzungsbedingungen.');
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault();
    }
  });
});
