const students = [
  { name: "Anna", age: 17, grade: 2 },
  { name: "Ben", age: 16, grade: 4 },
  { name: "Clara", age: 18, grade: 1 },
  { name: "David", age: 17, grade: 5 },
  { name: "Elena", age: 16, grade: 3 },
  { name: "Felix", age: 19, grade: 2 },
  { name: "Gina", age: 17, grade: 1 },
  { name: "Hugo", age: 18, grade: 4 },
];

// aufgabe 1: alle die nicht durchgefallen sind (note <= 4)
const passed = students.filter(s => s.grade <= 4);
console.log("passed:", passed);

// aufgabe 2: strings wie "Anna (17)"
const labels = students.map(s => `${s.name} (${s.age})`);
console.log("labels:", labels);

// aufgabe 3: namen der bestandenen
const passedNames = students.filter(s => s.grade <= 4).map(s => s.name);
console.log("passedNames:", passedNames);

// aufgabe 4: durchschnitt berechnen
const averageGrade = students.reduce((sum, s) => sum + s.grade, 0) / students.length;
console.log("averageGrade:", averageGrade);

// bonus: namen aller 17+ die bestanden haben, kommagetrennt
const result = students
  .filter(s => s.age >= 17 && s.grade <= 4)
  .map(s => s.name)
  .join(", ");
console.log("bonus:", result);
