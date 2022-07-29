import React, { useEffect, useState } from "react";
import "./CreateTask.css";

export const CreateTask = (props) => {
  // const {isEditing,title,task}= props.sendEditData;
  // console.log(isEditing);

  // const {isEditing, editData} = { props.sendEditData.isEditing, ...props.sendEditData}

  // const titles = props.sendEditData.title;
  // const tasks = props.sendEditData.task;
  const { isEditing, ...datas } = props.sendEditData;
  // console.log(props.sendEditData.title);

  // console.log(isEditing);
  // console.log(datas);

  // var initialTitle = ""
  // var initialTask = ""

  // useEffect(()=>  {
  //   initialTitle = datas.title
  //   initialTask = datas.task
  // }, [isEditing])

  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");

  // useEffect(()=>
  // {

  // },[title,task])

  // console.log(props.sendEditData);

  const tilteDataHandler = (event) => {
    isEditing ? setTitle(datas.title) : setTitle(event.target.value)
  };

  const taskDataHandler = (event) => {
    isEditing ? setTask(datas.task) : setTask(event.target.value)
  };

  const formDataHandle = (event) => {
    event.preventDefault();
    console.log(title, task);

    const data = {
      id: Math.floor(Math.random() * 10),
      title: title,
      task: task,
    };


    isEditing ? props.FormData(datas) : props.FormData(data);

    console.log("datas - ", datas);
    console.log("data- ", data);

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
            // value={title}
            value={isEditing ? datas.title : title}
          />
        </div>
        <div className="form-group">
          <label>Task</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Task"
            onChange={taskDataHandler}
            // value={task}
            value={isEditing ? datas.task : task}
          />
        </div>
        <p>{title}</p>
        <button type="submit" className="btn btn-success">
          {isEditing ? "Update Task" : "Create Task"}
        </button>
      </form>
    </div>
  );
};
