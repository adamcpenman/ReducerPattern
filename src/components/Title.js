import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/title";

const Title = () => {
  // const [title, setTitle] = useState("The Reducer Pattern");
  const [newTitle, setNewTitle] = useState();
  // const [editing, setEditing] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = e => {
    setNewTitle(e.target.value);
  };

  const handleEdit = e => {
    e.preventDefault();
    // setEditing(!editing);
    dispatch({ type: "TOGGLE_EDITING" });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setNewTitle("");
    // setTitle(newTitle || title);
    // setEditing(false);
    dispatch({ type: "UPDATE_TITLE", payload: newTitle || state.title });
    dispatch({ type: "TOGGLE_EDITING" });
  };

  return (
    <div>
      {state.editing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="newTitle"
            placeholder={state.title}
            value={newTitle}
            onChange={handleChanges}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <h1>{state.title}</h1>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Title;
