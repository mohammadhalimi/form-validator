const validateNationalId = require('../src/validator/nationalId');

function runTests() {
    // Iranian National ID
    console.log('Valid Iranian National ID:', validateNationalId('iran', '1234567890'));  // Expected: true
    console.log('Invalid Iranian National ID:', validateNationalId('iran', '12345'));  // Expected: false

    // Turkish National ID
    console.log('Valid Turkish National ID:', validateNationalId('turkey', '12345678901'));  // Expected: true
    console.log('Invalid Turkish National ID:', validateNationalId('turkey', '12345678'));  // Expected: false

    // USA National ID
    console.log('Valid USA National ID:', validateNationalId('usa', 'AB1234567'));  // Expected: true
    console.log('Invalid USA National ID:', validateNationalId('usa', '12345678'));  // Expected: false

    // Other countries
    console.log('Valid Chinese National ID:', validateNationalId('china', '11010519491231002X'));  // Expected: true
    console.log('Invalid Chinese National ID:', validateNationalId('china', '11010519491231003X'));  // Expected: false    
    console.log('Valid Russian National ID:', validateNationalId('russia', '123456789012'));  // Expected: true
    console.log('Invalid Russian National ID:', validateNationalId('russia', '1234'));  // Expected: false
    console.log('Valid German National ID:', validateNationalId('germany', '12345678901'));  // Expected: true
    console.log('Invalid German National ID:', validateNationalId('germany', '12345'));  // Expected: false
    console.log('Valid French National ID:', validateNationalId('france', '1234567890123'));  // Expected: true
    console.log('Invalid French National ID:', validateNationalId('france', '12345'));  // Expected: false
    console.log('Valid UK National ID:', validateNationalId('uk', 'AB123456C'));  // Expected: true
    console.log('Invalid UK National ID:', validateNationalId('uk', '12345'));  // Expected: false
}

runTests();
