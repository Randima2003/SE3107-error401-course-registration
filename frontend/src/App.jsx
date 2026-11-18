import { useState } from "react";
import "./App.css";

function App() {
  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [courseName, setCourseName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="University course registration home">
          <span className="brand-mark" aria-hidden="true">U</span>
          <span>University Portal</span>
        </a>
        <span className="header-note">Student Services</span>
      </header>

      <section className="registration-card" aria-labelledby="page-title">
        <div className="card-heading">
          <span className="eyebrow">COURSE ENROLMENT</span>
          <h1 id="page-title">University Course Registration System</h1>
          <p>Enter your details below to register for a course.</p>
        </div>

        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="student-name">Student Name</label>
            <input
              id="student-name"
              name="studentName"
              type="text"
              autoComplete="name"
              placeholder="Enter your full name"
              value={studentName}
              onChange={(event) => {
                setStudentName(event.target.value);
                setSubmitted(false);
              }}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="student-id">Student ID</label>
            <input
              id="student-id"
              name="studentId"
              type="text"
              placeholder="Enter your student ID"
              value={studentId}
              onChange={(event) => {
                setStudentId(event.target.value);
                setSubmitted(false);
              }}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="course-name">Course Name</label>
            <input
              id="course-name"
              name="courseName"
              type="text"
              placeholder="Enter the course name"
              value={courseName}
              onChange={(event) => {
                setCourseName(event.target.value);
                setSubmitted(false);
              }}
              required
            />
          </div>

          <button className="register-button" type="submit">
            Register for course
            <span aria-hidden="true">→</span>
          </button>
        </form>

        {submitted && (
          <p className="success-message" role="status">
            Form submitted. This frontend demo does not save registration data.
          </p>
        )}

        <p className="demo-note">Frontend demo · Registration details are not saved</p>
      </section>

      <footer className="page-footer">University Course Registration</footer>
    </main>
  );
}

export default App;
