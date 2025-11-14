const classroom = {
    className: "IT2025",
    teacher: "Mr. Perera",
    students: [
        { name: "Kathirsan", age: 22 },
        { name: "Nimesha", age: 22 },
        { name: "Dinuka", age: 23 }
    ]
}

// Print the teacher's name
console.log("Teacher's Name:", classroom.teacher); // Output: Mr. Perera [cite: 99]

// Add a new student to the array
classroom.students.push({ name: "Amali", age: 20 });
console.log("Student array after adding:", classroom.students);

// Print all student names in the classroom
console.log("--- All Students in Classroom ---");
classroom.students.forEach(student => {
    console.log(student.name);
});
// Output: Kavindu, Nimesha, Dinuka, Amali [cite: 101]