import React, { useState } from "react";

export const EditTask = (props) => {
  const [title, setTitle] = useState(props.updatedArray.title);
  const [task, setTask] = useState(props.updatedArray.task);

  const tilteDataHandler = (event) => {
    setTitle(event.target.value);
  };

  const taskDataHandler = (event) => {
    setTask(event.target.value);
  };

  const updateFormHandler = (event) => {
    event.preventDefault();
    const data = {
      id: props.datas,
      title: title,
      task: task,
    };
    props.upDateFormData(data);
  };

  return (
    <div className="container mt-5 mb-3">
      <form onSubmit={updateFormHandler}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Title"
            defaultValue={props.updatedArray.title}
            onChange={tilteDataHandler}
            required
          />
        </div>
        <div className="form-group">
          <label>Task</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Task"
            defaultValue={props.updatedArray.task}
            onChange={taskDataHandler}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {"Update Task"}
        </button>
      </form>
    </div>
  );
};
