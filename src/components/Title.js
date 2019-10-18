import React, { useState } from "react";

const Title = () => {
  const [title, setTitle] = useState("The Reducer Pattern");
  const [newTitle, setNewTitle] = useState();
  const [editing, setEditing] = useState(false);

  const handleChanges = e => {
    setNewTitle(e.target.value);
  };

  const handleEdit = e => {
    e.preventDefault();
    setEditing(!editing);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setNewTitle("");
    setTitle(newTitle || title);
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="newTitle"
            placeholder={title}
            value={newTitle}
            onChange={handleChanges}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <h1>{title}</h1>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Title;
