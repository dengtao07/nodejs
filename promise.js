// function timeAdder(n) {
//   return new Promise(function(resolve){
//     setTimeout(() => {
//       resolve(n + 200);
//     }, n)
//   })
// }

// function step1(n){
//   console.log(`step1 uses: ${n} ms`);
//   return timeAdder(n);
// }

// function step2(n){
//   console.log(`step2 uses: ${n} ms`);
//   return timeAdder(n);
// }

// function step3(n){
//   console.log(`step2 uses: ${n} ms`);
//   return timeAdder(n);
// }

// // function runThis() {
// //   console.time("timer");
// //   const time1 = 0;
// //   step1(time1)
// //     .then(time2 => step2(time2))
// //     .then(time3 => step3(time3))
// //     .then(time4 => {
// //       console.log(`end time is: ${time4} ms`);
// //       console.timeEnd("timer");
// //     });
// // }
// // runThis();

// async function runThis() {
//   console.time("timer");
//   const time1 = 0;
//   const time2 = await step1(time1);
//   const time3 = await step2(time2);
//   const end_time = await step3(time3); 
//   console.log(`end time is: ${end_time} ms`);
//   console.timeEnd("timer");
// }

// runThis();


// const instance = new Promise((resolved, rejected) => {
//   // do something...
//     if(/*异步操作成功*/){
//       resolved(value);
//     } else {
//       rejected(error);
//     }
//   }
// })
// instance.then(value => {
//   // do something...
// }, rejected => {
//   // do something...
// })
// function takeLongTime(n) {
//   return new Promise(resolve => {
//       setTimeout(() => resolve(n + 200), n);
//   });
// }

// function step1(n) {
//   console.log(`step1 with ${n}`);
//   return takeLongTime(n);
// }

// function step2(n) {
//   console.log(`step2 with ${n}`);
//   return takeLongTime(n);
// }

// function step3(n) {
//   console.log(`step3 with ${n}`);
//   return takeLongTime(n);
// }
// function doIt() {
//   console.time("doIt");
//   const time1 = 300;
//   step1(time1)
//       .then(time2 => step2(time2))
//       .then(time3 => step3(time3))
//       .then(result => {
//           console.log(`result is ${result}`);
//           console.timeEnd("doIt");
//       });
// }

// doIt();

// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve(ms), ms);
//   });
// }

// timeout(100).then((value) => {
//   console.log(value);
// });

// const promise = new Promise((resolved, rejected) => {
//   console.log('async task begins!');
//   setTimeout(() => {
//     resolved('done, pending -> resolved!');
//   }, 1000);
// })

// promise.then(value => {
//   console.log(value);
//   console.log('finally, I am done!');
  
// }) 

// console.log('1.please wait');
// console.log('2.please wait');
// console.log('3.please wait');
// async task begins!
// 1.please wait
// 2.please wait
// 3.please wait
// done, pending -> resolved!
// finally, I am done!



// function timeAdder(n) {
//   return new Promise((resolved, rejected) => {
//     setTimeout(() => {
//       resolved(n + 200);
//     }, n)
//   })
// }

// timeAdder(0)
//   .then(n => {
//     console.log(n);
//     return timeAdder(n);
//   })
//   .then(n => {
//     console.log(n);
//     return timeAdder(n);
//   })
//   .then(n => {
//     console.log(n);
//     return timeAdder(n);
//   })
// async function funcA() {
//   return 'hello!';
// }

// funcA().then(value => {
//   console.log(value);
// })

function timeAdder(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n + 200);
    }, n);
  });
}

// async function func() {
//   console.log('async function is running!');
//   const time1 = await timeAdder(0);
//   console.log(`time1 is ${time1}`);
//   const time2 = await timeAdder(time1);
//   console.log(`time2 is ${time2}`);
//   const time3 = await timeAdder(time2);
//   console.log(`time3 is ${time3}`);
// }
// async function func() {
//   console.log('async function is running!');
//   const num1 = await 200;
//   console.log(`num1 is ${num1}`);
//   const num2 = await num1+ 100;
//   console.log(`num2 is ${num2}`);
//   const num3 = await num2 + 100;
//   console.log(`num3 is ${num3}`);
// }

// func();
// console.log('run me before await!');

// async function is running!
// run me before await!
// time1 is 200
// time2 is 400
// time3 is 600
// async function is running!
// run me before await!
// num1 is 200
// num2 is 300
// num3 is 400

// async function main() {
//   try {
//     const val1 = await Promise.reject('出错了');
//     const val2 = await 100;
//     console.log(val2);
//     const val3 = await 200;
//     console.log(val1);
//   }
//   catch (err) {
//     console.error(err);
//   }
// }
// main();

// async function func() {
//   try {
//     const num1 = await 200;
//     console.log(`num1 is ${num1}`);
//     const num2 = await Promise.reject('num2 is wrong!');
//     console.log(`num2 is ${num2}`);
//     const num3 = await num2 + 100;
//     console.log(`num3 is ${num3}`);
//   } catch (error) {
//     console.log(error);
//   }
// }

// func();
// num1 is 200
// 出错了
// num2 is wrong!



function timeAdder(n) {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      resolved(n + 200);
    }, n)
  })
}

async function func() {
  const time1 = await timeAdder(0);
  console.log(`time1 is ${time1}`);
  const time2 = await timeAdder(time1);
  console.log(`time3 is ${time2}`);
  const time3 = await timeAdder(time2);
  console.log(`time3 is ${time3}`);
}

func();