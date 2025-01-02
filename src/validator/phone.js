const pP = require('../../utils/regexPatterns');
const phonePatterns = pP.phone;

function validatePhone(country, phoneNumber) {
    const pattern = phonePatterns[country.toLowerCase()];
    if (!pattern) {
        throw new Error(`Validation for ${country} is not supported yet.`);
    }
    
    // Sanitize input: Remove spaces, special characters, and non-numeric values
    const sanitizedNumber = phoneNumber.replace(/[^\d\+]/g, '').replace(/\s+/g, '');
    
    return pattern.test(sanitizedNumber);
}

module.exports = validatePhone;



