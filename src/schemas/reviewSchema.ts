import * as yup from "yup";

export const reviewSchema = yup.object({
  nickname: yup
    .string()
    .required("This field is required")
    .min(3, "At least 3 characters long"),
  country: yup.string().required("This field is required"),
  rating: yup
    .number()
    .required("This field is required")
    .typeError("Need to be a number")
    .max(5, "Maximum is 5")
    .min(0.5, "Minimum is 0.5"),
  text: yup.string().required("This field is required"),
});
