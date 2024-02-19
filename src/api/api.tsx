import axios from "axios";
import { ITodo } from "../interfaces/interfaces";

const apiURL = "https://6532520fd80bd20280f5552c.mockapi.io/api/todos";

export const getPaginatedTodosAPI = (page: number, limit: number) => {
  const params = new URLSearchParams();
  params.append("page", String(page));
  params.append("limit", String(limit));

  return axios.get(`${apiURL}?${params.toString()}`);
};

export const getPaginatedActiveTodosAPI = (page: number, limit: number) => {
  const params = new URLSearchParams();
  params.append("page", String(page));
  params.append("limit", String(limit));
  params.append("completed", "false");

  return axios.get(`${apiURL}?${params.toString()}`);
};

export const getPaginatedCompletedTodosAPI = (page: number, limit: number) => {
  const params = new URLSearchParams();
  params.append("page", String(page));
  params.append("limit", String(limit));
  params.append("completed", "true");

  return axios.get(`${apiURL}?${params.toString()}`);
};

export const getAllTodosAPI = () => {
  return axios.get(`${apiURL}`);
};

export const addTodoAPI = (todo: Omit<ITodo, "id">) => {
  return axios.post(`${apiURL}`, todo);
};

export const updateTodoAPI = (todo: ITodo) => {
  return axios.put(`${apiURL}/${todo.id}`, todo);
};

export const getTodoByIdAPI = (id: string) => {
  return axios.get(`${apiURL}/${id}`);
};

export const toggleCompletedTodoAPI = (todo: ITodo) => {
  const todoUpdate: Pick<ITodo, "completed"> = {
    completed: !todo.completed,
  };
  return axios.put(`${apiURL}/${todo.id}`, todoUpdate);
};

export const deleteTodoAPI = (id: string) => {
  return axios.delete(`${apiURL}/${id}`);
};
