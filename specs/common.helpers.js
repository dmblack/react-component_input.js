
let maxLength = value => {
  return value.length <= 10;
};

let minLength = value => {
  return value.length > 0;
};

let greaterThanZero = {
  callback: minLength,
  errorMessage:
    "Your input is too short. Expecting anything longer than 0"
};

let lessThanTen = {
  callback: maxLength,
  errorMessage:
    "Your input is too long. Expecting anything less than 10 characters long."
};

const CommonValidation = {
  greaterThanZero,
  lessThanTen,
  minLength,
  maxLength,
}

module.exports = CommonValidation;
