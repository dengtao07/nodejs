// 引用系统内置模块，读取文件模块
const fs = require('fs');

const result = fs.readFile('./fs.js',(err, data) =>{
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }

});

console.log(result);