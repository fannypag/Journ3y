// import express from "express";
// import { 
//     getUsers, 
//     getUserById,
//     saveUser,
//     updateUser,
//     deleteUser
// } from "../controllers/UserControllers.js";
 
// const router = express.Router();
 
// router.get('/users', getUsers);
// router.get('/users/:id', getUserById);
// router.post('/users', saveUser);
// router.patch('/users/:id', updateUser);
// router.delete('/users/:id', deleteUser);
 

import express from "express";
// const express = require("express");
import * as controller from "../controllers/UserControllers.js";
const router = express.Router();

router.post("/register", controller.registerNewUser);
router.post("/login", controller.loginUser);
router.get("/me", controller.getUserDetails);

export default router;