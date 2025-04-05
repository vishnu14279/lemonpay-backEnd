const { body, validationResult } = require("express-validator");

const validateTask = [
  body("taskName")
    .notEmpty()
    .withMessage("Task name is required")
    .isLength({ min: 3 })
    .withMessage("Task name must be at least 3 characters long"),

  body("dueDate")
    .notEmpty()
    .withMessage("Due date is required")
    .isISO8601()
    .toDate()
    .withMessage("Due date must be a valid date"),

  // Optional field
  body("description")
    .optional()
    .isLength({ max: 200 })
    .withMessage("Description should be less than 200 characters"),

  // Final error handler
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateTask;
