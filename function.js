





document.getElementById('funcbut').addEventListener('click', function() {
    const eingabe1 = document.getElementById('textinp').value.trim(); // Leerzeichen entfernen
    const eingabe2 = document.getElementById('mailinp').value.trim(); // Leerzeichen entfernen
    const nachricht = document.getElementById('nachricht');

    if (eingabe1 === "" || eingabe2 === "") {
        nachricht.textContent = "Es wurden keine Daten eingegeben.";
        nachricht.style.color = "white";
    } else {
        nachricht.textContent = "Daten werden übermittelt...";
        nachricht.style.color = "darkgreen";

        // URL mit Query-Parametern erstellen
        const url = `https://172.16.1.41/dw/request/requestForWeather/${encodeURIComponent(eingabe1)}/${encodeURIComponent(eingabe2)}`;

        // Stummer URL-Aufruf (ohne Prüfung der Antwort)
        const response = fetch(url, { method: 'GET' }); // Sendet die Anfrage, ignoriert die Antwort



    }

    nachricht.style.display = "block"; // Nachricht sichtbar machen
});
