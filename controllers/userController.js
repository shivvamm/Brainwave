const userModel = require('../models/userModel')
const bcrypt = require('bcrypt');


// create user register user  
exports.registerController = async (req, res) => {
    try {
        // get data 
        const { username, email, password } = req.body;
        //validation
        if (!username || !email || !password) {
            return res.status(400).send({
                success: false,
                message: "Please Fill all Fields"
            })
        }
        //Existing user
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.status(401).send({
                success: false,
                message: "User already exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        //save new user
        const user = new userModel({ username, email, password: hashedPassword });
        await user.save();
        return res.status(201).send({
            success: true,
            message: 'New User Created',
            user,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            messgae: 'Error In Register Callback',
            success: false,
            error
        })

    }
};

//create user register user 
exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({});
        return res.status(200).send({
            userCount: users.length,
            success: true,
            message: "All users data",
            users,
        });
    }
    catch (error) {
        console.log(error)
        return res.status(500).send({
            messgae: 'Error In Get all users',
            error,
        });

    }
};

//login 
exports.loginController =async (req,res) => {
    try{
        const {email , password} = req.body;
        //validation
        if(!email || ! !password){
            return res.status(401).send({
                success:false,
                message:"Please check the email or password"
            });
        }
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(200).sendd({
                success:false,
                message:'Email is not Registerd'
            });
        }

            //password
            const isMatch = await bcrypt.compare(password,user.password)
            if(!isMatch){
                return res.status(401).send({
                    success:false,
                    message:"Invalid Username or Password"
                });
            }
    return res.status(200).send({
        succes:true,
        message:"Login successfully",
        user,
    });      
    }catch(error){
return res.status(500).send({
    success:false,
    message:"Error In Login CallBack",
    error,
});
    }
 };