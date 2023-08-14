const path = require('path')

// 定义文件的存放路径
const fpath = '/a/b/c/index.html'
// 获取文件路径最后的部分 index.html
// const fullName = path.basename(fpath)
// console.log(fullName)

const nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt)
