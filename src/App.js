import React, { useState } from "react";
import "./App.css";
import { Task } from "./components/Task";
import { CreateTask } from "./components/CreateTask";
import { EditTask } from "./components/EditTask";

let initialData = [
  
];

function App() {
  const [data, setData] = useState(initialData);
  const [editID, setEditId] = useState(null);
  const [flag, setFlag] = useState(false);
  const [ArrayUpdated, setUpdatedArray] = useState([]);

  const formDataHandler = (datas) => {
    setData((prev) => {
      return [...prev, datas];
    });
  };
  const changedataAfterDelete = (val) => {
    setData(() => {
      return [...val];
    });
  };

  const editdatahandler = (key, flag, getUpdatedData) => {
    setEditId(() => {
      return key;
    });
    setFlag(() => {
      return true;
    });
    setUpdatedArray(() => {
      return { ...getUpdatedData };
    });
  };

  const upDateFormDataHandler = (updatedData) => {
    const datas = data.find((val) => val.id === updatedData.id);
    if (!datas) {
      data.push(updatedData);
    } else {
      datas.title = updatedData.title;
      datas.task = updatedData.task;
    }
    setFlag(() => {
      return false;
    });
  };

  // useEffect(() => {
  //   //use of local storage
  //   localStorage.setItem("data", JSON.stringify(data));
  //   console.log(JSON.parse(localStorage.getItem("data")));
  // }, [data]);

  return (
    <div className="App">
      {flag ? (
        <EditTask
          datas={editID}
          data={data}
          updatedArray={ArrayUpdated}
          upDateFormData={upDateFormDataHandler}
        />
      ) : (
        <CreateTask FormData={formDataHandler} />
      )}
      <Task
        data={data}
        removedata={changedataAfterDelete}
        editDataBack={editdatahandler}
      />
    </div>
  );
}

export default App;
