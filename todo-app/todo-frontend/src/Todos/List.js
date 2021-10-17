import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <>
      {todos
        .map((todo) => {
          return (
            <Todo
              todo={todo}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
              key={todo._id}
            />
          );
        })
        .reduce((acc, cur, idx) => [...acc, <hr key={idx} />, cur], [])}
    </>
  );
};

export default TodoList;
