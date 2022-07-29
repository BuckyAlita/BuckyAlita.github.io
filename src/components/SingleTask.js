import React, { useState } from "react";

export const SingleTask = (props) => {
  const [editFlag, setEditFlag] = useState(false);
  const deleteHandler = () => {
    const Key = props.singleData.id;
    const getdata = props.datas.filter((val) => val.id !== Key);
    props.trackdata(getdata);
  };

  const editHandler = () => {
    const Key = props.singleData.id;
    const getUpdatedData = props.datas.find((val) => val.id === Key);
    setEditFlag(true);
    props.EditDataBack(Key, editFlag, getUpdatedData);
  };

  return (
    <>
      <div className="container card text-center mt-2">
        <div className="card-body">
          <h5 className="card-title">{props.singleData.title}</h5>
          <p className="card-text">{props.singleData.task}</p>
          <button className="btn btn-primary mr-3" onClick={editHandler}>
            Edit ✍
          </button>
          <button className="btn btn-danger" onClick={deleteHandler}>
            Delete ❌
          </button>
        </div>
      </div>
    </>
  );
};
