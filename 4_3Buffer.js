
// Buffer 类方法
console.log(Buffer.alloc(10));
console.log(Buffer.alloc(20));
console.log(Buffer.allocUnsafe(5,2));
console.log(Buffer.from([1,2,3]));
console.log(Buffer.from('test'));
console.log(Buffer.from('test','base64'));


console.log(Buffer.byteLength('test'));
console.log(Buffer.byteLength('我的'));

console.log(Buffer.isBuffer({12:1}));
console.log(Buffer.isBuffer(Buffer.from([1,2,3])));

// 实例方法
const buf1 = Buffer.from([1,2,3]);
const buf2 = Buffer.from([4,5,6]);
console.log(Buffer.concat([buf1, buf2]));

console.log(buf1.length);

const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);
console.log(buf3.fill(10,2,6));

console.log(buf1.equals(buf3));
console.log(buf1.indexOf(3));

// buffer decoder
const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');
const buf4 = Buffer.from('中文字符串！');
for(let i=0; i<buf4.length; i+=5) {
  const b = Buffer.allocUnsafe(5);
  buf4.copy(b, 0, i);
  // console.log(b.toString());
  console.log(decoder.write(b));
  
}



