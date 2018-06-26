const fs = require('fs');
// 读文件
// fs.readFile('./4_8ReadFile.js', 'utf8', (err, data) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(data);
//   }
// });

// const data = fs.readFileSync('./cache.js', 'utf8');
// console.log(data);

// 写文件
// fs.writeFile('./text','this is a test', 'utf8', err => {
//   if (err) {
//     throw err;
//   } else {
//     console.log('done!');
//   }
// })


// 获取文件属性
// fs.stat('./4_8ReadFile.js', (err, data) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(data.isFile());
//     console.log(data);
//   }
// })

// 更改文件名
// fs.rename('./text', 'text.txt', (err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log('done!');
//   }
// });

// 删除文件
// fs.unlink('./text.txt', err => {});

// 创建文件夹
fs.mkdir('testMakedir', err => {});