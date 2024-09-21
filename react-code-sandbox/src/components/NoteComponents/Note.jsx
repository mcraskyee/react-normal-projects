import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import React from "react";

const Note = ({ id, text, deleteNote }) => {
  return (
    <div className="note">
      <div className="note__body">{text}</div>
      <div className="note__footer" style={{ justifyContent: "flex-end" }}>
        <DeleteForeverOutlinedIcon
          className="note__delete"
          aria-hidden="true"
          onClick={() => deleteNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;
