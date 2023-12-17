import { pool } from "../../db.js";
import { getStudentQuery} from "./queries.js";

const getStudents = (req,res) => {
    pool.query(getStudentQuery, (error,result) => {
        if(error) throw error;
        res.status(200).json(result.rows)
    })
}

export {getStudents};