const Koa=require('koa')
const Router=require('koa-router')
const app=new Koa()
const router=new Router()
router.get('/',(ctx)=>{
    ctx.body="acb"
})
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000,()=>{
    console.log('server is running on http://localhost:3000')
})