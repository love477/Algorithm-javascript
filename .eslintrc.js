module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "array-callback-return": "off",
        "consistent-return": "off",
        "no-console": "off",
        "no-restricted-syntax": "off",
        "no-plusplus": "off",
        "no-continue": "off"
    }
};