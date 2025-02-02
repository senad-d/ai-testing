const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/todos', require('./routes/todoRoutes'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));