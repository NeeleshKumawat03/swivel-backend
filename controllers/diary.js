const Diary = require('../models/diary')
const User = require('../models/user')

exports.createDiary = async(req, res) => {
    const {title, description, date, location} = req.body

    if(!title || !description || !date || !location) {
        return res.status(500).json({
            success: false,
            message: "All fields are required",
        })
    }

    const diaryEntry = await Diary.create({
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

    console.log(userId)
    const userdetails = await User.findById({userId})
    const diaryId = userdetails.diaryDetails

    const diarydetails = await Diary.findById({_id: diaryId})

    if(!diarydetails) {
        return res.status(500).json({
            success: false,
            message: "No diary created yet"
        })
    }

    res.status(200).json({
        success: true,
        message: "All diary fetched",
        diarydetails
    })

}

exports.updateDiary = async(req, res) => {
    const userId = req.user.id
    const userdetails = await User.findById({userId})
    const diaryId = userdetails.diaryDetails

    const diarydetails = await Diary.findById({_id: diaryId})

    if(!diarydetails) {
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

    const updated_diary = await diary.findById({userId},{
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
    const userdetails = await User.findById({_id: userId})
    const diaryId = userdetails.diaryDetails
    
    
    const diary = await Diary.findByIdAndDelete({_id:diaryId})

    res.status(200).json({
        success: true,
        message: 'diary deleted successfully'
    })
}