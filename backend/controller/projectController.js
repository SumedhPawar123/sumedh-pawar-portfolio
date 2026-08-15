
const Project = require("../model/Project");

// create a project
exports.createProject = async (req, res, next) => {
  try {
    const {
      title,
      description,
      shortDesc,
      githubUrl,
      liveUrl,
      category,
      featured,
      order,
    } = req.body;

    // handle techStack
    let techStack = req.body.techStack || [];

    // if techStack comes as comma-separated string from form-data
    if (typeof techStack === "string") {
      techStack = techStack.split(",").map((item) => item.trim()).filter(Boolean);
    }

    // image from multer
    const imageUrl = req.file ? `/uploads/projects/${req.file.filename}` : "";

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Project title and description are required",
      });
    }

    const project = await Project.create({
      title,
      description,
      shortDesc,
      techStack,
      githubUrl,
      liveUrl,
      imageUrl,
      category,
      featured: featured === "true" || featured === true,
      order: order || 0,
    });

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project,
    });
  } catch (error) {
    next(error);
  }
};

// get all projects
exports.getProjects = async (req, res, next) => {
  try {
    const { category, featured } = req.query;
    const filter = {};

    if (category) filter.category = category;
    if (featured === "true") filter.featured = true;

    const projects = await Project.find(filter).sort({ order: 1, createdAt: -1 });

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    next(error);
  }
};

// get project by id
exports.getProjectById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    next(error);
  }
};

// update project
exports.updateProject = async (req, res, next) => {
  const { id } = req.params;

  try {
    let project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    const {
      title,
      description,
      shortDesc,
      githubUrl,
      liveUrl,
      category,
      featured,
      order,
    } = req.body;

    let techStack = req.body.techStack;

    if (typeof techStack === "string") {
      techStack = techStack.split(",").map((item) => item.trim()).filter(Boolean);
    }

    // update fields only if provided
    if (title !== undefined) project.title = title;
    if (description !== undefined) project.description = description;
    if (shortDesc !== undefined) project.shortDesc = shortDesc;
    if (githubUrl !== undefined) project.githubUrl = githubUrl;
    if (liveUrl !== undefined) project.liveUrl = liveUrl;
    if (category !== undefined) project.category = category;
    if (order !== undefined) project.order = order;
    if (featured !== undefined) {
      project.featured = featured === "true" || featured === true;
    }
    if (techStack !== undefined) project.techStack = techStack;

    // if new image uploaded
    if (req.file) {
      project.imageUrl = `/uploads/projects/${req.file.filename}`;
    }

    await project.save();

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: project,
    });
  } catch (error) {
    next(error);
  }
};

// delete project
exports.deleteProject = async (req, res, next) => {
  const { id } = req.params;

  try {
    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }
 
    await project.deleteOne();

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};