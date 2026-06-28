const btn = document.getElementById("btn") as HTMLButtonElement;
const startInput = document.getElementById("start") as HTMLInputElement;
const endeInput = document.getElementById("ende") as HTMLInputElement;
const tabelle = document.getElementById("tabelle") as HTMLTableSectionElement;

btn.addEventListener("click", () => {
    // Prüfen, ob beide Felder ausgefüllt sind
    if (startInput.value.trim() === "" || endeInput.value.trim() === "") {
        alert("Bitte zwei Zahlen eingeben.");
        return;
    }

    const start = Number(startInput.value);
    const ende = Number(endeInput.value);

    // Tabelle leeren
    tabelle.innerHTML = "";

    // Optional: prüfen, ob Start größer als Ende ist
    if (start > ende) {
        alert("Der Startwert muss kleiner oder gleich dem Endwert sein.");
        return;
    }

    // Tabelle füllen
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