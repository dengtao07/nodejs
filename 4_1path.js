const {
  normalize, 
  join, 
  resolve,
  basename,
  dirname,
  extname,
  parse,
  format,
  sep,
  delimiter,
  win32,
  posix
} = require('path');
console.log(normalize('/usr//local/bin'));    
console.log(join('/usr','../local/','/bin/'));  // 拼接路径
console.log(resolve('./'));  // 将相对路径转为绝对路径

const filePath = '/usr/local/bin/no.txt';
console.log(basename(filePath));
console.log(dirname(filePath));
console.log(extname(filePath));

const filePath1 = '/usr/local/bin/no.txt';
console.log(parse(filePath1));   // 路径转换为对象
console.log(format(parse(filePath1)));  // 对象转换为路径

console.log('sep:', sep);  // 路径的分隔符
console.log('PATH', process.env.PATH);
console.log('delimiter:', delimiter);
