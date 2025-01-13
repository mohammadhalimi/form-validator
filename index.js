const phoneValidator = require('./src/validators/phone');
const postalCodeValidator = require('./src/validators/postalCode');
const nationalIdValidator = require('./src/validators/nationalId');

const { regexPatterns } = require('./utils/regexPatterns');
const { countryConfigs } = require('./utils/countryConfigs');

module.exports = {
  phoneValidator,
  postalCodeValidator,
  nationalIdValidator,
  regexPatterns,
  countryConfigs,
};
