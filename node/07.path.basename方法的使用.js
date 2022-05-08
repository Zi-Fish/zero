const path = require('path')

// 定义文件的存放路径
const fpath = '/txt/1.txt'

const fullName = path.basename(fpath)
console.log(fullName) //1.txt

const nameWithoutExt = path.basename(fpath, '.txt')
console.log(nameWithoutExt) //1