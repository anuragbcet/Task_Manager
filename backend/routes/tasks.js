const express = require('express');
const { PrismaClient } = require('@prisma/client');
const authenticateJWT = require('../middlewares/auth.middleware');

const prisma = new PrismaClient();
const router = express.Router();


router.post('/',(req,res)=>{
  res.send("finally from the tasks route");
})
