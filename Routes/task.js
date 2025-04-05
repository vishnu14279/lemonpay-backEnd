// routes/tasks.js
const express = require("express");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../Controller/taskController");

const router = express.Router();

router.post("/create", createTask);
router.get("/getTasks", getTasks);
router.put("/updateTask/:id", updateTask);
router.delete("/deleteTask/:id/:userid", deleteTask);

module.exports = router;
