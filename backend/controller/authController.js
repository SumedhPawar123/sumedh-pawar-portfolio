const User = require("../model/User")
const jwt = require("jsonwebtoken")
const bcrypt = require

const generateToken = (id) => {
    return jwt.sign({id}, process.env.SECRET_KEY, {expiresIn: '1d'});
}

// @desc    Register admin (first time setup)
// @route   POST /api/auth/register
// @access  Public (should be disabled after setup)
const register = async (req, res, next) => {
    try {
        const {name, email, password} = req.body;

        // Only allow one admin
        const existingAdmin = await User.findOne({role: 'admin'});
        if(existingAdmin){
            return res.status(403).json({
                success: false,
                message: "Admin already exists."
            })
        }

        const user = await User.create({
            name,
            email
        })
    } catch (error) {
        
    }
}