function StudentRow({ student, updateMarks }) {
  const handleChange = (e) => {
    updateMarks(student.id, e.target.value);
  };

  const isPass = student.marks >= 40;

  return (
    <tr>
      <td>{student.name}</td>

      <td>
        <input
          type="number"
          value={student.marks}
          onChange={handleChange}
        />
      </td>

      <td style={{ color: isPass ? "green" : "red" }}>
        {isPass ? "Pass" : "Fail"}
      </td>
    </tr>
  );
}

export default StudentRow;