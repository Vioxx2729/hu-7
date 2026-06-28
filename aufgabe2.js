"use strict";
// HTML-Elemente holen
const input = document.getElementById("betrag");
const button = document.getElementById("btn");
const ausgabe = document.getElementById("ausgabe");
// Button überwachen
button.addEventListener("click", () => {
    // Eingabe in eine Zahl umwandeln
    const betrag = Number(input.value);
    // Betrag kleiner als 100 €
    if (betrag < 100) {
        ausgabe.textContent = "Mindestbestellwert nicht erreicht.";
    }
    // Betrag zwischen 100 € und 249,99 €
    else if (betrag < 250) {
        const rabatt = betrag * 0.05;
        const endpreis = betrag - rabatt;
        ausgabe.textContent =
            `Rabatt: 5 %
Rabattbetrag: ${rabatt.toFixed(2)} €
Endpreis: ${endpreis.toFixed(2)} €`;
    }
    // Betrag zwischen 250 € und 499,99 €
    else if (betrag < 500) {
        const rabatt = betrag * 0.10;
        const endpreis = betrag - rabatt;
        ausgabe.textContent =
            `Rabatt: 10 %
Rabattbetrag: ${rabatt.toFixed(2)} €
Endpreis: ${endpreis.toFixed(2)} €`;
    }
    // Betrag ab 500 €
    else {
        const rabatt = betrag * 0.12;
        const endpreis = betrag - rabatt;
        ausgabe.textContent =
            `Rabatt: 12 %
Rabattbetrag: ${rabatt.toFixed(2)} €
Endpreis: ${endpreis.toFixed(2)} €`;
    }
});
