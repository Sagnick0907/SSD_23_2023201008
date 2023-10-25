const Validator = require("validator");
const isEmpty = require("is-empty"); module.exports = function validateDateInput(data) {
    let errors = {};// Convert empty fields to an empty string so we can use validator functions
    data.date = !isEmpty(data.date) ? data.date : "";
    if (Validator.isEmpty(data.date)) {
        errors.date = "Date field is required";
    }
    // Password checks
    if (data.date > Date.now) {
        errors.date = "You cannot set To-do for past";
    } return {
        errors,
        isValid: isEmpty(errors)
    };
};