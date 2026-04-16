import persons from "./persons.json" with { type: "json" };

// tabelle befüllen
function renderPersons() {
    const tbody = document.querySelector("#tbody");
    tbody.innerHTML = "";
    for (const person of persons) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${person.id}</td>
            <td>${person.name}</td>
            <td>${person.groesse}</td>
            <td>${person.geburtsdatum}</td>
            <td>${person.herkunft}</td>
            <td>${person.gewicht}</td>
        `;
        tbody.appendChild(tr);
    }
}

// bei klick auf height sortieren
let sortAsc = true;
document.querySelector("#height").addEventListener("click", () => {
    if (sortAsc) {
        persons.sort((a, b) => a.groesse - b.groesse);
    } else {
        persons.sort((a, b) => b.groesse - a.groesse);
    }
    sortAsc = !sortAsc;
    renderPersons();
});

// beim laden anzeigen
renderPersons();
