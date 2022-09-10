const router = require('express').Router()
const indexController = require('../controllers/index.controller')

router.get('/get/posts',indexController.getPosts)
router.post('/add/comment',indexController.addComment)

module.exports=router