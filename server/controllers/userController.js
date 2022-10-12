const user = require("../models/userModel.js");

//User login
exports.userLogin = (req, res) =>{
    res.json('User logged in');
}

//Sign up new user
exports.userSignup = async (req, res) =>{
    const { firstName, lastName, username, password, email, telephone, userType} = req.body;
    const newUser = new user({
        firstName, lastName, username, password, email, telephone, userType
    }); 
    try{
        await newUser.save();
        res.status(200).json(`Hi ${firstName}, You are almost there`);
    }catch(error){
        res.status(500).json(error.message);
    }
}

//Edit an existing user
exports.userEdit = async (req, res) =>{
    const username = req.params.username;
    const {firstName, lastName, password, email, telephone} = req.body;
    const newData = {
        firstName, lastName, password, email, telephone
    }
    try{
        const getUser = await user.findOne({username});
        if(getUser){
            updatedUser = await user.findOneAndUpdate(getUser.username, newData);
            if(updatedUser){
                res.json(`User details updated successfully`);
            }
        }else{
            res.json(`No user found with ${username}`)
        }
    }catch(error){
        res.json(error.message);
    }
}

exports.userDashboard = (req, res) =>{
    const username = req.params.username;
    res.json(`This is the dashboard of ${username}`);
}

exports.userBlock = (req, res) =>{
    const username = req.params.username;
    res.json(`${username} should be blocked`);
}

//Delete a single user
exports.userDelete = async (req, res) =>{
    const username = req.params.username;
    try{
        const getUser = await user.findOne({username});
        if(getUser){
            await user.deleteOne({username}).then(
                res.json(`${username} deleted successfully`)
            )
        }else{
            res.json(`No user found with ${username}`)
        }
    }catch(error){
        res.json(error.message);
    }
}

//Show all the users
exports.usersShow = async (req, res) =>{
    try{
        const allUsers = await user.find();
        const fNames = allUsers.map(user=> user.firstName)

        res.json(fNames)
    }catch(error){
        res.json(error.message);
    }
}