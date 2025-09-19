const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const todosRoutes = require('./routes/todos');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());
  

app.use('/auth', authRoutes);
app.use('/todos', todosRoutes);

app.get('/',(req,res)=>{
    res.send("hello Anurag!")
})

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));