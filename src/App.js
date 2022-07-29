import React, { useEffect, useState } from "react";
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
  const [EditArray, setEditArray] = useState([]);

  const formDataHandler = (datas) => {

    // data.find(value => value.id === datas.id) === true ? (
    // setData((prev) => {
    //   return [...prev, datas];
    // })): (
      setData((prev) => {
      return [...prev, datas];
    })
  };
 const changedata = (val) =>
 {
  setData(()=>
  {
    return [...val];
  })
 }

 const changeEditData = (val) => {
    // console.log(val);
    setEditArray(val)
 }
  // useEffect(() => {
  //   //use of local storage
  //   localStorage.setItem("data", JSON.stringify(data));
  //   console.log(JSON.parse(localStorage.getItem("data")));
  // }, [data]);

  function removeDuplicates(data, key) {
  
    return [
      ...new Map(data.map(item => [key(item), item])).values()
    ]
  
  };

  console.log(removeDuplicates(data, item => item.key))

  return (
    <div className="App">
      <CreateTask FormData={formDataHandler} sendEditData = {EditArray}/>
      <Task data={data} removedata={changedata} editdata={changeEditData}/>
      {/* <Task /> */}
    </div>
  );
}

export default App;
