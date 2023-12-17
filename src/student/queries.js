const getStudentQuery = "SELECT * FROM students";
const getStudentByIdQuery = "SELECT * FROM students WHERE id = $1";

export { getStudentQuery, getStudentByIdQuery };