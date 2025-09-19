const express = require('express');
const { PrismaClient } = require('@prisma/client');
const authenticateJWT = require('../middlewares/auth.middleware');

const prisma = new PrismaClient();
const router = express.Router();

router.post('/create', authenticateJWT, async (req, res) => {
    const { title, description } = req.body;
    console.log(req.body);
    console.log(req.user.userId);

    if (!title) {
        return res.status(400).json({ error: "Title is required" });
    }
    try {
        const newTodo = await prisma.todo.create({
            data: {
                title,
                description,
                userId: req.user.userId,  // Ensure user is linked to the todo
            },
        });

        res.status(201).json(newTodo);
    } catch (err) {

        res.status(500).json({ error: "Failed to create Todo" });
    }
});

// router.put('/',authenticateJWT,async(req,res)=>{
//     const {title,description}=req.body;
//     try {
//         const updatedTodo=await prisma.todo.update({where:{id:}})
//     } catch (error) {
        
//     }
// })


router.get('/', authenticateJWT, async (req, res) => {

    try {
        const todos = await prisma.todo.findMany({
            where: {
                userId: req.user.userId
            }
        })
        res.json(todos);
    }
    catch (e) {
        res.status(500).json({ error: "Error in fetching the todos." })
    }
});














router.get('/', authenticateJWT, async (req, res) => {
    try {
        const todos = await prisma.todo.findMany({
            where: { userId: req.user.userId },
        });
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch todos" });
    }
});

module.exports = router;
