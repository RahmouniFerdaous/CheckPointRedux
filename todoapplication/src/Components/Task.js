import React, { useState } from "react";
import "./Task.css";
import { Checkbox, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { updateToDo, deleteToDo, toogleToDo } from "../Redux/actions";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  return (
    <div className="todoItem">
      <Checkbox
        checked={task.isDone}
        onChange={() => dispatch(toogleToDo(task.id))}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      {editable ? (
        <input
          type="text"
          className="form-control"
          value={newDescription}
          onChange={(e) => {
            setNewDescription(e.target.value);
          }}
        />
      ) : (
        <p style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
          {task.description}
        </p>
      )}
      <Button
        size="small"
        color="primary"
        onClick={() => {
          dispatch(updateToDo({ ...task, description: newDescription }));
          if (editable) {
            setNewDescription(task.description);
          }
          setEditable(!editable);
        }}
      >
        {editable ? "Update" : "Edit"}
      </Button>
      <Button
        size="small"
        color="secondary"
        onClick={() => dispatch(deleteToDo(task.id))}
      >
        Delete
      </Button>
    </div>
  );
};

export default Task;
