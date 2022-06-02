/* eslint-disable no-template-curly-in-string */

import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "This field is required."
  },

  string: {
    min: "Minimum size: ${min} characters.",
    max: "Maximum size: ${max} characters.",
    email: "Provide a valid email."
  },

  array: {
    min: "You must select at least ${min}.",
    max: "You must select at most ${max}."
  },

  number: {
    max: "The value cannot be greater than ${max}.",
    min: "The value cannot be less than ${min}.",
    integer: "The value must be integer."
  }
});

export default Yup;
