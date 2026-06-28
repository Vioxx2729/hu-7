"use strict";
const zahlInput = document.getElementById("zahl");
const btnFakultaet = document.getElementById("btn");
const ausgabeFakultaet = document.getElementById("ausgabe");
btnFakultaet.addEventListener("click", () => {
    const n = Number(zahlInput.value);
    if (!Number.isInteger(n) || n < 0) {
        ausgabeFakultaet.textContent = "Bitte eine ganze Zahl größer oder gleich 0 eingeben.";
        return;
    }
    let fakultaet = 1;
    for (let i = 1; i <= n; i++) {
        fakultaet *= i;
    }
    ausgabeFakultaet.textContent = `${n}! = ${fakultaet}`;
});
