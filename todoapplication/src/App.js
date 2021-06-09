import "./App.css";
import React, { useState } from "react";
import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";

function App() {
  const tasks = useSelector((state) => state);
  const [filter, setFilter] = useState("");

  const filterTodo = (list, filter) => {
    switch (filter) {
      case "done":
        return list.filter((elm) => elm.isDone);
      case "unDone":
        return list.filter((elm) => !elm.isDone);
      default:
        return list;
    }
  };

  return (
    <div className="App">
      <div className="App_Container">
        <div id="div1" className="App_todoContainer">
          <ListTask listTasks={filterTodo(tasks, filter)} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Button
              size="small"
              color="secondary"
              onClick={() => setFilter("done") /* filterDone() */}
            >
              {" "}
              Done{" "}
            </Button>
            <Button
              size="small"
              color="secondary"
              onClick={() => setFilter("unDone") /*  filterUnDone() */}
            >
              {" "}
              UnDone{" "}
            </Button>
            <Button
              size="small"
              color="secondary"
              onClick={() => setFilter("default") /*  filterUnDone() */}
            >
              {" "}
              All{" "}
            </Button>
          </div>
        </div>
        <AddTask />
      </div>
    </div>
  );
}

export default App;
