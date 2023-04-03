import React from "react";
import classes from "./TodoSingle.module.css";

const TodoSingle: React.FC<{ text: string; removeTodo: () => void }> = (
  props
) => {
  return (
    <li onClick={props.removeTodo} className={classes.item}>
      {props.text}
    </li>
  );
};

export default TodoSingle;
