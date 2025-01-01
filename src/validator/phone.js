const phonePatterns = {
    iran: /^(\+98|0|98|0098)?[ -]?\(?9[0-9]{2}\)?[ -]?[0-9]{3}[ -]?[0-9]{4}$/,  // Iranian mobile numbers (starts with 09)
    turkey: /^(\+90|0)(5\d{9})$/,  // Turkish mobile numbers (starts with 05)
    usa: /^(?:\+1\s?)?(\(?\d{3}\)?[\s\-\.]?)?\d{3}[\s\-\.]?\d{4}$/,  // USA mobile numbers (handles formats like (123) 456-7890)
    uk: /^(?:\+44|0)7\d{9}$/,  // UK mobile numbers (starts with 07)
    germany: /^(?:\+49|0)1\d{10}$/,  // Germany mobile numbers (starts with 01)
    france: /^(?:\+33|0)[1-9]\d{8}$/,  // France mobile numbers (starts with 0 or +33)
    russia: /^(\+7|7|8)?9\d{9}$/,  // Russia mobile numbers (starts with 7, 8, or 9)
    china: /^(?:\+86|0)?1\d{10}$/,  // China mobile numbers (starts with 1)
};

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



