import express from "express";
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
 


// const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/register", userController.registerNewUser);
router.post("/login", userController.loginUser);
router.get("/me", userController.getUserDetails);

// module.exports = router;
export default router;