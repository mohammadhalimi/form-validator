const phoneValidator = require('./src/validator/phone');
const postalCodeValidator = require('./src/validator/postalCode');
const nationalIdValidator = require('./src/validator/nationalId');

const { regexPatterns } = require('./utils/regexPatterns');
const { countryConfigs } = require('./utils/countryConfigs');

module.exports = {
  phoneValidator,
  postalCodeValidator,
  nationalIdValidator,
  regexPatterns,
  countryConfigs,
};
