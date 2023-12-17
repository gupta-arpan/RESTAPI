import { Router } from "express";
import { getStudents, getStudentById, addStudent, deleteStudent, updateStudent } from "./controller.js";
const router = Router();

router.get("/", getStudents);
router.post("/", addStudent);
router.get("/:id", getStudentById);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export {router};