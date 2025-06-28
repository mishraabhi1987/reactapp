import React from "react";

const Note = (props) => {
  const handleDelete = () => {
    props.onClick(props.id);
  };

  return (
    <div className="webseries-card col-lg-3 col-md-4 col-sm-6 mb-4 d-flex align-items-stretch">
      <div
        className="card shadow-sm"
        style={{ borderTop: "5px solid #ffc107", width: "100%" }}
        id={props.id}
      >
        <div className="card-body d-flex flex-column">
          <h5 className="card-title" style={{ color: "#F4B400" }}>
            {props.title}
          </h5>
          <hr />
          <p className="card-text flex-grow-1">{props.content}</p>
          <div className="mt-auto text-end">
            <button className="btn btn-warning btn-sm btn-delete-hover" onClick={handleDelete}>
                            <span className="material-icons" style={{ fontSize: "1rem", verticalAlign: "middle" }}>delete</span>
                        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
