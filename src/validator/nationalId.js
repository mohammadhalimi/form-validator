const nIP = require('../../utils/regexPatterns');
const nationalIdPatterns = nIP.nationalId;

function validateChineseNationalId(nationalId) {
    if (!/^[1-9]\d{5}(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[0-9Xx]$/.test(nationalId)) {
        return false;
    }

    // Compute checksum
    const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const checksumChars = '10X98765432';

    const sum = nationalId
        .split('')
        .slice(0, 17)
        .reduce((acc, digit, index) => acc + parseInt(digit) * weights[index], 0);

    const remainder = sum % 11;
    const expectedChecksum = checksumChars[remainder];

    return nationalId[17].toUpperCase() === expectedChecksum;
}

function validateNationalId(country, nationalId) {
    if (country.toLowerCase() === 'china') {
        return validateChineseNationalId(nationalId);
    }

    const pattern = nationalIdPatterns[country.toLowerCase()];
    if (!pattern) {
        throw new Error(`Validation for ${country} is not supported yet.`);
    }

    return pattern.test(nationalId);
}

module.exports = validateNationalId;
