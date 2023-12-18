import { pool } from "../../db.js";
import { getStudentQuery, getStudentByIdQuery, checkEmailExistQuery, addStudentQuery, removeStudentQuery, updateStudentQuery} from "./queries.js";

const getStudents = async (req,res) => {
    try{
        const result = await pool.query(getStudentQuery);
        res.status(200).json(result.rows);
    }
    catch (error){
        console.log(error);
        res.status(500).send("Error occured while processing the request");
    }
}

const getStudentById = async (req,res) => {
    try{
        const id = parseInt(req.params.id);
        const result = await pool.query(getStudentByIdQuery, [id]);
        res.status(200).json(result.rows);
    }
    catch (error){
        console.log(error);
        res.status(500).send("Error occured while procssing the request");
    }
}

const addStudent = async (req,res) => {
    try{
        const {name, email, age, dob} = req.body;
        const result = await pool.query(checkEmailExistQuery, [email]);
        if(!result.rows.length){
            const result = await pool.query(addStudentQuery, [name, email, age, dob]);
            res.status(200).send("Student is successfully registered in database.");
        }else{
            res.status(500).send("Student already exist in database!");
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error occured while processing the request!")
    }
}

const removeStudent = async (req,res) => {
    try{
        const id = parseInt(req.params.id);
        const result = await pool.query(getStudentByIdQuery, [id]);
        const noStudentFound = !result.rows.length;
        if(noStudentFound){
            res.status(500).send("Student does not exist in database!");
        }else{
            const result = await pool.query(removeStudentQuery, [id]);
            res.status(202).send("Student is removed successfully from database.")
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error occurred while processing the request!");
    }
}

const updateStudent = async (req,res) => {
    try{
        const {name, email, age, dob} = req.body;
        const id = parseInt(req.params.id);
        const result = await pool.query(getStudentByIdQuery, [id]);
        const noStudentFound = !result.rows.length;
        if(noStudentFound){
            res.status(500).send("Student does not exist in database");
        }
        else{
            const result = await pool.query(updateStudentQuery, [name, email, age, dob, id]);
            res.status(200).send("student data updated successfully");
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error occurred while processing the request!");
    }
}

export {getStudents, getStudentById, addStudent, removeStudent, updateStudent};