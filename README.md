# @aaronburt/isPostal

This package provides postal code validation for multiple countries.

## Installation

To install this package, you can use npm:

```bash
npm install @aaronburt/isPostal
```

```js
import Postal from '@aaronburt/isPostal';

const usPostalCode = '12345';
const isUSPostal = Postal.isUSPostalCode(usPostalCode);
console.log(`Is US Postal Code valid? ${isUSPostal}`); // Output: Is US Postal Code valid? true
```

## Supported Countries and Validation Methods
* United States: isUSPostalCode
* Canada: isCanadaPostalCode
* United Kingdom: isUKPostalCode
* Australia: isAustraliaPostalCode
* Germany: isGermanyPostalCode
* Japan: isJapanPostalCode
* France: isFrancePostalCode
* Spain: isSpainPostalCode
* Italy: isItalyPostalCode
* India: isIndiaPostalCode
