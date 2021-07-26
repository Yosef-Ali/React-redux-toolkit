import React from "react";
import { useDispatch } from "react-redux";
import { toggleCompleteAsync, deleteTodoAsync } from "../redux/todoSlice";

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
      className={`list-group-item  ${completed && "list-group-item-success"}`}
    >
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center ">
          <input
            type="checkbox"
            className="form-check-input me-3"
            checked={completed}
            onClick={handleCompletedClick}
          />
          {title}
        </span>
        <button className="btn btn-outline-danger" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
