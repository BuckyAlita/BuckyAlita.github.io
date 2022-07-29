import React, { useState } from "react";
import "./CreateTask.css";

export const CreateTask = (props) => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");

  const tilteDataHandler = (event) => {
    setTitle(event.target.value);
  };

  const taskDataHandler = (event) => {
    setTask(event.target.value);
  };

  const formDataHandle = (event) => {
    event.preventDefault();

    const data = {
      id: Math.floor(Math.random() * 10),
      title: title,
      task: task,
    };

    props.FormData(data);

    setTitle("");
    setTask("");
  };
  return (
    <div className="container mt-5 mb-3">
      <form onSubmit={formDataHandle}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Title"
            onChange={tilteDataHandler}
            value={title}
          />
        </div>
        <div className="form-group">
          <label>Task</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Task"
            onChange={taskDataHandler}
            value={task}
          />
        </div>
        <button type="submit" className="btn btn-success">
          {"Create Task"}
        </button>
      </form>
    </div>
  );
};
