import { createContext, useContext } from "react";

// Creating and initilize the context
const TodoContext = createContext({
  // this is just template on how context has objects and properities,
  todos: [
    {
      id: Number,
      todo: String,
      completed: Boolean,
    },
  ],
  addtodo: (todo) => {},
  updateContext: (id, todo) => {},
  deleteContext: (id) => {},
  toggleTodo: (id) => {},
});

// Assign to varaible todoProvider
export const TodoProvider = TodoContext.Provider;

// Custom hook which simplies calling usecontext hook in every file
export const useTodo = () => {
  return useContext(TodoContext);
};
