import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodosAsync } from "../redux/todoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value) {
      dispatch(addTodosAsync({ title: value }));
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="block w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:reign-1 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border-transparent border rounded-md shadow-sm text-md uppercase font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
      >
        Add Todos
      </button>
    </form>
  );
};

export default AddTodoForm;
