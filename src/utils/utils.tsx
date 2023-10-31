import { format, isValid, parseISO } from "date-fns";
import * as Yup from "yup";

export function formatDate(date: Date | string | undefined): string {
  if (!date) {
    console.warn("formatDate is not expecting a null value");
    return "";
  }

  if (typeof date === "string") {
    const parsedDate = parseISO(date);
    if (isValid(parsedDate)) {
      return format(parsedDate, "d MMMM yyyy");
    }
  } else if (date instanceof Date) {
    if (isValid(date)) {
      return format(date, "d MMMM yyyy");
    }
  }

  console.warn("Invalid date value:", date);
  return "";
}

export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters")
    .max(50, "Title must not exceed 50 characters"),
  deadline: Yup.date().required("Deadline is required"),
  description: Yup.string()
    .required("Description is required")
    .max(255, "Description must not exceed 255 characters"),
});
