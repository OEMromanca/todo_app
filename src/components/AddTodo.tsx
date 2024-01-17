import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldProps } from "formik";
import { TodoContext } from "../contextApi/todoContext";
import { useNavigate } from "react-router-dom";
import { ITodo, TodoContextType } from "../interfaces/interfaces";
import { validationSchema } from "../utils/utils";
import CustomInput from "./CustomInput";
import CustomDatePicker from "./DatePicker";
import CustomButton from "./CustomButton";

const SubmitTodo = () => {
  const navigate = useNavigate();
  const { addTodo } = React.useContext(TodoContext) as TodoContextType;

  const initialValues: Omit<ITodo, "id"> = {
    title: "",
    description: "",
    deadline: "",
    completed: false,
  };

  const handleSubmit = React.useCallback(
    async (values: Omit<ITodo, "id">) => {
      try {
        await addTodo(values);
        navigate("/");
      } catch (error) {
        console.error("Error adding a new todo:", error);
      }
    },
    [addTodo, navigate]
  );

  return (
    <div className="bg-white shadow  rounded-lg w-3/5 p-10">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="flex h-full flex-col justify-center">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Add your tasks
            </h2>

            <div className="mt-5">
              <div className="space-y-2">
                <div>
                  <div className="block text-sm font-medium leading-6 text-gray-900">
                    Title:
                  </div>
                  <div className="mt-2">
                    <CustomInput
                      type="text"
                      name="title"
                      autoFocus={true}
                      placeholder="Add task"
                      className="title"
                    />

                    <ErrorMessage
                      name="title"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between ">
                    <div className="block text-sm font-medium leading-6 text-gray-900">
                      Description:
                    </div>
                  </div>
                  <div className="mt-2">
                    <CustomInput
                      as="textarea"
                      name="description"
                      placeholder="Add description"
                      className="description"
                      type="text"
                    />

                    <ErrorMessage
                      name="description"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="block text-sm font-medium leading-6 text-gray-900">
                      Date:
                    </div>
                  </div>
                  <div className="mt-2 mb-6">
                    <Field name="deadline">
                      {({
                        field,
                        form,
                      }: FieldProps<string, Omit<ITodo, "id">>) => (
                        <CustomDatePicker
                          name="deadline"
                          closeOnSelect={true}
                          value={field.value}
                          onChange={(date) =>
                            form.setFieldValue(field.name, date)
                          }
                        />
                      )}
                    </Field>
                    <ErrorMessage
                      name="deadline"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                </div>

                <CustomButton
                  type={"submit"}
                  text="Submit"
                  className="submit"
                />
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SubmitTodo;
