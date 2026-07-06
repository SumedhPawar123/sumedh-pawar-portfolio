const jwt = require("jsonwebtoken");
const User = require("../model/User");

// protected function - check token in headers
exports.protect = async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1]
    }

    if(!token){
        return res.status(401).json({
            success: false,
            message: "Not Authorized, no token provided"
        })
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decode.id).select('-password');

        if(!req.user){
            return res.status(401).json({
                success: false,
                message: "User not found"
            })
        }
        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Not Authorized"
        })
    }
}

// Only admin can proceed further
exports.adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({
      success: false,
      message: "Access denied. Admin only",
    });
  }
};