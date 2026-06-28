const btn = document.getElementById("btn") as HTMLButtonElement;
const startInput = document.getElementById("start") as HTMLInputElement;
const endeInput = document.getElementById("ende") as HTMLInputElement;
const tabelle = document.getElementById("tabelle") as HTMLTableSectionElement;

btn.addEventListener("click", () => {
    const start = Number(startInput.value);
    const ende = Number(endeInput.value);

    // Alte Tabelleninhalte löschen
    tabelle.innerHTML = "";

    // Eingabe prüfen
    if (isNaN(start) || isNaN(ende)) {
        alert("Bitte zwei Zahlen eingeben.");
        return;
    }

    // Zahlen von Start bis Ende ausgeben
    for (let x = start; x <= ende; x++) {
        const zeile = document.createElement("tr");

        const tdX = document.createElement("td");
        tdX.textContent = x.toString();

        const tdQuadrat = document.createElement("td");
        tdQuadrat.textContent = (x * x).toString();

        zeile.appendChild(tdX);
        zeile.appendChild(tdQuadrat);

        tabelle.appendChild(zeile);
    }
});