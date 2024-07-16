import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: "69",
      todoMsg: "first todo",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (todo, id) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export function useTodo() {
  return useContext(TodoContext);
}
