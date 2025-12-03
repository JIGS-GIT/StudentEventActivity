import { useState, useRef } from "react";

function StudentEventActivity() {
  const [students, setStudents] = useState([]);
  const nameRef = useRef();

  function addStudent(e) {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    if (!name) return;

    const newStudent = {
      id: Date.now(),
      name: name,
    };

    setStudents([...students, newStudent]);
    nameRef.current.value = "";
    nameRef.current.focus();
  }

  function deleteStudent(id) {
    setStudents(students.filter((s) => s.id !== id));
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Activity Manager</h2>

      <form onSubmit={addStudent}>
        <input
          ref={nameRef}
          type="text"
          placeholder="Enter student name"
        />
        <button>Add</button>
      </form>

      <hr />

      {students.length === 0 && <p>No students yet.</p>}

      {students.map((student) => (
        <div key={student.id} >
          <p>Name: {student.name}</p>
          <button onClick={() => deleteStudent(student.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default StudentEventActivity;
