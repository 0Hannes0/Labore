document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', (event) => {
      const usernameInput = loginForm.querySelector('input[name="username"]');
      const passwordInput = loginForm.querySelector('input[name="password"]');

      if (!usernameInput.value || !passwordInput.value) {
        alert('Bitte geben Sie Benutzername und Passwort ein.');
        event.preventDefault(); // Formular nicht absenden
      }
    });
  });