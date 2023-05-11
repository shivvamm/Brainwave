const userModel = require('../models/userModel')

// get all users 
exports.registerController = async (req, res) => {
    try {
        // get data 
        const{username,email,password} = req.body
        //validation
        if(!username || !email || !password){
            return res.status(400).send({
                success:true,
                message:"Please Fill all Fields"
            })
        }
        //Existing user
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(401).send({
                success:false,
                message:"User already exists"
            })
        }
        //save new user
        const user = new userModel({username,email,password});
        await user.save();
        return res.status(201).send({
            success:true,
            message:'New User Created',
            user,
        })
    } catch (error){
        console.log(error)
        return res.status(500).send({
            messgae: 'Error In Register Callback',
            success: false,
            error
        })

    }
};

//create user register user 
exports.getAllUsers = () => { };

//login 
exports.loginController = () => { };