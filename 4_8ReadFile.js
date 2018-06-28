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
// fs.mkdir('testMakedir', err => {});

// 监视文件
// fs.watch('./', {
//   recursive: true
// }, (eventType, filename) => {
//   console.log(eventType, filename);
// })

// readStream
// const rdStream = fs.createReadStream('./4_8ReadFile.js');
// rdStream.pipe(process.stdout);

// writeStream
// const ws = fs.createWriteStream('./test.txt');

// const tid = setInterval(() => {
//   const num = parseInt(Math.random()*10);
//   if(num < 9) {
//     ws.write(num + '')
//   } else {
//     clearInterval(tid);
//     ws.end();
//   }
// }, 200);

// ws.on('finish', () => {
//   console.log('写完了！');
// })

// readFile回调地狱
const promisify = require('util').promisify;
const read = promisify(fs.readFile);

// read('./4_8ReadFile.js').then(data => {
//   console.log(data.toString());
// }).catch(ex => {
//   console.log(ex);
// })


async function test() {
  try {
    const content = await read('./4_8ReadFile.js');
    console.log(content.toString());
  } catch (ex) {
    console.log(ex);
  }
}
test();

  