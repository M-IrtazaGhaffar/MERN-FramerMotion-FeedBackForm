const express = require('express')
const router = express.Router()
const { feedBack } = require('../controllers/controller.js')

router
    .post('/feedback', feedBack)

module.exports = router