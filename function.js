document.addEventListener("DOMContentLoaded", function () {
  // DOM-Elemente abrufen
  const stadtSelect = document.getElementById("stadtSelect");
  const emailInput = document.getElementById("mailinp");
  const stadtError = document.getElementById("stadtError");
  const emailError = document.getElementById("emailError");
  const nachricht = document.getElementById("nachricht");
  const submitButton = document.getElementById("funcbut");

  // Event-Listener für den Submit-Button
  submitButton.addEventListener("click", function () {
    // Eingaben abrufen und validieren
    const selectedStadt = stadtSelect.value.trim();
    const emailValue = emailInput.value.trim();

    // Fehlermarkierungen zurücksetzen
    stadtError.style.display = "none";
    emailError.style.display = "none";

    // Validierung
    let isValid = true;

    // Stadt validieren
    if (selectedStadt === "") {
      stadtError.style.display = "block";
      isValid = false;
    }

    // E-Mail validieren
    if (!validateEmail(emailValue)) {
      emailError.style.display = "block";
      isValid = false;
    }

    // Wenn alles gültig ist, Anfrage senden
    if (isValid) {
      // Erfolgsmeldung anzeigen
      nachricht.textContent = "Daten werden übermittelt...";
      nachricht.className = "success-message";
      nachricht.style.display = "block";

      // URL mit ausgewählter Stadt und E-Mail
      const url = `https://wobtest.lobster.internal.schnellecke.com/dw/Request/requestForWeather/${encodeURIComponent(
        selectedStadt
      )}/${encodeURIComponent(emailValue)}`;

      // Stummer URL-Aufruf (ohne Prüfung der Antwort)
      const response = fetch(url, { method: "GET" }); // Sendet die Anfrage, ignoriert die Antwort

      // Nachricht nach 5 Sekunden ausblenden
      setTimeout(() => {
        nachricht.style.display = "none";
      }, 5000);
    } else {
      // Fehlermeldung anzeigen
      nachricht.textContent = "Bitte korrigieren Sie die Eingaben.";
      nachricht.className = "error-message";
      nachricht.style.display = "block";

      // Nachricht nach 5 Sekunden ausblenden
      setTimeout(() => {
        nachricht.style.display = "none";
      }, 5000);
    }
  });

  // E-Mail-Validierungsfunktion
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Event-Listener für Eingabe-Änderungen - Fehler ausblenden
  stadtSelect.addEventListener("change", function () {
    if (this.value !== "") {
      stadtError.style.display = "none";
    }
  });

  emailInput.addEventListener("input", function () {
    if (validateEmail(this.value)) {
      emailError.style.display = "none";
    }
  });
});
