const validatePostalCode = require('../src/validator/postalCode');

function runPostalCodeTests() {
    console.log('Valid Iranian postal code:', validatePostalCode('iran', '1234567890'));  // Expected: true
    console.log('Invalid Iranian postal code:', validatePostalCode('iran', '12345'));  // Expected: false
    console.log('Valid USA postal code (5 digits):', validatePostalCode('usa', '12345'));  // Expected: true
    console.log('Valid USA postal code (9 digits):', validatePostalCode('usa', '12345-6789'));  // Expected: true
    console.log('Invalid USA postal code:', validatePostalCode('usa', '123456'));  // Expected: false
    console.log('Valid UK postal code:', validatePostalCode('uk', 'SW1A 1AA'));  // Expected: true
    console.log('Invalid UK postal code:', validatePostalCode('uk', '12345'));  // Expected: false
    console.log('Valid German postal code:', validatePostalCode('germany', '12345'));  // Expected: true
    console.log('Invalid German postal code:', validatePostalCode('germany', 'ABCDE'));  // Expected: false
    console.log('Valid French postal code:', validatePostalCode('france', '75008'));  // Expected: true
    console.log('Invalid French postal code:', validatePostalCode('france', '7500A'));  // Expected: false
    console.log('Valid Turkish postal code:', validatePostalCode('turkey', '34010'));  // Expected: true
    console.log('Valid Russian postal code:', validatePostalCode('russia', '129364'));  // Expected: true
    console.log('Valid Chinese postal code:', validatePostalCode('china', '100000'));  // Expected: true
}

runPostalCodeTests();
