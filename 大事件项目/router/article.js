// 导入 express
const express = require('express')
const router = express.Router()
const multer=require('multer')
const path=require('path')
const upload=multer({dest:path.join(__dirname,'../uploads')})
const expressJoi=require('@escook/express-joi')
const {add_article_schema}=require('../schema/article')
// 创建路由对象


// 发布新文章
router.post('/add', (req, res) => {
  // res.send('ok')
  const article_handler=require('../router_handler/article')
  router.post('/add',upload.single('cover_img'),article_handler.addArticle)
  router.post('/add',upload.single('cover_img'),expressJoi(add_article_schema),article_handler.addArticle)
})

// 向外共享路由对象
module.exports = router
