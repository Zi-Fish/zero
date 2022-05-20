//const status = require('express/lib/response')
//const results = require('mysql/lib/protocol/constants/client')
const db = require('../db/index')
const bcrypt=require('bcryptjs')

exports.regUser=(req,res)=>{
  const userinfo=req.body
if(!userinfo.username||!userinfo.password){
  // return res.send({status:1,message:'用户名或密码不合法'})
  return res.cc('用户名或密码不合法')
}
const sqlStr='select * from ev_users where username=?'
db.query(sqlStr,userinfo.username,(err,results)=>{
  if(err){
    // return res.send({status:1,message:err.message})
    return res.cc(err)
  }
  if(results.length>0){
    // return res.send({status:1,message:'用户名被占用，请更换用户名'})
    return res.cc('用户名被占用，请更换用户名')
  }
  //加密密码
  userinfo.password=bcrypt.hashSync(userinfo.password,10)
  const sql = 'insert into ev_users set ?'
  db.query(sql, { username: userinfo.username, password: userinfo.password }, function (err, results) {
    // 执行 SQL 语句失败
    if (err) return res.send({ status: 1, message: err.message })
    // SQL 语句执行成功，但影响行数不为 1
    if (results.affectedRows !== 1) {
      // return res.send({ status: 1, message: '注册用户失败，请稍后再试！' })
      return res.cc('注册用户失败，请稍后再试！')
    }
    // 注册成功
    res.send({ status: 0, message: '注册成功！' })
  })
  
})
}

exports.login=(req,res)=>{
  res.send('login OK')
}