import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCompleteAsync, deleteTodoAsync } from "../redux/todoSlice";

import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const handleCompletedClick = () => {
    dispatch(
      toggleCompleteAsync({
        id,
        completed: !completed,
      })
    );
  };
  const handleDeleteClick = () => {
    dispatch(deleteTodoAsync({ id: id }));
  };

  return (
    <li
      className={`flex w-full border border-gray-300 px-5 py-5 rounded-lg shadow-sm hover:shadow-md delay-200 ${
        completed && "bg-indigo-50"
      }`}
    >
      {/* flex w-full border border-gray-300 px-5 py-5 rounded-lg shadow-sm */}
      <span className="flex mr-auto items-center justify-center">
        <input
          type="checkbox"
          className="text-lg"
          checked={completed}
          onClick={handleCompletedClick}
        />
        <p
          className={`leading-none text-lg ml-3 ${
            completed && "text-indigo-600"
          } `}
        >
          {title}
        </p>
      </span>
      <FiEdit
        className="text-lg text-green-300 mr-3 hover:text-opacity-25 "
        type="button"
      />
      <FaRegTrashAlt
        className="text-red-600 text-lg hover:opacity-25"
        type="button"
        onClick={handleDeleteClick}
      />
    </li>
  );
};

export default TodoItem;
