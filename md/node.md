####  终端中快捷键

1.tab 能够快速补全路径

2.esc 能够快速清空当前已输入的命令

3.cls命令 可以清空终端

#### fs文件系统模块

##### 导入fs文件模块

`const fs=require('fs')`

1.fs.readFile()方法，用来读取指定文件中的内容

`fs.readFile(path[,option],callback) `

path参数：必选参数，字符串，表示文件路径

option:可选参数，表示什么编码格式来读取文件

callback：必选参数，文件读取完成后，通过回调函数拿到读取的结果

```js
// 1. 导入 fs 模块，来操作文件

const fs = require('fs')

// 2. 调用 fs.readFile() 方法读取文件

//   参数1：读取文件的存放路径

//   参数2：读取文件时候采用的编码格式，一般默认指定 utf8

//   参数3：回调函数，拿到读取失败和成功的结果  err  dataStr

fs.readFile('./files/11.txt', 'utf8', function(err, dataStr) {

 // 2.1 打印失败的结果

 // 如果读取成功，则 err 的值为 null

 // 如果读取失败，则 err 的值为 错误对象，dataStr 的值为 undefined

 console.log(err)

 console.log('-------')

 // 2.2 打印成功的结果

 console.log(dataStr)

}) 
```

2.fs.writeFile()方法，用来向指定的文件中写入内容，只能用来创建那文件我=，不能创建路径

调用 fs.writeFile() 方法，写入文件的内容,重复写入同一个文件，新写的内容会覆盖旧内容

没有文件将会创建该文件

参数1：表示文件的存放路径
参数2：表示要写入的内容
参数3：回调函数

```js
const fs = require('fs')
fs.writeFile('./3.txt', 'ok123', function(err) {
    // 2.1 如果文件写入成功，则 err 的值等于 null
    // 2.2 如果文件写入失败，则 err 的值等于一个 错误对象
    // console.log(err)
    if (err) {
        return console.log('文件写入失败！' + err.message)
    }
    console.log('文件写入成功！')
})
```

##### 整理成绩案例

```javascript
// 1. 导入 fs 模块
const fs = require('fs')

// 2. 调用 fs.readFile() 读取文件的内容
fs.readFile('./txt/成绩.txt', 'utf8', function(err, dataStr) {
    // 3. 判断是否读取成功
    if (err) {
        return console.log('读取文件失败！' + err.message)
    }
    // console.log('读取文件成功！' + dataStr)

    // 4.1 先把成绩的数据，按照空格进行分割
    const arrOld = dataStr.split(' ')
        // 4.2 循环分割后的数组，对每一项数据，进行字符串的替换操作
    const arrNew = []
    arrOld.forEach(item => {
            arrNew.push(item.replace('=', '：'))
        })
        // 4.3 把新数组中的每一项，进行合并，得到一个新的字符串
    const newStr = arrNew.join('\r\n')

    // 5. 调用 fs.writeFile() 方法，把处理完毕的成绩，写入到新文件中
    fs.writeFile('./txt/成绩-ok.txt', newStr, function(err) {
        if (err) {
            return console.log('写入文件失败！' + err.message)
        }
        console.log('成绩写入成功！')
    })
})
```

##### 文件路径拼接问题

1.出现路径拼接错误的问题，是因为提供了 ./ 或 ../ 开头的相对路径

2.如果要解决这个问题，可以直接提供一个完整的文件存放路径（绝对路径）就行

```javascript
const fs = require('fs')
// __dirname 表示当前文件所处的目录,不会随着执行命令的目录而变化
// console.log(__dirname)
// 既不会出现路径拼接问题，又保证了移植性
fs.readFile(__dirname + '/txt/1.txt', 'utf8', function(err, dataStr) {

  if (err) {

​    return console.log('读取文件失败！' + err.message)

  }

  console.log('读取文件成功！' + dataStr)

})
```

#### path路径模块

path.join() 用来将多个路径片段拼接成一个完整的字符串

```javascript
const path = require('path')
```

```js
const path = require('path')
fs.readFile(__dirname + '/txt/1.txt', 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('读取文件失败！' + err.message)
    }
    console.log('读取文件成功！' + dataStr)
})
```

path.basename() 用来从路径字符串中，将文件名解析出来

```javascript
const path = require('path')

// 定义文件的存放路径
const fpath = '/a/b/c/index.html'

// const fullName = path.basename(fpath)
// console.log(fullName)

const nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt)
```

path.extname() 获取文件拓展名

```js
const path = require('path')

// 这是文件的存放路径
const fpath = '/txt/1.txt'

const fext = path.extname(fpath)
console.log(fext)
```

##### 综合时钟案例

