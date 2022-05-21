const express=require('express')
const router=express.Router()
const expressJoi=require('@escook/express-joi')
const{update_userinfo_schema}=require('../schema/user')
//挂载路由
const userinfo_handler=require('../router_handler/userinfo')

router.get('/userinfo',userinfo_handler.getUserInfo)
router.post('/userinfo',expressJoi(update_userinfo_schema),userinfo_handler.updateUserInfo)
module.exports=router