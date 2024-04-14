const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.login = async(req, res) => {
    try {
        const {email, password} = req.body;

        if(!email || !password) {
            return res.status(403).json({
                success: false,
                message: "All fields are required, please try again"
            })
        }

        const user = await User.findOne({email}).populate("additionalDetails");
        if(!user) {
            return res.status(401).json({
                success: false,
                message: "User is not registered, please signup first"
            })
        }

        if(await bcrypt.compare(password, user.password)) {
            const payload = {
                email: user.email,
                id: user._id,
            }

            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h"
            })
            user.token = token;
            user.password = undefined;

            const options = {
                expiresIn: '2h'
            }
            res.status(200).json({
                success: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                token,
                user,
                message: 'Logged in successfully'
            })
        }
        else {
            res.status(401).json({
                success: false,
                message: "Password is incorrect"
            })
        }

    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'login failure, please try again'
        })
    }
}