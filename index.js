const phoneValidator = require('./validators/phone');
const postalCodeValidator = require('./validators/postalCode');
const nationalIdValidator = require('./validators/nationalId');

const { regexPatterns } = require('./utils/regexPatterns');
const { countryConfigs } = require('./utils/countryConfigs');

module.exports = {
  phoneValidator,
  postalCodeValidator,
  nationalIdValidator,
  regexPatterns,
  countryConfigs,
};
