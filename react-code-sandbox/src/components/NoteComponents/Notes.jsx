import React, { useState, useEffect } from "react";
import Note from "./Note";
import CreateNote from "./CreateNote";
import "../css/Note.css";
import { v4 as uuid } from "uuid";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputText, setInputText] = useState("");

  //get text and store in state
  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  //add new note to the state Array
  //如果需要在更新state时参考之前的state，可以在调用setState时传入一个callback作为参数
  //该callback会接受之前的状态作为参数，返回新的参数
  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText,
      },
    ]);
    setInputText("");
  };

  //delete note
  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  useEffect(() => {
    //if cannot find then return null from storage
    //to make sure data is an effective array
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (Array.isArray(data) && data.length > 0) {
      setNotes(data);
    }
    setLoading(false);
  }, []);

  //when notes are updated, put new notes to localStorage
  //but to make sure it works when it's not loading
  useEffect(() => {
    if (!loading) {
      localStorage.setItem("Notes", JSON.stringify(notes));
    }
  }, [notes, loading]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="notes">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          deleteNote={deleteNote}
        />
      ))}
      <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
    </div>
  );
};

export default Notes;
