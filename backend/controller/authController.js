const User = require("../model/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '1d'});
}

// @desc    Register admin (first time setup)
// @route   POST /api/auth/register
// @access  Public (should be disabled after setup)
const register = async (req, res, next) => {
    try {
        const {name, email, password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({
                success: false,
                message: "Name, Email & Password is required"
            })
        }

        // Only allow one admin
        const existingAdmin = await User.findOne({role: 'admin'});
        if(existingAdmin){
            return res.status(403).json({
                success: false,
                message: "Admin already exists."
            })
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: hashPassword,
            role: "admin"
        })

        const token = generateToken(user._id);

        res.status(201).json({
            success: true,
            data: {id: user._id, user: user._id, email: user.email},
            token
        })
    } catch (error) {
        next(error)
    }
}



// Login 
const login = async (req, res) => {
    try {
        const {email , password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "email & password is required"
            })
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success: false,
                message: "Invalid Credential"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
             return res.status(400).json({
                success: false,
                message: "Invalid Credential"
            })
        }

        const token = generateToken(user._id);
        res.status(200).json({
            success: true,
            data: {id: user._id, name: user.name, email: user.email},
            token
        });
    } catch (error) {
        next(error)
    }
}

const getMe = async (req, res) => {
    res.status(200).json({
        success: true,
        data: req.user
    })
}

module.exports = { register, login , getMe}