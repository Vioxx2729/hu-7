const passwort = document.getElementById("passwort") as HTMLInputElement;
const btnPasswort = document.getElementById("btn") as HTMLButtonElement;
const meldung = document.getElementById("meldung") as HTMLParagraphElement;

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