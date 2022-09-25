var http=require("http")
var url=require('url')

// console.log(req.url)
http.createServer((req,res)=>{
res.writeHead(200,{"Content-Type":"text/html;chartset=utf-8"})
  res.write("hello world111")
  var urlobj=url.parse(req.url)
  console.log(urlobj)
  var pathname=url.parse(req.url).url
  res.write(moduleRenderHTML.renderHTML(pathname))
  res.end()
}).listen(3000,()=>{
  console.log(`server start:`)
})