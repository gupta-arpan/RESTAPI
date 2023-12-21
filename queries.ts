const getStudentQuery = "SELECT * FROM students";
const getStudentByIdQuery = "SELECT * FROM students WHERE id = $1";
const checkEmailExistQuery = "SELECT s FROM students s WHERE s.email = $1";
const addStudentQuery = "INSERT INTO students(name, email, age, dob) VALUES ($1, $2, $3, $4)";
const removeStudentQuery = "DELETE FROM students WHERE id = $1";
const updateStudentQuery = "UPDATE students SET name = COALESCE($1, name), email = COALESCE($2, email), age = COALESCE($3, age), dob = COALESCE($4, dob) WHERE id = $5";

export { getStudentQuery, getStudentByIdQuery, checkEmailExistQuery, addStudentQuery, removeStudentQuery, updateStudentQuery };