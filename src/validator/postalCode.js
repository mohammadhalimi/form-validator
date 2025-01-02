const pP = require('../../utils/regexPatterns')
const postalCodePatterns = pP.postalCode;

function validatePostalCode(country, postalCode) {
    const pattern = postalCodePatterns[country.toLowerCase()];
    if (!pattern) {
        throw new Error(`Validation for ${country} is not supported yet.`);
    }

    const sanitizedCode = postalCode.trim();

    return pattern.test(sanitizedCode);
}

module.exports = validatePostalCode;
