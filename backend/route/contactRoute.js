const express = require('express');
const { submitContact, getMessage, markAsRead } = require('../controller/contactController');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const router = express.Router();

// Submit message
// Public

router.post('/', submitContact);

// get all contacts
router.get('/', protect, adminOnly, getMessage);

// mark as read message
router.put("/:id", protect, adminOnly, markAsRead)

module.exports = router;