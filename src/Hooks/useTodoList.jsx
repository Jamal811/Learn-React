import React, { useState } from "react";

const useTodoList = (initialList) => {
  const [list, setList] = useState(initialList);

  const addTodo = (todo) => {
    setList([...list, todo]);
  };

  const removeTodo = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return {
    list,
    addTodo,
    removeTodo,
  };
};

export default useTodoList;
