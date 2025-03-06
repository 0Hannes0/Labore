document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('form');

    registerForm.addEventListener('submit', (event) => {
      const firstnameInput = registerForm.querySelector('input[name="firstname"]');
      const lastnameInput = registerForm.querySelector('input[name="lastname"]');
      const usernameInput = registerForm.querySelector('input[name="username"]');
      const passwordInput = registerForm.querySelector('input[name="password"]');
      const termsCheckbox = registerForm.querySelector('input[name="terms"]');

      // Einfache Validierungen
      if (!firstnameInput.value || !lastnameInput.value || !usernameInput.value || !passwordInput.value) {
        alert('Bitte füllen Sie alle erforderlichen Felder aus.');
        event.preventDefault();
      }

      if (passwordInput.value.length < 8) {
        alert('Das Passwort muss mindestens 8 Zeichen lang sein.');
        event.preventDefault();
      }

      if (!termsCheckbox.checked) {
        alert('Bitte akzeptieren Sie die Nutzungsbedingungen.');
        event.preventDefault();
      }

      // Zusätzliche Validierungen (Regex) können hier hinzugefügt werden
    });
  });