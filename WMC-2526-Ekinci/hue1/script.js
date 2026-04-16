const schueler = [
  { name: "Anna", age: 17, grade: 2 },
  { name: "Ben", age: 16, grade: 4 },
  { name: "Clara", age: 18, grade: 1 },
  { name: "David", age: 17, grade: 5 },
  { name: "Elena", age: 16, grade: 3 },
  { name: "Felix", age: 19, grade: 2 },
  { name: "Gina", age: 17, grade: 1 },
  { name: "Hugo", age: 18, grade: 4 },
];

const bestanden = schueler.filter(s => s.grade <= 4);
console.log("bestanden:", bestanden);

const texte = schueler.map(s => `${s.name} (${s.age})`);
console.log("texte:", texte);

const namen = schueler.filter(s => s.grade <= 4).map(s => s.name);
console.log("namen:", namen);

const schnitt = schueler.reduce((summe, s) => summe + s.grade, 0) / schueler.length;
console.log("schnitt:", schnitt);

const ausgabe = schueler
  .filter(s => s.age >= 17 && s.grade <= 4)
  .map(s => s.name)
  .join(", ");
console.log("bonus:", ausgabe);
