const express = require('express'); // Using ES6 import (if TypeScript supports it)
const cors = require('cors');
const dotenv = require('dotenv');

import taskRoutes from '../src/routes/taskroutes';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api',taskRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

