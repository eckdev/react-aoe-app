module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks"
    ],
    "rules": {
        "react/prop-types": "off",
        "react-hooks/rules-of-hooks": "error", // Hook kurallarını kontrol eder
        "react-hooks/exhaustive-deps": "warn" // Efekt bağımlılıklarını kontrol eder
    }
};