html

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>index首页</title>
  <link rel="stylesheet" href="./index.css" />
</head>

<body>
  <div class="box">
    <div id="HH">00</div>
    <div>:</div>
    <div id="mm">00</div>
    <div>:</div>
    <div id="ss">00</div>
  </div>

  <script src="./index.js"></script>
</body>

</html>
```

css

```css

    html,
    body {
      margin: 0;
      padding: 0;
      height: 100%;
      background-image: linear-gradient(to bottom right, red, gold);
    }

    .box {
      width: 400px;
      height: 250px;
      background-color: rgba(255, 255, 255, 0.6);
      border-radius: 6px;
      position: absolute;
      left: 50%;
      top: 40%;
      transform: translate(-50%, -50%);
      box-shadow: 1px 1px 10px #fff;
      text-shadow: 0px 1px 30px white;

      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 70px;
      user-select: none;
      padding: 0 20px;

      /* 盒子投影 */
      -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0%, transparent), to(rgba(250, 250, 250, .2)));
    }
```

js

```js
    window.onload = function () {
      // 定时器，每隔 1 秒执行 1 次
      setInterval(() => {
        var dt = new Date()
        var HH = dt.getHours()
        var mm = dt.getMinutes()
        var ss = dt.getSeconds()

        // 为页面上的元素赋值
        document.querySelector('#HH').innerHTML = padZero(HH)
        document.querySelector('#mm').innerHTML = padZero(mm)
        document.querySelector('#ss').innerHTML = padZero(ss)
      }, 1000)
    }

    // 补零函数
    function padZero(n) {
      return n > 9 ? n : '0' + n
    }
```

```js
// 1.1 导入 fs 模块
const fs = require('fs')
// 1.2 导入 path 模块
const path = require('path')

// 1.3 定义正则表达式，分别匹配 <style></style> 和 <script></script> 标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 2.1 调用 fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname, '../素材/index.html'), 'utf8', function(err, dataStr) {
  // 2.2 读取 HTML 文件失败
  if (err) return console.log('读取HTML文件失败！' + err.message)
  // 2.3 读取文件成功后，调用对应的三个方法，分别拆解出 css, js, html 文件
  resolveCSS(dataStr)
  resolveJS(dataStr)
  resolveHTML(dataStr)
})

// 3.1 定义处理 css 样式的方法
function resolveCSS(htmlStr) {
  // 3.2 使用正则提取需要的内容
  const r1 = regStyle.exec(htmlStr)
  // 3.3 将提取出来的样式字符串，进行字符串的 replace 替换操作
  const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
  // 3.4 调用 fs.writeFile() 方法，将提取的样式，写入到 clock 目录中 index.css 的文件里面
  fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function(err) {
    if (err) return console.log('写入 CSS 样式失败！' + err.message)
    console.log('写入样式文件成功！')
  })
}

// 4.1 定义处理 js 脚本的方法
function resolveJS(htmlStr) {
  // 4.2 通过正则，提取对应的 <script></script> 标签内容
  const r2 = regScript.exec(htmlStr)
  // 4.3 将提取出来的内容，做进一步的处理
  const newJS = r2[0].replace('<script>', '').replace('</script>', '')
  // 4.4 将处理的结果，写入到 clock 目录中的 index.js 文件里面
  fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function(err) {
    if (err) return console.log('写入 JavaScript 脚本失败！' + err.message)
    console.log('写入 JS 脚本成功！')
  })
}

// 5.1 定义处理 HTML 结构的方法
function resolveHTML(htmlStr) {
  // 5.2 将字符串调用 replace 方法，把内嵌的 style 和 script 标签，替换为外联的 link 和 script 标签
  const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')
  // 5.3 写入 index.html 这个文件
  fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function(err) {
    if (err) return console.log('写入 HTML 文件失败！' + err.message)
    console.log('写入 HTML 页面成功！')
  })
}

```

#### http模块

http模块是用来创建web服务器的模块，通过http模块提供的http:createServer()方法，就可以把一台普通的电脑变成一台web服务器

##### 导入http模块

```js
const http=require('http')
```

ip与域名是一对多的关系，一个IP可以有多个域名，但是一个域名只能有一个IP。

##### 端口号

1.每个端口号不能同时把多个web服务占用，每个web服务都对应一个唯一的端口号

2.url的80端口可以被省略

##### 创建web服务器

1.导入http模块

2.创建web服务器实例

```js
const server=http.createServer()
```



3.为服务器实例绑定request事件，监听客户端的需求

```js
server.on('request', (req, res) => {
    // req.url 是客户端请求的 URL 地址
    const url = req.url
        // req.method 是客户端请求的 method 类型
    const method = req.method
    const str = `Your request url is ${url}, and request method is ${method}`
    console.log(str)
        // 调用 res.end() 方法，向客户端响应一些内容
    res.end(str)
        // send(str);
})
```



4.启动服务器

```js
server.listen(8001, () => {

  console.log('server running at http://127.0.0.1')

})
```

##### 防止中文乱码

```js
res.setHeader('Content-Type', 'text/html; charset=utf-8')
```

##### clock时钟案例

```js
// 1.1 导入 http 模块
const http = require('http')
    // 1.2 导入 fs 模块
