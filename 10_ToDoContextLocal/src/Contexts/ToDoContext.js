import { createContext,useContext } from "react";

export const TodoContext = createContext({
  todos:[  //isme hum dekhte h kya kya method h aur kya kya values h
    {
      id:1,
      todo: "todo msg",
      completed: false ,
    }
  ],
  addTodo: (todo) => {},
  updateTodo:(id,todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {}
})

export const useTodo =() => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider