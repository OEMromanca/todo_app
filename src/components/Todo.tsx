import React from "react";
import { TodoContext } from "../context/todoContext";
import { Formik, Form, ErrorMessage } from "formik";
import "react-datetime/css/react-datetime.css";
import { ChevronLeftIcon, ChevronDownIcon } from "@heroicons/react/outline";
import CustomButton from "./CustomButton";
import CustomSwitch from "./ToggleSwitch";
import CustomInput from "./CustomInput";
import CustomDatePicker from "./DatePicker";
import { formatDate, validationSchema } from "../utils/utils";
import { IProps, TodoContextType } from "../interfaces/interfaces";

const Todo: React.FC<IProps> = ({ todo }) => {
  const { toggleCompletedTodo, updateTodo, getTodoById, deleteTodo } =
    React.useContext(TodoContext) as TodoContextType;

  const [editTodo, setEditTodo] = React.useState(false);
  const [isPanelOpen, setPanelOpen] = React.useState(false);

  const initialValues = {
    title: todo.title,
    description: todo.description,
    deadline: todo.deadline,
    completed: todo.completed,
  };

  const toggleEdit = () => {
    setEditTodo((current) => !current);
  };

  const togglePanel = () => {
    setPanelOpen((current) => !current);
  };

  const getTodo = (id: string) => {
    getTodoById(id).then(() => {
      toggleEdit();
    });
  };

  return (
    <div key={todo.id} className="p-2 border rounded-lg mb-2 bg-white w-full">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          const updatedTodo = { ...todo, ...values };
          updateTodo(updatedTodo).then(() => {
            toggleEdit();
            setSubmitting(false);
          });
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            {!editTodo ? (
              <div className="divide-y divide-gray-100">
                <div className="px-2 py-3 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-0">
                  <div className="font-bold text-sm font-large leading-6 text-gray-900 ml-2 sm:col-span-2">
                    Title:
                  </div>
                  <div
                    className="mt-1 text-sm leading-4 text-gray-700 sm:col-span-8"
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                    }}
                  >
                    {todo.title}
                  </div>
                  <div className="flex justify-between sm:col-span-2 ml-2">
                    <button type="button" onClick={togglePanel}>
                      {!isPanelOpen ? (
                        <ChevronLeftIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <ChevronDownIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </button>

                    <CustomSwitch
                      checked={values.completed}
                      onChange={(checked) => {
                        setFieldValue("completed", checked);
                        toggleCompletedTodo(todo);
                      }}
                    />
                  </div>
                </div>

                {isPanelOpen && (
                  <>
                    <div className="px-2 py-3 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-0">
                      <div className="font-bold text-sm font-large leading-6 text-gray-900 ml-2 sm:col-span-2">
                        Description:
                      </div>
                      <div
                        className="mt-1 text-sm leading-4 text-gray-700 sm:col-span-9"
                        style={{
                          textDecoration: todo.completed
                            ? "line-through"
                            : "none",
                        }}
                      >
                        {todo.description}
                      </div>
                    </div>

                    <div className="px-2 py-3 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-0">
                      <div className="font-bold text-sm font-large leading-6 text-gray-900 ml-2 sm:col-span-2">
                        Date & time:
                      </div>
                      <div
                        className="mt-1 text-sm leading-4 text-gray-700 sm:col-span-9"
                        style={{
                          textDecoration: todo.completed
                            ? "line-through"
                            : "none",
                        }}
                      >
                        {formatDate(todo.deadline)}
                      </div>
                    </div>
                    <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <div className="flex py-2 pl-2 pr-3 text-sm leading-6">
                        <CustomButton
                          type={"button"}
                          className="remove"
                          text="Remove"
                          onClick={() => deleteTodo(todo.id)}
                        />

                        <CustomButton
                          type={"button"}
                          className="edit"
                          text="Edit"
                          onClick={() => getTodo(todo.id)}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <>
                <div className="m-2">
                  <div className="font-bold text-sm font-large leading-6 text-gray-900 sm:col-span-2">
                    Title:
                  </div>
                  <CustomInput
                    type="text"
                    name="title"
                    style={{
                      textDecoration: values.completed
                        ? "line-through"
                        : "none",
                    }}
                    className="title"
                  />

                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-red-600"
                  />
                </div>

                <div className="m-2">
                  <div className="font-bold text-sm font-large leading-6 text-gray-900   sm:col-span-2">
                    Description:
                  </div>
                  <CustomInput
                    as="textarea"
                    name="description"
                    placeholder="Add description"
                    className="description"
                    type="text"
                    style={{
                      textDecoration: values.completed
                        ? "line-through"
                        : "none",
                    }}
                  />

                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-600"
                  />
                </div>
                <div className="m-2">
                  <div className="font-bold text-sm font-large leading-6 text-gray-900  sm:col-span-2">
                    Date:
                  </div>
                  <CustomDatePicker
                    name="deadline"
                    closeOnSelect={true}
                    value={todo.deadline}
                    onChange={(date) => {
                      setFieldValue("deadline", date);
                    }}
                  />

                  <ErrorMessage
                    name="deadline"
                    component="div"
                    className="text-red-600"
                  />
                </div>

                <div className="flex items-center space-x-2 ml-2 mb-2">
                  <div className="mt-2 space-x-2">
                    <CustomButton
                      type={"submit"}
                      className="confirm"
                      text="Confirm"
                    />

                    <CustomButton
                      type={"button"}
                      onClick={toggleEdit}
                      className="cancel"
                      text="Cancel"
                    />
                  </div>
                </div>
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Todo;
