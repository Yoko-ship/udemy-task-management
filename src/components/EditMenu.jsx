import React, { useEffect } from "react";
import "./css/menu.css";

function EditMenu({
  editElements,
  setTask,
  addTask,
  task,
  deleteTask,
}) {
  return (
    <div className="proj">
      {editElements.map((element, index) => (
        <div key={index} className="info">
          <h2>Title: {element.title}</h2>
          <p>Date: {element.date}</p>
          <p>Description: {element.description}</p>
          <p>Task: {element.task}</p>
          <hr></hr>
          <div className="del-btn">
            <button onClick={() => deleteTask(element.id)}>Delete</button>
          </div>
          <div className="task-info">
            <h2>Tasks</h2>
            <input
              type="text"
              placeholder="Task Title"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
            <button onClick={() => addTask(element.id)}>Add task</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EditMenu;
