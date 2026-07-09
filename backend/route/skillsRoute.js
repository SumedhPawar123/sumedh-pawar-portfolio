const express = require('express')
const { createSkills, getSkills, updateSkill, deleteSkill } = require('../controller/skillsController')
const { adminOnly, protect } = require('../middleware/authMiddleware')
const uploadSkill = require('../middleware/uploadSkill')
const router = express.Router()

// Public get all skills
router.get("/", getSkills)

// create skills
router.post("/create", protect, adminOnly, uploadSkill.single('icon'), createSkills);

// update skills
router.put("/:id",protect, adminOnly, uploadSkill.single('icon'), updateSkill);

// delete skills
router.delete("/:id", protect, adminOnly, deleteSkill);

module.exports = router;
