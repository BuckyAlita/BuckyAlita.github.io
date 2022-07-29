import React from "react";
import { SingleTask } from "./SingleTask";

export const Task = (props) => {
  const backdata = (val) => {
    console.log(val);
    props.removedata(val);
  };

  const editTrackData = (key, flag, getUpdatedData) => {
    console.log(key, flag);
    props.editDataBack(key, flag, getUpdatedData);
  };

  return (
    <div>
      {props.data.map((taskData) => {
        return (
          <SingleTask
            singleData={taskData}
            key={taskData.id}
            datas={props.data}
            trackdata={backdata}
            EditDataBack={editTrackData}
          />
        );
      })}
    </div>
  );
};

// export const Task = () => {
//     console.log("in subtask", JSON.parse(localStorage.getItem("data")));

//     return (
//       <div>
//         {(JSON.parse(localStorage.getItem("data"))).map((taskData) => {
//           return <SingleTask singleData={taskData} key={taskData.id} />;
//         })}
//       </div>
//     );
//   };
