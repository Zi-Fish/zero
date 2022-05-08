const path = require('path')

// 这是文件的存放路径
const fpath = '/txt/1.txt'

const fext = path.extname(fpath)
console.log(fext)