const fs = require('fs')
    // 1.3 导入 path 模块
const path = require('path')

// 2.1 创建 web 服务器
const server = http.createServer()
    // 2.2 监听 web 服务器的 request 事件
server.on('request', (req, res) => {
        // 3.1 获取到客户端请求的 URL 地址
        //     /clock/index.html
        //     /clock/index.css
        //     /clock/index.js
        const url = req.url
            // 3.2 把请求的 URL 地址映射为具体文件的存放路径,拼接地址
            // const fpath = path.join(__dirname, url)
            // 5.1 预定义一个空白的文件存放路径
        let fpath = ''
        if (url === '/') {
            fpath = path.join(__dirname, './时钟案例/index.html')
        } else {
            //     /index.html
            //     /index.css
            //     /index.js
            fpath = path.join(__dirname, '/时钟案例', url)
        }

        // 4.1 根据“映射”过来的文件路径读取文件的内容
        fs.readFile(fpath, 'utf8', (err, dataStr) => {
            // 4.2 读取失败，向客户端响应固定的“错误消息”
            if (err) return res.end('404 Not found.')
                // 4.3 读取成功，将读取成功的内容，响应给客户端
            res.end(dataStr)
        })
    })
    // 2.3 启动服务器
server.listen(8001, () => {
    console.log('server running at http://127.0.0.1')
})
```

#### 模块化

编程领域的模块化，就是遵守固定的规则，把一个大文件，拆成独立并且相互依赖的多个小模块

好处：

1.提高了代码的复用性

2.提高了代码的可维护性

3.可以实现按需加载

##### 加载模块

模块分类

1.内置模块(内置模块是由node.js官方提供的，例如fs,path,http)

```js
const fs=require('fs')
//加载内置的fs模块
```

2.自定义模块(用户创建的每个js文件)

```js
//加载用户自定义模块 需要提供路径
const custom=require('/custom.js')
```

3.第三方模块（由第三方开发的模块，使用前需要下载）

```js
//加载第三方模块 提前下载
const moment=require('moment')
```

##### 模块作用域

1.防止全局变量污染

2.在模块里定义的成员，无法被外部所访问

module对象

里面存储了和当前模块有关的信息

module.exports对象

1.在自定义模块中，可以使用module.exports对象，将模块内的成员共享出去，供外界使用。

2.外界用require()方法导入自定义模块时，得到的就module.exports所指向的对象

3.注意，使用require()方法导入模块时，导入的结果，永远以module.exports指向的对象为准

``` js
// 在一个自定义模块中，默认情况下， module.exports = {} 为空对象

const age = 20

// 向 module.exports 对象上挂载 username 属性
module.exports.username = 'zs'
    // 向 module.exports 对象上挂载 sayHello 方法
module.exports.sayHello = function() {
    console.log('Hello!')
}
module.exports.age = age

 // 让 module.exports 指向一个全新的对象，旧对象就已经无法获取
 module.exports = {
     nickname: '小黑',
     sayHi() {
         console.log('Hi!')
     }
 }
```

export对象

默认情况下，exports和module.exports指向同一个对象，最终，向外共享的结果，永远都是 module.exports 所指向的对象

为了防止混乱，建议不要再同一个模块中同时使用exports和module.exports

```js
// console.log(exports)
// console.log(module.exports)

// console.log(exports === module.exports)

const username = 'zs'

module.exports.username = username
exports.age = 20
exports.sayHello = function() {
  console.log('大家好！')
}
```

##### node.js的模块化规范

遵循CommonJS模块化规范

1.每个模块内部，module变量代表当前模块

2.module变量是一个对象，他的exports属性，(即module.exports)是对外的接口

3.加载每个模块，其实是加载该模块的module.exports属性，require()方法用于加载模块

#### 包

##### 安装包的命令

```js
npm install moment//包的完整名称 同时安装多个包 名称之间加空格
npm i moment
npm i moment@2.22.2//下载指定版本的包，无需卸载原本的包
//版本号 第一位：大版本 第二位：功能版本 第三位：bug修复版本
//前面版本号更新，后面归零
```

初次安装包，在项目文件夹下多了一个node_mmodules的文件夹(存放所有一安装到项目中的包)和package-lock.json（记录node_modules目录下的每一个包的下载信息）的配置文件（不要去修改）

##### 导入包

```js
// 1. 导入需要的包
// 注意：导入的名称，就是装包时候的名称,保持一致
const moment = require('moment')

