const Profile = require('../models/profile')
const User = require('../models/user')

exports.updateProfile = async(req, res) => {
    try {
        const {dateOfBirth="", about="", contactNumber="", gender} = req.body;
        
        const id = req.user.id;

        if(!id) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            })
        }

        const userDetails = await User.findById(id);
        const profileId = userDetails.additionalDetails;
        const profileDetails = await Profile.findById(profileId);

        profileDetails.dateOfBirth = dateOfBirth;
        profileDetails.about = about;
        profileDetails.gender = gender;
        profileDetails.contactNumber = contactNumber;

        await profileDetails.save();

        return res.status(200).json({
            success: true,
            message: 'Profile Updated Successfully',
            profileDetails
        })
    }
    catch(error) {
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
}