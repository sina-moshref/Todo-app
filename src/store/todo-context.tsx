import React, { useState } from "react";

import Todo from "../models/todo";

type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodoContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

interface Props {
  children: React.ReactNode;
}

const TodoContextProvider: React.FC<Props> = (props) => {
  const [TodoList, setTodoList] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodoList((prev) => {
      return prev.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodoList((prev) => {
      return prev.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodoContextObj = {
    items: TodoList,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
