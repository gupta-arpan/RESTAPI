import { pool } from "../../db.js";
import { getStudentQuery, getStudentByIdQuery, checkEmailExistQuery, addStudentQuery, deleteStudentQuery, updateStudentQuery} from "./queries.js";

const getStudents = (req,res) => {
    pool.query(getStudentQuery, (error,result) => {
        if(error) throw error;
        res.status(200).json(result.rows)
    })
}

const getStudentById = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(getStudentByIdQuery, [id], (error,result) => {
        if (error) throw error;
        res.status(200).json(result.rows);
    })
}

const addStudent = (req,res) => {
    console.log(`name = ${name}, email = ${email}, age = ${age}, dob = ${dob}`);
    
    pool.query(checkEmailExistQuery, [email], (error,result) => {
        if(result.rows.length){
            res.send("Email already exists")
        }
        else{
            pool.query(addStudentQuery, [name, email, age, dob], (error,result) => {
                if(error) throw error;
                res.status(201).send("Student added successfully");
            })
        }
    })
}

const deleteStudent = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(getStudentByIdQuery, [id], (error,result) => {
        const noStudentFound = !result.rows.length;
        if(noStudentFound){
            res.send("Student does not exist in database!");
        }
        else{
            pool.query(deleteStudentQuery, [id], (error, result) => {
                if (error) throw error;
                res.status(202).send("Student removed successfully from database.");
            })
        }
    })
}

const updateStudent = (req,res) => {
    const {name, email, age, dob} = req.body;
    const id = parseInt(req.params.id);
    pool.query(getStudentByIdQuery, [id], (error,result) => {
        const noStudentFound = !result.rows.length;
        if(noStudentFound){
            res.send("Student does not exist in database");
        }
        else{
            pool.query(updateStudentQuery, [name, email, age, dob, id], (error,result) => {
                if (error) throw error;
                res.status(202).send("student data updated successfully");
            })
        }
    })
}

export {getStudents, getStudentById, addStudent, deleteStudent, updateStudent};