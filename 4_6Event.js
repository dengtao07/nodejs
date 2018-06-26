const EventEmitter = require('events');

class CustomEvent extends EventEmitter {}

const ce = new CustomEvent;

// ce.on('error', (err, time) => {
//   console.log(err, time);
// })
// ce.emit('error', new Error('opoos!!'), Date.now());

// .once 仅触发一次
// ce.once('test', () => {
//   console.log('emmit once');
// })

// setInterval(()=>{
//   ce.emit('test')
// },1000)

// 可以给一个时间绑定多个事件处理函数
function func1 () {
  console.log('func1');
}
function func2 () {
  console.log('func2');
}
ce.on('test', func1);
ce.on('test', func2);

setInterval(() => {
  ce.emit('test');
}, 500)

// 移除某一个事件处理函数
setTimeout(() => {
  ce.removeListener('test', func1);
}, 1500)

// 去除所有的事件处理函数
setTimeout(()=>{
  ce.removeAllListeners('test');
}, 3000)