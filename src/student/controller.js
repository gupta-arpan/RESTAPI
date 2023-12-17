import { pool } from "../../db.js";
import { getStudentQuery, getStudentByIdQuery} from "./queries.js";

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

export {getStudents, getStudentById};