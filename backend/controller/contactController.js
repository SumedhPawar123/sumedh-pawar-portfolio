const Contact = require("../model/Contact");
const { sendEmailNotification, sendAutoReply } = require("../utils/sendEmail");


// Submit Contact Form Public Side
exports.submitContact = async (req, res, next) => {
    try {
        const { name, email,phone, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            const error = new Error("All fields are required")
            error.status = 404;
            return next(error)
        }

        const contact = await Contact.create({
            name,
            email,
            phone,
            subject,
            message,
            ipAddress: req.ip
        })

        sendEmailNotification(contact).catch(console.error);
        sendAutoReply(contact).catch(console.error);

        res.status(201).json({
            success: true,
            message: 'your message has been sent successfully! i will get back to you soon',
            data: { id: contact._id }
        })

    } catch (error) {
        next(error)
    }
}

exports.getMessage = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10
        const skip = (page - 1) * limit;

        const total = await Contact.countDocuments();
        const messages = await Contact.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);
        res.json({
            success: true,
            data: messages,
            pagination: { total, page, limit, pages: Math.ceil(total / limit) }
        });
    } catch (error) {
        next(error)
    }
}
// Mark message as read (Admin only)
// Put /api/contact/:id

exports.markAsRead = async (req, res, next) => {
    try {
        const { id } = req.params;
        const message = await Contact.findByIdAndUpdate(
            id,
            { isRead: true },
            { new: true }
        );

        if(!message) return res.status(404).json({
            success: false,
            message: 'message not found'
        })

        res.status(200).json({
            success: true,
            data: message
        })

    } catch (error) {
        next(error)
    }
}

