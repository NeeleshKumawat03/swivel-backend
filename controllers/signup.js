const User = require('../models/user')
const bcrypt = require('bcrypt')
const Profile = require('../models/profile')
const Diary = require('../models/diary')

exports.signUp = async(req, res) => {
    try {
        const {
            name,
            email,
            password,
        } = req.body;
    
        if(!name || !email || !password) {
            return res.status(403).json({
                success : false,
                message: "All fields are required"
            })
        }
    
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already registered"
            })
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const profileDetails = await Profile.create({
            gender: null,
            dateOfBirth: null,
            about: null,
            contactNumber: null
        });

        const diaryDetails = await Diary.create({
            title: null,
            description: null,
            date: null,
            location: null
        });
    
        const user = await User.create({
            name,
            email, 
            password: hashedPassword,
            additionalDetails: profileDetails._id,
            diaryDetails: diaryDetails._id
        })

        return res.status(200).json({
            success: true,
            message: 'User is registered',
            user
        })
    }
    catch(error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "User cannot be registered"
        })
    }

}