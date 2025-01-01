const validatePhone = require('../src/validator/phone');

function runTests() {
  console.log('Valid Iranian phone number:', validatePhone('iran', '09337061131'));  // Expected: true
  console.log('Invalid Iranian phone number:', validatePhone('iran', '1234567890'));  // Expected: false
  console.log('Valid Turkish phone number:', validatePhone('turkey', '+905321234567'));  // Expected: true
  console.log('Invalid Turkish phone number:', validatePhone('turkey', '123456'));  // Expected: false
  console.log('Valid USA mobile number:', validatePhone('usa', '(123) 456-7890'));  // Expected: true
  console.log('Invalid USA mobile number:', validatePhone('usa', '1234567890'));  // Expected: false

  // Validations for additional countries
  console.log('Valid Russian phone number:', validatePhone('russia', '+7 9123456789'));  // Expected: true
  console.log('Invalid Russian phone number:', validatePhone('russia', '234-56-78'));  // Expected: false
  console.log('Valid UK phone number:', validatePhone('uk', '07400123456'));  // Expected: true
  console.log('Invalid UK phone number:', validatePhone('uk', '0123456789'));  // Expected: false
  console.log('Valid French phone number:', validatePhone('france', '+33 612345678'));  // Expected: true
  console.log('Invalid French phone number:', validatePhone('france', '612345678'));  // Expected: false
  console.log('Valid German phone number:', validatePhone('germany', '+49 1712345678'));  // Expected: true
  console.log('Invalid German phone number:', validatePhone('germany', '171234567'));  // Expected: false
  console.log('Valid Chinese phone number:', validatePhone('china', '13812345678'));  // Expected: true
  console.log('Invalid Chinese phone number:', validatePhone('china', '13812345'));  // Expected: false
}

runTests();






