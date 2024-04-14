const Diary = require('../models/diary')
const User = require('../models/user')

exports.createDiary = async(req, res) => {
    const {title, description, date, location} = req.body
    const userId = req.user.id
    if(!title || !description || !date || !location) {
        return res.status(500).json({
            success: false,
            message: "All fields are required",
        })
    }

    const diaryEntry = await Diary.create({
        user: userId,
        title,
        description,
        date,
        location
    })

    res.status(200).json({
        success: true,
        message: "Diary Entry Created",
        diaryEntry
    })
}

exports.readDiary = async(req, res) => {
    const userId = req.user.id
    const diaryDetails = await Diary.find({user: userId})


    if(!diaryDetails) {
        return res.status(500).json({
            success: false,
            message: "No diary created yet"
        })
    }

    res.status(200).json({
        success: true,
        message: "All diary fetched",
        diaryDetails
    })

}

exports.updateDiary = async(req, res) => {
    const userId = req.user.id
    const diaryDetails = await Diary.find({user: userId})

    if(!diaryDetails) {
        return res.status(500).json({
            success: false,
            message: "diary not found"
        })
    }

    const {title, description, date = Date.now(), location} = req.body

    const updatedDiary = {
        title,
        description,
        date,
        location
    }

    const updated_diary = await Diary.find({user: userId},{
        $set: {updatedDiary}
    })

    res.status(200).json({
        success: true,
        message: "diary updated",
        updated_diary
    })

}

exports.deleteDiary = async(req, res) => {
    const userId = req.user.id
    const userdetails = await User.findById({user: userId})
    const diaryId = userdetails._id
    
    
    const diary = await Diary.findByIdAndDelete({_id:diaryId})

    res.status(200).json({
        success: true,
        message: 'diary deleted successfully'
    })
}