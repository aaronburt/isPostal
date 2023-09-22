// noinspection JSUnusedGlobalSymbols

export default class Postal {

    /**
     * Validates a postal code using the provided pattern.
     * @param {string} postalCode - The postal code to validate.
     * @param {RegExp} pattern - The regular expression pattern for validation.
     * @returns {boolean} True if the postal code is valid according to the pattern, false otherwise.
     */
    private static validatePostalCode(postalCode: string, pattern: RegExp): boolean {
        return pattern.test(postalCode);
    }

    /**
     * Validates a postal code using the provided pattern.
     * @param {string} postalCode - The postal code to validate.
     * @param {RegExp} pattern - The regular expression pattern for validation.
     * @returns {boolean} True if the postal code is valid according to the pattern, false otherwise.
     */
    public static isPostalCode(postalCode: string, pattern: RegExp): boolean {
        return this.validatePostalCode(postalCode, pattern);
    }

    public static isUSPostalCode(postalCode: string): boolean {
        const usPostalCodePattern = /^\d{5}(-\d{4})?$/;
        return this.isPostalCode(postalCode, usPostalCodePattern);
    }

    public static isCanadaPostalCode(postalCode: string): boolean {
        const canadaPostalCodePattern = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
        return this.isPostalCode(postalCode, canadaPostalCodePattern);
    }

    public static isUKPostalCode(postalCode: string): boolean {
        const ukPostalCodePattern = /^[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}$/i;
        return this.isPostalCode(postalCode, ukPostalCodePattern);
    }

    public static isAustraliaPostalCode(postalCode: string): boolean {
        const australiaPostalCodePattern = /^\d{4}$/;
        return this.isPostalCode(postalCode, australiaPostalCodePattern);
    }

    public static isGermanyPostalCode(postalCode: string): boolean {
        const germanyPostalCodePattern = /^\d{5}$/;
        return this.isPostalCode(postalCode, germanyPostalCodePattern);
    }

    public static isJapanPostalCode(postalCode: string): boolean {
        const japanPostalCodePattern = /^\d{3}-\d{4}$/;
        return this.isPostalCode(postalCode, japanPostalCodePattern);
    }

    public static isFrancePostalCode(postalCode: string): boolean {
        const francePostalCodePattern = /^(F-)?((2[A|B])|[0-9]{2})[0-9]{3}$/;
        return this.isPostalCode(postalCode, francePostalCodePattern);
    }

    public static isSpainPostalCode(postalCode: string): boolean {
        const spainPostalCodePattern = /^(0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/;
        return this.isPostalCode(postalCode, spainPostalCodePattern);
    }

    public static isItalyPostalCode(postalCode: string): boolean {
        const italyPostalCodePattern = /^(I-)?\d{5}$/;
        return this.isPostalCode(postalCode, italyPostalCodePattern);
    }

    public static isIndiaPostalCode(postalCode: string): boolean {
        const indiaPostalCodePattern = /^\d{6}$/;
        return this.isPostalCode(postalCode, indiaPostalCodePattern);
    }
}
