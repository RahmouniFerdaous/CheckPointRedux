import React from "react";
import Task from "./Task";

const ListTask = ({listTasks}) => {
  return (
    <div>
      <p>
        {listTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
            />
          ))
        }
      </p>
    </div>
  );
};

export default ListTask;





