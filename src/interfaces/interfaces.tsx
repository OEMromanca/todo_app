import { AxiosResponse } from "axios";
import { Moment } from "moment";
import { inputClassNames } from "../components/CustomInput";
import { buttonClassNames } from "../components/CustomButton";

export interface ITodo {
  id: string;
  title: string;
  description: string;
  deadline: string;
  completed: boolean;
}
export type TodoContextType = {
  loading: boolean;
  todos: ITodo[];
  addTodo: (
    newTodo: Omit<ITodo, "id">
  ) => Promise<AxiosResponse<{}, ITodo | undefined>>;
  updateTodo: (todo: ITodo) => Promise<AxiosResponse>;
  deleteTodo: (id: string) => Promise<AxiosResponse>;
  getTodoById: (id: string) => Promise<ITodo | undefined>;
  toggleCompletedTodo: (todo: ITodo) => Promise<AxiosResponse>;
  searchTodos: (searchTerm: string) => void;
  completedTodos: ITodo[];
  activeTodos: ITodo[];
};

export interface IProps {
  todo: ITodo;
}

export interface DatePickerProps {
  name: string;
  value: string;
  onChange: (date: Moment) => void;
  closeOnSelect?: boolean;
}

export type InputNames = "title" | "description";

export interface IInputProps {
  name: InputNames;
  placeholder?: string;
  className: keyof typeof inputClassNames;
  autoFocus?: boolean;
  type: "text";
  as?: "textarea";
  style?: React.CSSProperties;
}

export type ButtonType = "button" | "submit" | "reset" | undefined;

export interface IButtonProps {
  type: ButtonType;
  onClick?: () => void;
  text?: string;
  className: keyof typeof buttonClassNames;
}

export interface IToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}
