const Validator = require("validator");
const isEmpty = require("is-empty"); module.exports = function validateLoginInput(data) {
    let errors = {};// Convert empty fields to an empty string so we can use validator functions
    data.Username = !isEmpty(data.Username) ? data.Username : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    if (Validator.isEmpty(data.Username)) {
        errors.Username = "Email field is required";
    }
    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    } return {
        errors,
        isValid: isEmpty(errors)
    };
};