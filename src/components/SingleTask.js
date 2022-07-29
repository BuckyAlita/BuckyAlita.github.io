import React, { useState } from "react";

export const SingleTask = (props) => {

  const [isEditing, setIsEditing] = useState(true);
  //  console.log(props.singleData.id);
  const deleteHandler = () => {
      const Key =props.singleData.id;
      const getdata = props.datas.filter((val) => val.id !== Key);
      props.trackdata(getdata);
  }

  const editHandler = () => {
    const Key = props.singleData.id;
    const getdata = props.datas.find( val => val.id === Key);
    setIsEditing(() => {return false });
    console.log({...getdata, isEditing});
    props.editdata({...getdata, isEditing});
  }

  return (
    <>
      <div className="container card text-center mt-2">
        <div className="card-body">
          <h5 className="card-title">{props.singleData.title}</h5>
          <p className="card-text">
            {props.singleData.task}
          </p>
          <button className="btn btn-primary mr-3" onClick={editHandler}>Edit ✍</button>
          <button className="btn btn-danger" onClick={deleteHandler}>Delete ❌</button>
        </div>
      </div>
    </>
  );
};
