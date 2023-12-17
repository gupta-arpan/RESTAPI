const getStudentQuery = "SELECT * FROM students";
const getStudentByIdQuery = "SELECT * FROM students WHERE id = $1";
const checkEmailExistQuery = "SELECT s FROM students s WHERE s.email = $1";
const addStudentQuery = "INSERT INTO students(name, email, age, dob) VALUES ($1, $2, $3, $4)";

export { getStudentQuery, getStudentByIdQuery, checkEmailExistQuery, addStudentQuery };