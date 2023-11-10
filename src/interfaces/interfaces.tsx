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

export type AppContextType = {
  paginatedTodos: ITodo[];
  loading: boolean;
  todos: ITodo[];
  fetchPaginatedTodos: (
    countPage: number,
    limitPaginationNumber: number
  ) => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  limitPaginationNumber: number;
  setPaginatedTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  handleButtonClick: (route: string) => void;
  getSelectedButton: (value: string) => void;
  paginationArray: number[];
  selectedButton: string;
};

export type PaginationContextType = {
  handleClickPage: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handlePreviousClick: () => void;
  handleNextClick: () => void;
  maxPageNumberLimit: number;
  minPageNumberLimit: number;
  rightSideHorizontalDots?: React.ReactNode;
  leftSideHorizontalDots?: React.ReactNode;
};

export type TodoContextType = {
  addTodo: (
    newTodo: Omit<ITodo, "id">
  ) => Promise<AxiosResponse<ITodo | undefined>>;
  updateTodo: (todo: ITodo) => Promise<AxiosResponse<ITodo>>;
  deleteTodo: (id: string) => Promise<AxiosResponse<void>>;
  getTodoById: (id: string) => Promise<ITodo | undefined>;
  toggleCompletedTodo: (todo: ITodo) => Promise<AxiosResponse<ITodo>>;
  searchTodos: (searchTerm: string) => void;
  completedTodos: ITodo[];
  activeTodos: ITodo[];
  searchTodo: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

export interface NavigationButtons {
  to: string;
  text: string;
}

export interface NavigationButtonProps extends NavigationButtons {
  selected: boolean;
  onClick: () => void;
}
