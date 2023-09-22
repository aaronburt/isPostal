export default class Postal {
    static validatePostalCode(postalCode, pattern) {
        return pattern.test(postalCode);
    }
    static isPostalCode(postalCode, pattern) {
        return this.validatePostalCode(postalCode, pattern);
    }
    static isUSPostalCode(postalCode) {
        const usPostalCodePattern = /^\d{5}(-\d{4})?$/;
        return this.isPostalCode(postalCode, usPostalCodePattern);
    }
    static isCanadaPostalCode(postalCode) {
        const canadaPostalCodePattern = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
        return this.isPostalCode(postalCode, canadaPostalCodePattern);
    }
    static isUKPostalCode(postalCode) {
        const ukPostalCodePattern = /^[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}$/i;
        return this.isPostalCode(postalCode, ukPostalCodePattern);
    }
    static isAustraliaPostalCode(postalCode) {
        const australiaPostalCodePattern = /^\d{4}$/;
        return this.isPostalCode(postalCode, australiaPostalCodePattern);
    }
    static isGermanyPostalCode(postalCode) {
        const germanyPostalCodePattern = /^\d{5}$/;
        return this.isPostalCode(postalCode, germanyPostalCodePattern);
    }
    static isJapanPostalCode(postalCode) {
        const japanPostalCodePattern = /^\d{3}-\d{4}$/;
        return this.isPostalCode(postalCode, japanPostalCodePattern);
    }
    static isFrancePostalCode(postalCode) {
        const francePostalCodePattern = /^(F-)?((2[A|B])|[0-9]{2})[0-9]{3}$/;
        return this.isPostalCode(postalCode, francePostalCodePattern);
    }
    static isSpainPostalCode(postalCode) {
        const spainPostalCodePattern = /^(0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/;
        return this.isPostalCode(postalCode, spainPostalCodePattern);
    }
    static isItalyPostalCode(postalCode) {
        const italyPostalCodePattern = /^(I-)?\d{5}$/;
        return this.isPostalCode(postalCode, italyPostalCodePattern);
    }
    static isIndiaPostalCode(postalCode) {
        const indiaPostalCodePattern = /^\d{6}$/;
        return this.isPostalCode(postalCode, indiaPostalCodePattern);
    }
}
