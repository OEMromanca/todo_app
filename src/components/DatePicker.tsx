import React from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { Moment } from "moment";
import { formatDate } from "../utils/utils";
import { DatePickerProps } from "../interfaces/interfaces";

const CustomDatePicker: React.FC<DatePickerProps> = ({
  name,
  value,
  onChange,
  closeOnSelect,
}) => {
  const formattedValue = formatDate(value);

  return (
    <Datetime
      inputProps={{
        name,
        className:
          "block w-100 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2",
        placeholder: "Select a date",
      }}
      dateFormat="DD-MM-YYYY"
      timeFormat={false}
      value={formattedValue}
      onChange={(date) => onChange(date as Moment)}
      closeOnSelect={closeOnSelect}
    />
  );
};

export default CustomDatePicker;
