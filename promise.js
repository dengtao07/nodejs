function timeAdder(n) {
  return new Promise(function(resolve){
    setTimeout(() => {
      resolve(n + 200);
    }, n)
  })
}

function step1(n){
  console.log(`step1 uses: ${n} ms`);
  return timeAdder(n);
}

function step2(n){
  console.log(`step2 uses: ${n} ms`);
  return timeAdder(n);
}

function step3(n){
  console.log(`step2 uses: ${n} ms`);
  return timeAdder(n);
}

// function runThis() {
//   console.time("timer");
//   const time1 = 0;
//   step1(time1)
//     .then(time2 => step2(time2))
//     .then(time3 => step3(time3))
//     .then(time4 => {
//       console.log(`end time is: ${time4} ms`);
//       console.timeEnd("timer");
//     });
// }
// runThis();

async function runThis() {
  console.time("timer");
  const time1 = 0;
  const time2 = await step1(time1);
  const time3 = await step2(time2);
  const end_time = await step3(time3); 
  console.log(`end time is: ${end_time} ms`);
  console.timeEnd("timer");
}

runThis();
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