const dt = moment().format('YYYY-MM-DD HH:mm:ss')
console.log(dt)
```

在项目开发中，要把node_modules文件夹添加到.gitgnore忽略文件中

##### 快速创建package.json

```js
npm init -y
```

dependencies节点

package.json文件种，有一个dependencies节点，专门用来记录使用npm install命令安装了哪些包

npm install 一次性安装所有依赖包

npm uninstall 卸载指定包（无简写）

如果某些包只在开发阶段会用到，在项目上线之后不会用到，则家就难以把这些包记录到devDeoendencies

```js
//安装指定包，并记录devDependencies 节点中
npm i moment  -D
//npm install moment --save-dev
```

1.查看当前的下包镜像源

```js
npm config get registry
```

2.镜像源切换为淘宝镜像服务器

```js
npm config set registry http://registry.npm.taobao.org/
```

```js
npm i nrm -g//安装nrm小工具
nrm ls//查看所有可用的镜像源
nrm use tabao//切换为淘宝镜像源
```

##### 包的分类

1.项目包：那些被node_modules目录中的包，都是项目包

​	（1）开发依赖包：devDependencies,只在开发期间会用到

```js
npm i 包名 -D
```

​	（2）核心依赖包：dependencies,在开发期间和项目上线都会用到

```js
npm i 包名
```

2.全局包：在执行npm install命令时，如果提供了-g参数，则会把包安装为全局包，安装到c:\user\用户目录\appdata\roaming\npm\node_modules

//参考官方说明

```js
npm i 包名 -g//全局安装指定的包
npm uninstall 包名 -g//卸载全局安装的包
npm install -g i5ting_toc
//md转html
i5ting_toc -f 要转换的文件路径 -o
```

一个规范的包的组成结构

1.包必须以单独的目录存在

2.包的顶级目录要必须包含package.json

3.package.json中必须包含name,version,main这三个属性，分别代表包的名字，版本号，包的入口

#### 开发属于自己的包

主文件夹（根目录）下：

package.json(包管理配置文件)

index.js(包的入口文件)

README.md(包的说明文档)

​	最后需要进行模块化拆分。

```js
//package.json
{
  "name": "zerolisl",//名称具有唯一性
  "version": "1.1.0",
  "main": "zerolisl.js",//入口文件
  "description": "提供了格式化时间、HTMLEscape相关的功能",
  "keywords": [
    "itheima",
    "dateFormat",
    "escape"
  ],//搜索用的关键字，可自定义
  "license": "ISC"//开源协议
}
```

```js
// 定义转义 HTML 字符的函数
function htmlEscape(htmlstr) {
  return htmlstr.replace(/<|>|"|&/g, match => {
    switch (match) {
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '"':
        return '&quot;'
      case '&':
        return '&amp;'
    }
  })
}

// 定义还原 HTML 字符串的函数
function htmlUnEscape(str) {
  return str.replace(/&lt;|&gt;|&quot;|&amp;/g, match => {
    switch (match) {
      case '&lt;':
        return '<'
      case '&gt;':
        return '>'
      case '&quot;':
        return '"'
      case '&amp;':
        return '&'
    }
  })
}

module.exports = {//把两个函数暴露出去
  htmlEscape,
  htmlUnEscape
}
```

```js
// 这是包的入口文件
//导入相应的模块
const date = require('./src/dateFormat')
const escape = require('./src/htmlEscape')

