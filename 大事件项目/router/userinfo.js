const express=require('express')
const router=express.Router()
const expressJoi=require('@escook/express-joi')
//const{update_userinfo_schema}=require('../schema/user')
//挂载路由
const { update_avatar_schema } = require('../schema/user')

const userinfo_handler=require('../router_handler/userinfo')
const {update_userinfo_schema,update_password_schema}=require('../schema/user')
router.get('/userinfo',userinfo_handler.getUserInfo)
router.post('/userinfo',expressJoi(update_userinfo_schema),userinfo_handler.updateUserInfo)
// 重置密码的路由
router.post('/updatepwd', expressJoi(update_password_schema),userinfo_handler.updatePassword)
router.post('/update/avatar',expressJoi(update_avatar_schema),userinfo_handler.updateAvatar)

module.exports=router