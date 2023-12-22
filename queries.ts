const getStudentQuery = "SELECT * FROM students";
const getStudentByIdQuery = "SELECT * FROM students WHERE id = $1";
const checkEmailExistQuery = "SELECT s FROM students s WHERE s.email = $1";
const addStudentQuery = "INSERT INTO students(name, email, dob) VALUES ($1, $2, $3)";
const removeStudentQuery = "DELETE FROM students WHERE id = $1";
const updateStudentQuery = "UPDATE students SET name = COALESCE($1, name), email = COALESCE($2, email), dob = COALESCE($3, dob) WHERE id = $4";

export { getStudentQuery, getStudentByIdQuery, checkEmailExistQuery, addStudentQuery, removeStudentQuery, updateStudentQuery };