// 向外暴露需要的成员
module.exports = {
  ...date,
  ...escape
}
```

readme.md

````markdown
## 安装
```
npm install itheima-tools
```

## 导入
```js
const itheima = require('itheima-tools')
```

## 格式化时间
```js
// 调用 dateFormat 对时间进行格式化
const dtStr = itheima.dateFormat(new Date())
// 结果  2020-04-03 17:20:58
console.log(dtStr)
```

## 转义 HTML 中的特殊字符
```js
// 带转换的 HTML 字符串
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
// 调用 htmlEscape 方法进行转换
const str = itheima.htmlEscape(htmlStr)
// 转换的结果 &lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(str)
```

## 还原 HTML 中的特殊字符
```js
// 待还原的 HTML 字符串
const str2 = itheima.htmlUnEscape(str)
// 输出的结果 <h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>
console.log(str2)
```

## 开源协议
ISC
````



##### 发布npm包

1.用终端使用npm login命令，依次输入用户名，密码，邮箱后，即可登录。

ps:运行命令之前，下包源切换为官方源

2.把终端切换到包的根目录之后，运行npm publish 

##### 删除已发布的包

```js
npm unpublish 包名 --force
```

1.72小时之内可以删

2.删除后24小时不能再上传

3.尽量不发布无意义的包

#### 模块的加载机制

模块在第一次加载后会被缓存，这也意味着多次调用require()不会导致模块的代码被执行多次，无论哪种模块，他们都会有限从缓存中加载，从中提高模块的加载效率

##### 内置模块的加载机制

内置模块的加载优先级最高

（比如和自定义模块，第三方模块重名，也只会执行内置模块）

##### 自定义模块的加载机制

使用require()加载自定义模块时，必须指定./或../开头的路径标识符，否则会被当作内置模块或第三方模块进行加载，加载失败

同时，在使用require0导入自定义模块时，如果省略了文件的扩展名，则Nodejs会按顺序分别尝试加仅以下的文件:

①按照确切的文件名进行加载

②补全js扩展名进行加载

③补全json扩展名进行加载

④补全.node扩展名进行加载

⑤加载失败，终端报错

##### 第三方模块的加载机制

如果传递给require0的模块标识符不是一个内置模块,没有以‘./’和'../'开头， 则Node.js 会从当前模块的父目录开始，尝试从/node modules文件夹中加载第三方模块。

如果没有找到对应的第三方模块，则移动到再上一层父目录中，进行加载，直到文件系统的根目录。

##### 目录作为模块

当把目录作为模块标识符，传递给require()进行加仅们的时候，有三种加载方式:

①在被加载的目录下直找个叫做packagejson的文件，并寻找main属性，作为rquire（）加载的入口

②如果目录里没有package.json文件，或者main入口不存在或无法解析，则Node,js将会试图加我目录下的indexjs文件。

③如果以上两步都失败了，则Node.js会在终端打印错误消息，报告模块的缺失: Error: Cannot find module 'xox'

#### Express

express的作用和node.js内置的http模块类似，是专门用来创建web服务器的(第三方的包)

使用express，我们可以方便，快速的创建web网站的服务器和api接口的服务器

```js
// 1. 导入 express
const express = require('express')
// 2. 创建 web 服务器
const app = express()
```

监听客户端的get和post请求

```js
app.post('请求url',function(req,res){/*处理函数*/})
app.get('请求url',function(req,res){/*处理函数*/})
```

// 调用 express 提供的 res.send() 方法，向客户端响应一个文本字符串

//即可响应一个对象，也可以响应一个文本

```js
 res.send('请求成功')
```

```js
app.get('/', (req, res) => {
  // 通过 req.query 可以获取到客户端发送过来的 查询参数
  // 注意：默认情况下，req.query 是一个空对象
  console.log(req.query)
  res.send(req.query)
})
// 注意：这里的 :id 是一个动态的参数
app.get('/user/:ids/:username', (req, res) => {
  // req.params 是动态匹配到的 URL 参数，默认也是一个空对象
  console.log(req.params)
  res.send(req.params)
})
```

##### express.static

调用 express.static() 方法，快速的对外提供静态资源

```js
app.use(express.static('public'))
```

express在指定的静态目录中查找文件，并对外提供资源的访问路径。因此，存放静态文件的目录名不会出现在url中

```js
const express = require('express')
const app = express()

// 在这里，调用 express.static() 方法，快速的对外提供静态资源
//如果托管多个静态资源目录，请多次调用express.static()函数
app.use('/files', express.static('./files'))
app.use(express.static('./txt'))

//app.use(express.static('./files'))
//app.use(express.static('./txt'))//同名的文件，按照写的顺序查找，谁先被查找到，返回那个

app.listen(8001, () => {
  console.log('express server running at http://127.0.0.1')
})
```

##### 挂载路径前缀

```js
app.use('/files', express.static('./files'))
```

##### nodemon

这个小工具，能够监听项目文件的变动，当代码被修改后，nodemon会自动重启项目

使用：将node命令替换为nodemon命令

#### 路由

##### express中的路由

在express中，路由是指客户端的请求与服务器处理函数之间的映射关系，express中的路由分为三部分，分别是请求的类型，请求的url地址，处理函数

```js
app.METHDD(PATH,HANDLER)
```

路由匹配

1.按照定义的先后顺序进行匹配

2.请求类型和请求的url同时匹配成功，才会调用相应的处理函数

```js
const express = require('express')
const app = express()

// 挂载路由
app.get('/', (req, res) => {
  res.send('hello world.')
})
app.post('/', (req, res) => {
  res.send('Post Request.')
})

