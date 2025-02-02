const Todo = require('../models/Todo');

// Get all todos for authenticated user
exports.getTodos = async (req, res) => {
  const userId = req.user.id;
  try {
    const todos = await Todo.find({ user: userId });
    res.send(todos);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Create new todo
exports.createTodo = async (req, res) => {
  const userId = req.user.id;
  const { title, description } = req.body;
  try {
    const newTodo = new Todo({
      user: userId,
      title,
      description
    });
    await newTodo.save();
    res.status(201).send(newTodo);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Update todo
exports.updateTodo = async (req, res) => {
  const todoId = req.params.id;
  const updates = req.body;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(todoId, updates, { new: true });
    if (!updatedTodo) {
      return res.status(404).send({ error: 'Todo not found' });
    }
    res.send(updatedTodo);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Delete todo
exports.deleteTodo = async (req, res) => {
  const todoId = req.params.id;
  try {
    const deletedTodo = await Todo.findByIdAndRemove(todoId);
    if (!deletedTodo) {
      return res.status(404).send({ error: 'Todo not found' });
    }
    res.send({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};