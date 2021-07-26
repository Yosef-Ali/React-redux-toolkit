import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const completedTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );
  return (
    <div className="">
      Total Complete Items
      <span className="text-xs px-3 bg-pink-200 text-pink-800 rounded-full leading-none ml-3 py-2 text-lg">
        {completedTodos.length}
      </span>
    </div>
  );
};

export default TotalCompleteItems;