app.listen(8001, () => {
  console.log('http://127.0.0.1')
})
```

##### 模块化路由

1.创建路由模块对应的js文件

2.调用express.Router()函数创建路由对象

3.向路由对象挂载具体的路由

4.使用module.exports向外共享路由对象

5.使用app.use()函数注册路由模块

router模块

```js
// 这是路由模块
// 1. 导入 express
const express = require('express')
// 2. 创建路由对象
const router = express.Router()

// 3. 挂载具体的路由
router.get('/user/list', (req, res) => {
  res.send('Get user list.')
})
router.post('/user/add', (req, res) => {
  res.send('Add new user.')
})

// 4. 向外导出路由对象
module.exports = router
```

模块化路由

```js
const express = require('express')
const app = express()

// app.use('/files', express.static('./files'))

// 1. 导入路由模块
const router = require('./39.router')
// 2. 注册路由模块
//加了个访问前缀
app.use('/api', router)

// 注意： app.use() 函数的作用，就是来注册全局中间件

app.listen(8001, () => {
  console.log('http://127.0.0.1')
})
```

##### express中间件

必须要有输入输出，上一级的输出是下一级的输入

当一个请求到达express服务器时，可以连续调用多个中间件，从而对这次请求进行预处理，由路由进行最终处理，进行响应

express中间件，本质上就是一个function处理函数，express中间件的格式：

```js
app.get('/',,function(req,res,next){
    next();
})
```

中间件函数形参列表中，必须包含next函数，而路由器函数只包含req和res参数

作用

next函数是实现多个中间件连续调用的关键，他表示把流转关系转交给下一个中间件或者路由

```js
// // 定义一个最简单的中间件函数
// const mw = function (req, res, next) {
//   console.log('这是最简单的中间件函数')
//   // 把流转关系，转交给下一个中间件或路由
//   next()
// }

// // 将 mw 注册为全局生效的中间件
// app.use(mw)
```



全局中间件：客户端发起的任何请求，到达服务器之后，都会触发的中间件

通过调用app.use(中间件函数)，即可定义一个全局生效的中间件

```js
// 这是定义全局中间件的简化形式
app.use((req, res, next) => {
  console.log('这是最简单的中间件函数')
  next()
})

app.get('/', (req, res) => {
  console.log('调用了 / 这个路由')
  res.send('Home page.')
})
app.get('/user', (req, res) => {
  console.log('调用了 /user 这个路由')
  res.send('User page.')
})
```

中间件的作用

多个中间件之间，共享同一份req和res,基于这样的特性。可以为req和res对象添加自定义的属性或方法，供下游的中间件或路由进行使用

```js
const express = require('express')
const app = express()

// 这是定义全局中间件的简化形式
app.use((req, res, next) => {
  // 获取到请求到达服务器的时间
  const time = Date.now()
  // 为 req 对象，挂载自定义属性，从而把时间共享给后面的所有路由
  req.startTime = time
  next()
})

app.get('/', (req, res) => {
  res.send('Home page.' + req.startTime)
})
app.get('/user', (req, res) => {
  res.send('User page.' + req.startTime)
})

app.listen(8001, () => {
  console.log('http://127.0.0.1')
})
```

定义多个全局中间件

```js
const express = require('express')
const app = express()

// 定义第一个全局中间件
app.use((req, res, next) => {
  console.log('调用了第1个全局中间件')
  next()
})
// 定义第二个全局中间件
app.use((req, res, next) => {
  console.log('调用了第2个全局中间件')
  next()
})

// 定义一个路由
app.get('/user', (req, res) => {
  res.send('User page.')
})

app.listen(8001, () => {
  console.log('http://127.0.0.1')
})
```

局部生效的中间件

不使用app.use()定义的中间件，叫做局部生效的中间件

```js
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 1. 定义中间件函数
const mw1 = (req, res, next) => {
  console.log('调用了局部生效的中间件')
  next()
}

