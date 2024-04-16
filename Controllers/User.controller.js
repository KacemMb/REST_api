import User from "../Models/Useer.model.js";
import bcrypt from "bcrypt";

const hachPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}


// Create a new user
export const createUser = async (req, res) => {
    try{
        const{userName , email, password} = req.body;
        console.log(req.body)
        const hachedPassword = hachPassword(password);
        const user = new User({
            userName,
            email,
            password: hachedPassword
        });
        await user.save();
        res.status(201).send('user created successfully');
    }catch(e){
        res.status(500).send('Error while creating user');
    }
};

// Get user by id
export const getUserById = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).send('User not found');
        }
        res.send(user);
    }catch(e){
        res.status(500).send('Error while fetching user');
    }
}

// Update user by id
export const updateUserById = async (req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!user){
            return res.status(404).send('User not found');
        }
        res.send(user);
    }
    catch(e){
        res.status(500).send('Error while updating user');
    }
}

// Delete user by id
export const deleteUserById = async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).send('User not found');
        }
        res.send(user);
    }
    catch(e){
        res.status(500).send('Error while deleting user');
    }
}

//get all users
export const getAllUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.send(users);
    }
    catch(e){
        res.status(500).send('Error while fetching users');
    }
}