import React from "react";
import { SingleTask } from "./SingleTask";

export const Task = (props) => {
  const backdata = (val) => {
    console.log(val);
    props.removedata(val);
  };

  const editdataback = (val) => {
    console.log(val);
    props.editdata(val);
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
            editdata={editdataback}
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
