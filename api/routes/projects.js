import express from "express";
import { createProject, getProjects, getProjectsById, updateProjects, deleteProject } from "../controllers/project.js";

const router = express.Router();  

//Create
router.post("/create", createProject);

//Read
router.get("/", getProjects);

//Read By ID
router.get("/find/:id", getProjectsById);

//Update
router.put("/:id", updateProjects);

//Delete
router.delete("/:id", deleteProject);



export default router;