// 2. 创建路由,调用中间件 
app.get('/', mw1, (req, res) => {
  res.send('Home page.')
})
app.get('/user', (req, res) => {
  res.send('User page.')
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8001, function () {
  console.log('Express server running at http://127.0.0.1')
})
```

定义调用多个局部生效的中间件

```js
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 1. 定义中间件函数
const mw1 = (req, res, next) => {
  console.log('调用了第一个局部生效的中间件')
  next()
}

const mw2 = (req, res, next) => {
  console.log('调用了第二个局部生效的中间件')
  next()
}

// 2. 创建路由
//app.get('/', mw1, mw2, (req, res) => {
//  res.send('Home page.')
//})按顺序和数组形式都可以
app.get('/', [mw1, mw2], (req, res) => {
  res.send('Home page.')
})
app.get('/user', (req, res) => {
  res.send('User page.')
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8001, function () {
  console.log('Express server running at http://127.0.0.1')
})
```

中间件注意事项

①一定要在路由之前注册中间件

②客户端发送过来的请求，可以连续调用多个中间件进行处理

③执行完中间件的业务代码之后，不要忘记调用next()函数

④为了防止代码逻辑混乱，调用next()函数后不要再写额外的代码

⑤连续调用多个中间件时，多个中间件之间，共享req和res对象

##### 中间件的分类

1.应用级别的中间件：通过绑定的app实例上的中间件，叫做应用级别的中间件，例如app.use

2.路由级别的中间件：绑定到express.router()实例上的中间件

3.错误级别的中间件：专门来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题 四个形参（err,req,res,next）

```js
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 1. 定义路由
app.get('/', (req, res) => {
  // 1.1 人为的制造错误
  throw new Error('服务器内部发生了错误！')
  res.send('Home page.')
})

// 2. 定义错误级别的中间件，捕获整个项目的异常错误，从而防止程序的崩溃,放在所有路由之后
app.use((err, req, res, next) => {
  console.log('发生了错误！' + err.message)
  res.send('Error：' + err.message)
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8001, function () {
  console.log('Express server running at http://127.0.0.1')
})
```



4.express 内置的中间件

​	1.express.static()快速托管静态资源的内置中间件

​	2.express.json()解析json格式的请求体数据

```js
app.use(express.json())
```

​	3.express.urlencode解析url-encode格式的请求体数据

```js
app.use(express.urlencode({extend:false}))
```

```js
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 注意：除了错误级别的中间件，其他的中间件，必须在路由之前进行配置
// 通过 express.json() 这个中间件，解析表单中的 JSON 格式的数据
app.use(express.json())
// 通过 express.urlencoded() 这个中间件，来解析 表单中的 url-encoded 格式的数据
app.use(express.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
  // 在服务器，可以使用 req.body 这个属性，来接收客户端发送过来的请求体数据
  // 默认情况下，如果不配置解析表单数据的中间件，则 req.body 默认等于 undefined
  console.log(req.body)
  res.send('ok')
})

app.post('/book', (req, res) => {
  // 在服务器端，可以通过 req,body 来获取 JSON 格式的表单数据和 url-encoded 格式的数据
  console.log(req.body)
  res.send('ok')
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8001, function () {
  console.log('Express server running at http://127.0.0.1')
})
```



5.第三方中间件

body-parser中间件,内置的express.json中间件，就是基于这个进一步分装出来的

```js
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 1. 导入解析表单数据的中间件 body-parser
const parser = require('body-parser')
// 2. 使用 app.use() 注册中间件
app.use(parser.urlencoded({ extended: false }))
// app.use(express.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
  // 如果没有配置任何解析表单数据的中间件，则 req.body 默认等于 undefined
  console.log(req.body)
  res.send('ok')
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8001, function () {
  console.log('Express server running at http://127.0.0.1')
})
```

##### 自定义中间件

```js
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()
// 导入 Node.js 内置的 querystring 模块,专门用来查询字符串，通过这个模块提供的parse()函数，可以轻松把查询字符串，解析成对象的格式
const qs = require('querystring')

// 这是解析表单数据的中间件
app.use((req, res, next) => {
  // 定义中间件具体的业务逻辑
  // 1. 定义一个 str 字符串，专门用来存储客户端发送过来的请求体数据
  let str = ''
  // 2. 监听 req 的 data 事件
  req.on('data', (chunk) => {
    str += chunk
  })
  // 3. 监听 req 的 end 事件
  req.on('end', () => {
    // 在 str 中存放的是完整的请求体数据
    // console.log(str)
    // TODO: 把字符串格式的请求体数据，解析成对象格式
      
    const body = qs.parse(str)
    
    req.body = body
    next()
  })
})

app.post('/user', (req, res) => {
  res.send(req.body)
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8001, function () {
  console.log('Express server running at http://127.0.0.1')
})
```

##### 自定义中间件模块化拆分

模块化拆分

```js
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 1. 导入自己封装的中间件模块
const customBodyParser = require('./50.custom-body-parser')
// 2. 将自定义的中间件函数，注册为全局可用的中间件
app.use(customBodyParser)

app.post('/user', (req, res) => {
  res.send(req.body)
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8001, function () {
  console.log('Express server running at http://127.0.0.1')
})
```

模块

```js
// 导入 Node.js 内置的 querystring 模块
const qs = require('querystring')

const bodyParser = (req, res, next) => {
  // 定义中间件具体的业务逻辑
  // 1. 定义一个 str 字符串，专门用来存储客户端发送过来的请求体数据
  let str = ''
  // 2. 监听 req 的 data 事件
  req.on('data', (chunk) => {
    str += chunk
  })
  // 3. 监听 req 的 end 事件
  req.on('end', () => {
    // 在 str 中存放的是完整的请求体数据
    // console.log(str)
    // TODO: 把字符串格式的请求体数据，解析成对象格式
    const body = qs.parse(str)
    req.body = body
    next()
  })
}

module.exports = bodyParser//向外暴露
```

##### get接口

```js
router.get('/get', (req, res) => {
  // 通过 req.query 获取客户端通过查询字符串，发送到服务器的数据
  const query = req.query
  // 调用 res.send() 方法，向客户端响应处理的结果
  res.send({
    status: 0, // 0 表示处理成功，1 表示处理失败
    msg: 'GET 请求成功！', // 状态的描述
    data: query, // 需要响应给客户端的数据
  })
})
```

##### 跨域问题

使用cors中间件解决跨域问题（有兼容性问题）

1.npm i cors 安装中间件

2.使用const cors=require('cors') 导入中间件

3.在路由之前调用app.use(cors())配置中间件

cors响应头

响应头可以携带一个Access-Control-Allow-Origin字段

```js
Access-Control-Allow-Origin:<origin> | *
```

```js
res.setHeader('Access-Control-Allow-Origin','http://zerolisl.cn')//特定域访问
res.setHeader('Access-Control-Allow-Origin','*')//任何域访问
```

cors响应头部-Access-Control-Allow-Headers

默认情况下，cors仅支持客户端向服务器发送的以下的9个请求头：

Aceeept、Accept-Language、Content-Luaguage、DPR、Downlink、Save-Data、Viewport-Width、Width、Content-Type(值仅限于text/plain、multipart/form-data、application/x-www-form-erlencode三者之一)

如果客户端向服务器发送了额外的请求头信息，则需要在服务器端，通过Access-Control-Allow-headers对额外的请求头进行声明，否则请求失败

```js
res.setHeader('Access-Control-Allow-Headers','Content-Type,X-Custom-Header')
```



cors响应头部-Access-Control-Allow-Methods

默认情况下，cors仅支持客户端发起GET,POST,HEAD请求

如果客户端希望通过PUT,DELETE等方式请求服务器上的资源，则需要在服务器端，通过Access-Control-Allow-Methods来指明实际请求的所允许使用的HTTP方法

```js
res.setHeader('Access-Control-Allow-Methods','POST,GET,DELETE.HEAD')
res.setHeader('Access-Control-Allow-Methods','*')
```

##### CORS请求的分类

1.简单请求（发送一次）

​	1.请求方式:get,post,head三者之一

​	2.http头部信息不超过以下几种字段：无自定义头部字段，Aceeept、Accept-Language、Content-Luaguage、DPR、Downlink、Save-Data、Viewport-Width、Width、Content-Type(值仅限于text/plain、multipart/form-data、application/x-www-form-erlencode三者之一)

2.10.预检请求（发送两次）

只要符合以下任何一个条件的请求，都需要进行预检请求:

①请求方式为GET、POST、 HEAD之外的请求Method类型

②请求头中包含自定义头部字段

③向服务器发送了application/json格式的数据

在浏览器与服务器正式通信之前，浏览器会先发送OPTION请求进行预检，以获知服务器是否允许该实际请求，所以这一次OPTION请求称为"预检请求“。服务器成功响应预检请求后，才会发送真正的请求，并且携带真实数据、

##### JSONP接口

如果项目中已经配置了cors跨域资源共享，为了防止冲突，必须在配置cors中间件之前声明JSONP接口，否则JSONP接口会被处理成开启了cors的接口(只支持get)

```js
      $('#btnJSONP').on('click', function () {
          $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1:8001/api/jsonp',
            dataType: 'jsonp',
            success: function (res) {
              console.log(res)
            },
          })
        })
```

步骤:

1.获取客户端发送过来的回调函数的名字

2.得到要通过JSON形式发送给客户端的数据

3.根据前两步得到的数据，拼接出一个函数调用的字符串

4.把上一步拼接得到的字符串，响应给客户端的\<script>标签进行解析执行

```js
// 必须在配置 cors 中间件之前，配置 JSONP 的接口
app.get('/api/jsonp', (req, res) => {
  // TODO: 定义 JSONP 接口具体的实现过程
  // 1. 得到函数的名称
  const funcName = req.query.callback
  // 2. 定义要发送到客户端的数据对象
  const data = { name: 'zs', age: 22 }
  // 3. 拼接出一个函数的调用
  const scriptStr = `${funcName}(${JSON.stringify(data)})`
  // 4. 把拼接的字符串，响应给客户端
  res.send(scriptStr)
})
```

