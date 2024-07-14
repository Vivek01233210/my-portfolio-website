import Project from "../models/projectModel.js";

// create a project
export const createProject = async (req, res) => {
    try {
        const newProject = await Project.create({ ...req.body, createdBy: req.user._id });
        res.status(201).json({ message: "Project Created", project: newProject });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error });
    }

}

// get all projects
export const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find({});
        res.status(200).json({ projects });
    } catch (error) {
        return res.status(500).json({ error: 'Error getting projects' });
    }
}

// get a project
export const getProject = async (req, res) => {
    try {
        const project = await Project.findOne({ slug: req.params.slug });
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.status(200).json(project);
    } catch (error) {
        return res.status(500).json({ error: 'Error getting project' });
    }
}

// update a project
export const updateProject = async (req, res) => {
    try {
        const updatedProject = await Project.findOneAndUpdate(
            { slug: req.params.slug }, 
            {...req.body, createdBy: req.user._id }, 
            { new: true }
        );
        if (!updatedProject) {
            return res.status(404).json({ error: 'Project not found' });
        }
        return res.status(200).json({ message: 'Project updated' });
    }
    catch (error) {
        return res.status(500).json({ error: 'Error updating project' });
    }
}