import React, { useContext } from "react";
import TodoSingle from "./TodoSingle";
import { TodoContext } from "../store/todo-context";
import classes from "./Todo.module.css";

// const Todos: React.FC<{ items: Todo[]; removeTodo: (id: string) => void }> = (
//   props
// ) => { // before using contex
const Todos: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoSingle
          removeTodo={todoCtx.removeTodo.bind(null, item.id)}
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
