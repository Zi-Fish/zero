const express=require('express')
const app=express()

const cors=require('cors')
app.use(cors())

app.use(express.urlencoded({ extended: false }))



app.listen(8001,()=>{
  console.log('api server running at http://127.0.01:8001')
})