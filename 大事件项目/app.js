const express=require('express')
const app=express()

const cors=require('cors')
const joi=require('joi')
app.use(cors())

app.use(express.urlencoded({ extended: false }))

// 响应数据的中间件
app.use(function (req, res, next) {
  // status = 0 为成功； status = 1 为失败； 默认将 status 的值设置为 1，方便处理失败的情况
  res.cc = function (err, status = 1) {
    res.send({
      // 状态
      status,
      // 状态描述，判断 err 是 错误对象 还是 字符串
      message: err instanceof Error ? err.message : err,
    })
  }
  next()
})

// 解析 token 的中间件
const expressJWT = require('express-jwt')
const config = require('./config')
// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] }))

//导入并使用用户路由模块
const userRouter=require('./router/user')
// const res = require('express/lib/response')
app.use('/api',userRouter);
//导入并使用用户信息的路由模块
const userinfoRouter=require('./router/userinfo')
app.use('/my',userRouter)

app.use((err, req, res, next)=>{
  if(err instanceof joi.ValidationError) return res.cc(err)
  if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
  res.cc(err)
})

app.listen(8001,()=>{
  console.log('api server running at http://127.0.01:8001')
})