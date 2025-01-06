# global-form-validator

A multi-country form validation library supporting phone numbers, postal codes, and national IDs. This package helps to validate user input in forms based on country-specific rules for phone numbers, postal codes, and national IDs.

---

## Installation

To use the **`global-form-validator`** package in your React project, follow these steps:

### 1. Install the Package

You can install the package using either npm or yarn:

```bash
# Using npm
npm i global-form-validator
```
# Usage
Once you’ve installed the package, you can import the validation functions for phone numbers, postal codes, and national IDs into your React components.

### 2. Import the Package
Import the necessary validation functions into your component file:

``` javascript
import { phoneValidator, postalCodeValidator, nationalIdValidator} from 'global-form-validator';
```
# Example
Here’s an example React form with validation for phone numbers, postal codes, and national IDs:
``` javascript
import React, { useState } from 'react';
import { phoneValidator, postalCodeValidator, nationalIdValidator} from 'global-form-validator';

const FormComponent = () => {
  const [phone, setPhone] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [nationalId, setNationalId] = useState('');

  const [phoneValid, setPhoneValid] = useState(false);
  const [postalCodeValid, setPostalCodeValid] = useState(false);
  const [nationalIdValid, setNationalIdValid] = useState(false);

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    setPhoneValid(validatePhone('usa', event.target.value));  // Validate USA phone number
  };

  const handlePostalCodeChange = (event) => {
    setPostalCode(event.target.value);
    setPostalCodeValid(validatePostalCode('usa', event.target.value));  // Validate USA postal code
  };

  const handleNationalIdChange = (event) => {
    setNationalId(event.target.value);
    setNationalIdValid(validateNationalId('iran', event.target.value));  // Validate Iranian national ID
  };

  return (
    <div>
      <h2>Validation Form</h2>

      {/* Phone Number */}
      <div>
        <label>Phone Number (USA):</label>
        <input type="text" value={phone} onChange={handlePhoneChange} />
        <p>{phoneValid ? 'Valid Phone Number' : 'Invalid Phone Number'}</p>
      </div>

      {/* Postal Code */}
      <div>
        <label>Postal Code (USA):</label>
        <input type="text" value={postalCode} onChange={handlePostalCodeChange} />
        <p>{postalCodeValid ? 'Valid Postal Code' : 'Invalid Postal Code'}</p>
      </div>

      {/* National ID */}
      <div>
        <label>National ID (Iran):</label>
        <input type="text" value={nationalId} onChange={handleNationalIdChange} />
        <p>{nationalIdValid ? 'Valid National ID' : 'Invalid National ID'}</p>
      </div>
    </div>
  );
};

export default FormComponent;
```
# Validation Details
## Supported Countries
### Phone Numbers:
 Validate phone numbers for countries such as the USA, Turkey, Iran, Russia, and more.
### Postal Codes: 
Validate postal codes for countries like the USA, Germany, France, and more.
### National IDs: 
Validate national IDs for countries such as Iran, Turkey, Russia, and more.

# API
``` javascript
phoneValidator(country, phoneNumber);
// Validates the phone number based on the country.
```
## country: 
The country code (e.g., 'usa', 'iran', 'turkey').
## phoneNumber: 
The phone number string to validate.
## Example:
``` javascript
phoneValidator('usa', '(123) 456-7890'); // returns true or false
postalCodeValidator(country, postalCode);
// Validates the postal code based on the country.
```
### country: 
The country code (e.g., 'usa', 'germany', 'france').
postalCode: The postal code string to validate.
Example:

``` javascript
postalCodeValidator('usa', '90210'); // returns true or false
nationalIdValidator(country, nationalId);;
// Validates the national ID based on the country.
``` 
### country: 
The country code (e.g., 'iran', 'turkey', 'russia').
nationalId: The national ID string to validate.
Example:
``` javascript
validateNationalId('iran', '1234567890'); // returns true or false
``` 
# Known Issues and Future Improvements
While intl-form-validator works for many countries and validates phone numbers, postal codes, and national IDs, some issues still need attention:

### Incomplete Coverage: 
Not all countries are covered yet. We plan to expand the list of supported countries.
### Edge Cases: 
Some edge cases may not be handled perfectly in certain formats.
We encourage developers to contribute and help improve this package. If you find any issues or have suggestions for improvements, please visit our GitHub repository.
[https://github.com/mohammadhalimi/form-validator](https://github.com/mohammadhalimi/form-validator)

## Conclusion
The global-form-validator package helps simplify form validation for phone numbers, postal codes, and national IDs across multiple countries. It’s easy to integrate into your React forms and provides real-time validation feedback.

Feel free to contribute or suggest improvements! Happy coding!
## License
This project is licensed under the MIT License