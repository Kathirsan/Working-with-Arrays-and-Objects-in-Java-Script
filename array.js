const students = [
    { name: "Kavindu", age: 21, faculty: "Computing" },
    { name: "Nimesha", age: 22, faculty: "Engineering" },
    { name: "Dinuka", age: 23, faculty: "Business" }
];

// Print all student names
console.log("--- All Student Names ---");
students.forEach(student => {
    console.log(student.name);
});
// Output: Kavindu, Nimesha, Dinuka [cite: 77]

// Use .filter() to find students older than 21
const olderStudents = students.filter(student => student.age > 21);
console.log("Students older than 21:", olderStudents);
// Output: [{ name: "Nimesha", ... }, { name: "Dinuka", ... }] [cite: 78]

// Use .map() to create an array of all faculty names
const facultyNames = students.map(student => student.faculty);
console.log("All Faculty Names:", facultyNames);
// Output: ["Computing", "Engineering", "Business"] [cite: 79]