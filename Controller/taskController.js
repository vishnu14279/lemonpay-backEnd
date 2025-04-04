const Task = require("../Model/Task");

const createTask = async (req, res) => {
  const { taskName, description, dueDate} = req.body;

  if (!title || !dueDate) {
    return res.status(400).json({ error: "Title and Due Date are required." });
  }

  const newTask = new Task({ taskName, description, dueDate});
  await newTask.save();
  res.status(201).json(newTask);
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
};

const updateTask = async (req, res) => {
  const { id: taskId } = req.params;
  const { taskName, description, dueDate} = req.body;

  const task = await Task.findByIdAndUpdate(taskId, { taskName, description, dueDate}, { new: true });
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.status(200).json(task);
};

const deleteTask = async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findById(taskId);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }
  await Task.findByIdAndDelete(taskId);
  res.status(200).json({ message: "Task deleted successfully" });
};


module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask
};
