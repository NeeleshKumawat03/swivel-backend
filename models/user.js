const mongoose = require('mongoose')

const userSchmea = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        required: true
    },
    additionalDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile"
    },
    diaryDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Diary"
    }
})

module.exports = mongoose.model("User", userSchmea)