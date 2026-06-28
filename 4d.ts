let temperaturen = [18, 23, 31, 15, 27, 35];

const liste = document.getElementById("liste")!;

for (let temperatur of temperaturen) {
    const li = document.createElement("li");
    li.textContent = temperatur + " °C";

    if (temperatur > 30) {
        li.classList.add("rot");
    } else {
        li.classList.add("schwarz");
    }

    liste.appendChild(li);
}