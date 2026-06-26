const express = require('express')
const { getProjects, createProject, getProjectById, updateProject, deleteProject } = require('../controller/projectController')
const { protect, adminOnly } = require('../middleware/authMiddleware')
const router = express.Router()

// get all project 
// public

router.get('/', getProjects)

// create project by admin
// /api/project/create

router.post('/create', protect, adminOnly, createProject);

// get project by id
router.get("/:id", protect, adminOnly, getProjectById);

// update existing project
router.put('/:id', protect, adminOnly, updateProject);

// delete project by id
router.delete('/:id', protect, adminOnly, deleteProject);

module.exports = router;