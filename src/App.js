import React, { useState } from "react";
import "./App.css";
import { Task } from "./components/Task";
import { CreateTask } from "./components/CreateTask";

let initialData = [
  {
    id: 5,
    title: "Title Sample 1",
    task: "Let's create some task",
  },
];

function App() {
  const [data, setData] = useState(initialData);

  const formDataHandler = (datas) => {
      setData((prev) => {
      return [...prev, datas];
    })
  };
 const changedataAfterDelete = (val) =>
 {
  setData(()=>
  {
    return [...val];
  })
 }

  // useEffect(() => {
  //   //use of local storage
  //   localStorage.setItem("data", JSON.stringify(data));
  //   console.log(JSON.parse(localStorage.getItem("data")));
  // }, [data]);

  return (
    <div className="App">
      <CreateTask FormData={formDataHandler}/>
      <Task data={data} removedata={changedataAfterDelete}/>
    </div>
  );
}

export default App;
