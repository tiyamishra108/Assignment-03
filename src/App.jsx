import { useState } from "react";
import Header from "./components/Header";
import AddStudentForm from "./components/AddStudentForm";
import StudentTable from "./components/StudentTable";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Kian Singhania", marks: 75 },
    { id: 2, name: "Nyra Kapoor", marks: 32 },
    { id: 3, name: "Aarya Kaul", marks: 50 },
  ]);
  
  // Add student
  const addStudent = (name, marks) => {
    const newStudent = {
      id: Date.now(),
      name,
      marks: Number(marks),
    };
    setStudents([...students, newStudent]);
  };

  // Update marks
  const updateMarks = (id, newMarks) => {
    const updatedStudents = students.map((s) =>
      s.id === id ? { ...s, marks: Number(newMarks) } : s
    );
    setStudents(updatedStudents);
  };

  // Stats
  const total = students.length;
  const passed = students.filter((s) => s.marks >= 40).length;
  const failed = total - passed;
  const avg =
    students.reduce((sum, s) => sum + s.marks, 0) / total || 0;

  return (
    <div className="container">
      <Header />

      <AddStudentForm addStudent={addStudent} />

      <div className="stats">
        <p>Total: {total}</p>
        <p>Passed: {passed}</p>
        <p>Failed: {failed}</p>
        <p>Average: {avg.toFixed(2)}</p>
      </div>

      <StudentTable students={students} updateMarks={updateMarks} />
    </div>
  );
}

export default App;