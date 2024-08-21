import { useEffect, useState } from "react";
import { TodoService } from "../services/TodoService";
import { FetchClient } from "../fetchClient/FetchClient";
import { TTodo } from "../types/TodoTypes";
export const useTodos = () => {
  const [todos, setTodos] = useState<TTodo[]>([]);
  const todoService = new TodoService(FetchClient);
  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await todoService.fetchTodos();
      todos !== undefined && setTodos(todos);
    };
    fetchTodos();
  }, []);

  const addTodos = async (todo: TTodo) => {
    await todoService.addTodos(todo);
    setTodos([...todos, todo]);
  };
  return { todos, addTodos };
};
