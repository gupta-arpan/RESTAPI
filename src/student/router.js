import { Router } from "express";
import { getStudents, getStudentById } from "./controller.js";
const router = Router();

router.get("/", getStudents);
router.get("/:id", getStudentById);

export {router};