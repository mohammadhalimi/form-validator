const regexPatterns = {
    phone: {
        iran: /^(\+98|0|98|0098)?[ -]?\(?9[0-9]{2}\)?[ -]?[0-9]{3}[ -]?[0-9]{4}$/,  // Iranian mobile numbers (starts with 09)
        turkey: /^(\+90|0)(5\d{9})$/,  // Turkish mobile numbers (starts with 05)
        usa: /^(?:\+1\s?)?(\(?\d{3}\)?[\s\-\.]?)?\d{3}[\s\-\.]?\d{4}$/,  // USA mobile numbers (handles formats like (123) 456-7890)
        uk: /^(?:\+44|0)7\d{9}$/,  // UK mobile numbers (starts with 07)
        germany: /^(?:\+49|0)1\d{10}$/,  // Germany mobile numbers (starts with 01)
        france: /^(?:\+33|0)[1-9]\d{8}$/,  // France mobile numbers (starts with 0 or +33)
        russia: /^(\+7|7|8)?9\d{9}$/,  // Russia mobile numbers (starts with 7, 8, or 9)
        china: /^(?:\+86|0)?1\d{10}$/,  // China mobile numbers (starts with 1)
    },
    postalCode: {
        iran: /^\d{10}$/,  // 10-digit postal code for iran
        usa: /^\d{5}(-\d{4})?$/,  // 5-digit or 9-digit postal code for iran
        uk: /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/,  // number and letters postal code for engalnd
        germany: /^\d{5}$/,  // 5-digit postal code for germany
        france: /^\d{5}$/,  // 5-digit postal code for france
        turkey: /^\d{5}$/,  // 5-digit postal code for turkey
        russia: /^\d{6}$/,  // 6-digit postal code for russia
        china: /^\d{6}$/,  // 6-digit postal code for china
    },
    nationalId: {
        iran: /^\d{10}$/, // national Id for iranin 10-digit
        turkey: /^\d{11}$/, // national Id for turkey 11-digit
        usa: /^[A-Z]{2}\d{7}$/, // national Id for usa i am not sure
        china: /^[1-9]\d{17}$/, // national Id for china 18-digit
        russia: /^\d{12}$/, // national Id for russia 12-digit
        germany: /^\d{11}$/, // national Id for germany 11-digit
        france: /^[1-9]\d{12}$/, // national Id for france 13-digit
        uk: /^[A-Z]{2}\d{6}[A-D]$/, // national Id for germany i am not sure
    }
};

module.exports = regexPatterns;
