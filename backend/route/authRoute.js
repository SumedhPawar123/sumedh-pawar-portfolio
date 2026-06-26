const express = require("express");
const { login, getMe, register } = require("../controller/authController");
const { protect, adminOnly } = require("../middleware/authMiddleware");
const router = express.Router()

// register for admin
router.post("/register", register)

// login Post
router.post("/login", login)

// get my profile
router.get("/profile", protect, adminOnly, getMe)

module.exports = router;