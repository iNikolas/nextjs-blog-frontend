import { Rule } from "effector-forms";

export const rules = {
  required: (): Rule<unknown> => ({
    name: "required",
    validator: (value) => ({
      isValid: value != null && value !== "",
      errorText: "This field is required",
    }),
  }),
  minLength: (min: number): Rule<string> => ({
    name: "minLength",
    validator: (value) => ({
      isValid: !value || value.length >= min,
      errorText: `Minimum length is ${min} characters`,
    }),
  }),
  maxLength: (max: number): Rule<string> => ({
    name: "maxLength",
    validator: (value) => ({
      isValid: !value || value.length <= max,
      errorText: `Maximum length is exceeded for ${
        max - value.length
      } characters`,
    }),
  }),
  isUrl: (): Rule<string> => ({
    name: "isUrl",
    validator: (value) => {
      let isValid = true;

      try {
        const url = new URL(value);
        if (url) {
          isValid = true;
        }
      } catch (_) {
        isValid = false;
      }
      return {
        isValid,
        errorText: "Please enter a valid URL",
      };
    },
  }),
};
