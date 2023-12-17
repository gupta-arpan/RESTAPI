import { pool } from "../../db.js";
import { getStudentQuery, getStudentByIdQuery, checkEmailExistQuery, addStudentQuery} from "./queries.js";

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
    console.log(req.body);
    const {name, email, age, dob} = req.body;
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

export {getStudents, getStudentById, addStudent};