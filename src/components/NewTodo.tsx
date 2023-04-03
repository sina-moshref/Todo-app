import React, { useRef, useContext } from "react";
import { TodoContext } from "../store/todo-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;

    if (enteredText.trim().length === 0) return;
    todoCtx.addTodo(enteredText);
    inputRef.current!.value = "";
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input ref={inputRef} id="text" type="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
