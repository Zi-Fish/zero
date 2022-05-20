const express=require('express')
const router=express.Router()
//挂载路由
const userinfo_handler = require('../router_handler/userinfo')

router.get('/userinfo',(req,res)=>{
  res.send('ok')
})
module.exports=router