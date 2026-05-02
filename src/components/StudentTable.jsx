import StudentRow from "./StudentRow";

function StudentTable({ students, updateMarks }) {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Name</th>
          <th>Marks</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student) => (
          <StudentRow
            key={student.id}
            student={student}
            updateMarks={updateMarks}
          />
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;