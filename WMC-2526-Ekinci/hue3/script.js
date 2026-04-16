import personen from "./persons.json" with { type: "json" };

function anzeigen() {
    const tabelle = document.querySelector("#tbody");
    tabelle.innerHTML = "";
    for (const person of personen) {
        const zeile = document.createElement("tr");
        zeile.innerHTML = `
            <td>${person.id}</td>
            <td>${person.name}</td>
            <td>${person.groesse}</td>
            <td>${person.geburtsdatum}</td>
            <td>${person.herkunft}</td>
            <td>${person.gewicht}</td>
        `;
        tabelle.appendChild(zeile);
    }
}

let aufsteigend = true;
document.querySelector("#height").addEventListener("click", () => {
    if (aufsteigend) {
        personen.sort((a, b) => a.groesse - b.groesse);
    } else {
        personen.sort((a, b) => b.groesse - a.groesse);
    }
    aufsteigend = !aufsteigend;
    anzeigen();
});

anzeigen();
