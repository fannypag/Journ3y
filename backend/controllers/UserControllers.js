// import User from "../models/UserModels.js";
 
// export const getUsers = async (req, res) => {
//     try {
//         const users = await User.find();
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// }
 
// export const getUserById = async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         res.json(user);
//     } catch (error) {
//         res.status(404).json({message: error.message});
//     }
// }
 
// export const saveUser = async (req, res) => {
//     const user = new User(req.body);
//     try {
//         const inserteduser = await user.save();
//         res.status(201).json(inserteduser);
//     } catch (error) {
//         res.status(400).json({message: error.message});
//     }
// }
 
// export const updateUser = async (req, res) => {
//     try {
//         const updateduser = await User.updateOne({_id:req.params.id}, {$set: req.body});
//         res.status(200).json(updateduser);
//     } catch (error) {
//         res.status(400).json({message: error.message});
//     }
// }
 
// export const deleteUser = async (req, res) => {
//     try {
//         const deleteduser = await User.deleteOne({_id:req.params.id});
//         res.status(200).json(deleteduser);
//     } catch (error) {
//         res.status(400).json({message: error.message});
//     }
// }

import User from "../models/UserModels.js";

export async function registerNewUser(req, res){
    try {
        console.log(isUser);
        if (isUser.length >= 1) {
            return res.status(409).json({
                message: "email already in use"
            });
        }
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        let data = await user.save();
        const token = await user.generateAuthToken(); // here it is calling the method that we created in the model
        res.status(201).json({ data, token });
    } catch (err) {
        res.status(400).json({ err: err });
    }
};

export async function loginUser (req, res){
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findByCredentials(email, password);
        if (!user) {
            return res.status(401).json({ error: "Login failed! Check authentication credentials" });
        }
        const token = await user.generateAuthToken();
        res.status(201).json({ user, token });
        } catch (err) {
        res.status(400).json({ err: err });
      }
};

export async function getUserDetails (req, res){
    await res.json(req.userData);
};