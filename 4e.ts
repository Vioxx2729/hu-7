let namen: string[] = ["Anna", "Ben", "Clara", "David", "Eva"];

const filter = document.getElementById("filter") as HTMLInputElement;
const namenListe = document.getElementById("liste") as HTMLUListElement;

function anzeigen() {
    namenListe.innerHTML = "";

    for (let name of namen) {
        if (name.toLowerCase().indexOf(filter.value.toLowerCase()) !== -1) {
            const li = document.createElement("li");
            li.textContent = name;
            namenListe.appendChild(li);
        }
    }
}

// Alle Namen beim Start anzeigen
anzeigen();

// Filtern während der Eingabe
filter.addEventListener("input", anzeigen);