const express = require('express')
const { createSkills, getSkills, updateSkill, deleteSkill } = require('../controller/skillsController')
const { adminOnly, protect } = require('../middleware/authMiddleware')
const router = express.Router()

// Public get all skills
router.get("/", getSkills)

// create skills
router.post("/create", protect, adminOnly, createSkills);

// update skills
router.put("/:id",protect, adminOnly, updateSkill);

// delete skills
router.delete("/:id", protect, adminOnly, deleteSkill)