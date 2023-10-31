import axios from "axios";
import { ITodo } from "../interfaces/interfaces";

const apiURL = "https://6532520fd80bd20280f5552c.mockapi.io/api/todos";

export const getTodosAPI = async () => {
  return await axios.get(`${apiURL}`);
};

export const addTodoAPI = async (todo: Omit<ITodo, "id">) => {
  return await axios.post(`${apiURL}`, todo);
};

export const updateTodoAPI = async (todo: ITodo) => {
  return await axios.put(`${apiURL}/${todo.id}`, todo);
};

export const getTodoByIdAPI = async (id: string) => {
  return await axios.get(`${apiURL}/${id}`);
};

export const toggleCompletedTodoAPI = async (todo: ITodo) => {
  const todoUpdate: Pick<ITodo, "completed"> = {
    completed: !todo.completed,
  };
  return await axios.put(`${apiURL}/${todo.id}`, todoUpdate);
};

export const deleteTodoAPI = async (id: string) => {
  return await axios.delete(`${apiURL}/${id}`);
};
