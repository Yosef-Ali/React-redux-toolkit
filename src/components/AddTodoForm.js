import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodosAsync } from "../redux/todoSlice";
const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (value) {
      dispatch(addTodosAsync({ title: value }));
    }
  };
  return (
    <form onSubmit={onSubmit} className="form-inline mt-5 mb-4">
      <div className="input-group ">
        <input
          type="text"
          className="form-control "
          placeholder="Add todo..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button className="btn btn-outline-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddTodoForm;
