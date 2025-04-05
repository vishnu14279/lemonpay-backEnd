// routes/tasks.js
const express = require("express");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getTaskById
} = require("../Controller/taskController");
const validateTask = require("../middleware/validateTasks");

const router = express.Router();

router.post("/create",validateTask, createTask);
router.get("/getTasks", getTasks);
router.get("/getTask/:id", getTaskById);
router.put("/updateTask/:id",validateTask, updateTask);
router.delete("/deleteTask/:id", deleteTask);

module.exports = router;
