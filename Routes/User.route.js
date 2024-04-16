import express from 'express';
import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from "../Controllers/User.controller.js";


const router = express.Router();

router.post('/signup', createUser);
router.get('/getUserById/:id', getUserById);
router.get('/getAllUsers', getAllUsers);
router.patch('/updateUserById/:id', updateUserById)
router.delete('/deleteUserById/:id', deleteUserById);


export default router;