module.exports.test = 'A';

const modB = require('./moduleB')
console.log('modA:',modB.test);

module.exports.test = 'AA';