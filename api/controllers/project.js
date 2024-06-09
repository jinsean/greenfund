import Project from "../models/Project.js";

//Add New Project
export const createProject = async (req, res, next) => {
    const newProject = new Project(req.body);
  
    try {
        const savedProject = await newProject.save();
        res.status(200).json(savedProject);
    } catch (err) {
        next(err);
    }
};

//Get All Project
export const getProjects = async (req,res,next)=>{
    try {
        const getProjects = await Project.find();
        res.status(200).json(getProjects);
    } catch (err) {
        next(err);
    }
}

//Get Project by ID
export const getProjectsById = async (req,res,next)=>{
    try {
        const getProjectsById = await Project.findById(req.params.id);
        res.status(200).json(getProjectsById);
    } catch (err) {
        next(err);
    }
}

//Update Project
export const updateProjects = async (req,res,next)=>{
    try {
        const updateProjects = await Project.findByIdAndUpdate(        
            req.params.id,
            { $set: req.body },
            { new: true }); //Update and show the latest version
        res.status(200).json(updateProjects);
    } catch (err) {
        next(err);
    }
}

//Delete Project
export const deleteProject = async (req,res,next)=>{
    try {
        const deleteProject = await Project.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteProject);
        console.log("Succefully Delete")
    } catch (err) {
        next(err);
    }
}