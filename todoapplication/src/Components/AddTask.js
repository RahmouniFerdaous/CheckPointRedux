import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/actions";
import { Button } from "@material-ui/core";
import "./AddTask.css";

const AddTask = () => {
  const [input, setInput] = useState({
    description: "",
    isDone: false,
  });

  const dispatch = useDispatch();

  return (
    <div className="Input">
      <input
        name="description"
        placeholder="Write your Task"
        onChange={(e) => setInput({ ...input, description: e.target.value })}
      />

      <Button
        onClick={() => dispatch(addTodo(input))}
        size="small"
        color="primary"
      >
        Add
      </Button>
    </div>
  );
};

export default AddTask;
