const { Error } = require('mongoose');
const Project = require('../model/Project')

// create a project
exports.createProject = async (req, res, next) => {
    const { title, description, shortDesc, techStack, githubUrl, liveUrl, imageUrl, category } = req.body;

    try {
        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: 'project title & description is required'
            })
        }

        const project = await Project.create({
            title,
            description,
            shortDesc,
            techStack,
            githubUrl,
            liveUrl,
            imageUrl,
            category
        })

        res.status(200).json({
            success: true,
            message: 'project created successfully',
            data: project
        })
    } catch (error) {
        next(error)
    }
}

// get all projects
exports.getProjects = async (req, res, next) => {
    try {
        const { category, featured } = req.query;
        const filter = {};

        if (category) filter.category = category;
        if (featured === 'true') filter.featured = true

        const projects = await Project.find(filter).sort({ order: 1, createdAt: -1 })

        res.status(200).json({
            success: true,
            count: projects.length,
            data: projects,
        })
    } catch (error) {
        next(error)
    }
}

// get project by Id
exports.getProjectById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const project = await Project.findById(id);

        if(!project){
            return res.status(404).json({
                success: false,
                message: 'project is not found'
            })
        }

        res.status(200).json({
            success: true,
            data: project
        })
    } catch (error) {
        next(error)
    }
}

// Update existing project
exports.updateProject = async (req, res, next) => {
    const { id } = req.params;

    try {
        const project = await Project.findByIdAndUpdate(
            id,
            req.body,
            { new: true,
                runValidators: true
            }
        )

        if(!project){
            return res.status(404).json({
                success: false,
                message: 'project is not found'
            })
        }

        res.status(200).json({
            success: true,
            message: 'project update successfully',
            data: project
        })
    } catch (error) {
        next(error)
    }
}

// delete project
// /api/project/:id
exports.deleteProject = async (req, res, next) => {
    const { id } = req.params;

    try {
        const project = await Project.findById(id)
        if(!project){
            return res.status(404).json({
                success: false,
                message: 'project is not found'
            })
        }

        await project.deleteOne()

        res.status(200).json({
            success: true,
            message: 'project deleted successfully'
        })
    } catch (error) {
        next(error)
    }
}