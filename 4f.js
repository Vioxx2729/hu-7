"use strict";
const passwort = document.getElementById("passwort");
const btnPasswort = document.getElementById("btn");
const meldung = document.getElementById("meldung");
btnPasswort.addEventListener("click", () => {
    if (passwort.value.length < 8) {
        meldung.textContent = "Passwort ist zu kurz.";
    }
    else if (passwort.value.indexOf("!") === -1) {
        meldung.textContent = "Passwort sollte ein ! enthalten.";
    }
    else {
        meldung.textContent = "Passwort ist gültig.";
    }
});
