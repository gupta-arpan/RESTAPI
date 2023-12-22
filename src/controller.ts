import { db } from "./db";
import { Request, Response } from "express";

const getStudents = async (req:Request,res:Response) => {
    try{
        const result = await db('students').select();
        res.status(200).json(result);
    }
    catch (error){
        console.log(error);
        res.status(500).send("Error occured while processing the request");
    }
}

const getStudentById = async (req: Request,res: Response) => {
    try{
        const id = parseInt(req.params.id);
        const result = await db('students').where('id', id);
        res.status(200).json(result);
    }
    catch (error){
        console.log(error);
        res.status(500).send("Error occured while processing the request");
    }
}

const addStudent = async (req: Request,res:Response) => {
    try{
        const {name, email, dob} = req.body;
        const result = await db('students').where('email', email);
        if(!result.length){
            const result = await db('students')
                                    .insert(
                                        {
                                            name: name,
                                            email: email,
                                            dob: dob
                                        }
                                    );
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

const removeStudent = async (req:Request,res:Response) => {
    try{
        const id = parseInt(req.params.id);
        const result = await db('students').where('id', id);
        const noStudentFound = !result.length;
        if(noStudentFound){
            res.status(500).send("Student does not exist in database!");
        }else{
            const result = await db('students').where('id', id).del();
            res.status(202).send("Student is removed successfully from database.")
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error occurred while processing the request!");
    }
}

const updateStudent = async (req:Request,res:Response) => {
    try{
        const {name, email, dob} = req.body;
        const id = parseInt(req.params.id);
        const result = await db('students').where('id', id);
        const noStudentFound = !result.length;
        if(noStudentFound){
            res.status(500).send("Student does not exist in database");
        }
        else{
            const result = await db('students').where('id', id)
                                    .update(
                                        {
                                            name: name,
                                            email: email,
                                            dob: dob
                                        }
                                    );
            res.status(200).send("student data updated successfully");
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error occurred while processing the request!");
    }
}

export {getStudents, getStudentById, addStudent, removeStudent, updateStudent};