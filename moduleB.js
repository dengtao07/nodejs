module.exports.test = 'B';

const modA = require('./moduleA');
console.log('modB:', modA.test);

module.exports.test = 'BB';