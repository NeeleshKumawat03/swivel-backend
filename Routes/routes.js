const express = require("express")
const router = express.Router()

const {login} = require('../controllers/login')
const {signUp} = require('../controllers/signup')
const {updateProfile} = require('../controllers/profile')
const {createDiary, readDiary, updateDiary, deleteDiary} = require('../controllers/diary')



const {auth} = require('../middlewares/auth')


router.post('/login', login)
router.post('/signup', signUp)
router.put('/updateprofile', auth, updateProfile)
router.get('/diary', auth, readDiary)
router.post('/diarycreate', auth, createDiary)
router.put('/diaryupdate', auth, updateDiary)
router.delete('/diarydelete', auth, deleteDiary)


module.exports = router