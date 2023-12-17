import { Router } from "express";
import { getStudents, getStudentById, addStudent } from "./controller.js";
const router = Router();

router.get("/", getStudents);
router.post("/", addStudent);
router.get("/:id", getStudentById);

export {router};