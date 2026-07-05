const Skills = require("../model/Skills")

// create skills
exports.createSkills = async (req, res, next) => {
    const { name, category, proficiency, icon, order } = req.body;

    try {
        if (!name || !category) {
            return res.status(400).json({
                success: false,
                message: "all fields are required"
            })
        }

        const skill = await Skills.create({
            name,
            category,
            proficiency,
            icon,
            order
        })

        res.status(201).json({
            success: true,
            message: 'skill created successfully',
            data: skill
        })
    } catch (error) {
        next(error)
    }
}

// get all skills
exports.getSkills = async (req, res, next) => {
    try {
        const { category } = req.query;
        const filter = category ? { category } : {};

        const skills = await Skills.find(filter).sort({ order: 1, category: 1 });

        res.status(200).json({
            success: true,
            count: skills.length,
            data: skills
        })
    } catch (error) {
        next(error)
    }
}

// update skills
exports.updateSkill = async (req, res, next) => {
    try {
        const { id } = req.params;

        const skill = await Skills.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )

        if (!skill) {
            return res.status(404).json({
                success: false,
                message: 'skill is not found'
            })
        }


        res.status(200).json({
            success: true,
            message: "skill update successfully",
            data: skill
        })
    } catch (error) {
        next(error)
    }
}

// delete skill
exports.deleteSkill = async (req, res, next) => {
    const { id } = req.params;
    try {
        const skill = await Skills.findById(id)
        if(!skill){
            return res.status(404).json({
                success: false,
                message: 'skill is not found'
            })
        }

        await skill.deleteOne()

        res.status(200).json({
            success: true,
            message: 'skill deleted successfully',
        })
    } catch (error) {
        next(error)
    }
}