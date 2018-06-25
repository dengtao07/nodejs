// const testVar = 100;

// const testVar2 = 200;
// global.testVar2 = testVar2;

// module.exports.testVar = testVar;

setImmediate(() => {
  console.log('setImmediate');
});//3

setTimeout(() => {
  console.log('settimeout');
}, 0);//2

process.nextTick(() => {
  console.log('nextTick');
});//1