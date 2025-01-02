const postalCodePatterns = {
    iran: /^\d{10}$/,  // 10-digit postal code for iran
    usa: /^\d{5}(-\d{4})?$/,  // 5-digit or 9-digit postal code for iran
    uk: /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/,  // number and letters postal code for engalnd
    germany: /^\d{5}$/,  // 5-digit postal code for germany
    france: /^\d{5}$/,  // 5-digit postal code for france
    turkey: /^\d{5}$/,  // 5-digit postal code for turkey
    russia: /^\d{6}$/,  // 6-digit postal code for russia
    china: /^\d{6}$/,  // 6-digit postal code for china
};

function validatePostalCode(country, postalCode) {
    const pattern = postalCodePatterns[country.toLowerCase()];
    if (!pattern) {
        throw new Error(`Validation for ${country} is not supported yet.`);
    }

    const sanitizedCode = postalCode.trim();

    return pattern.test(sanitizedCode);
}

module.exports = validatePostalCode;
