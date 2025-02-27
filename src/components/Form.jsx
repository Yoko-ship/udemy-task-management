import React from "react";
import "./css/form.css"

function Form({onTitle,onDescription,onDate,saveButton,cancelButton}) {
  return (
    <div className="form">
      <form>
        <div className="btns">
            <button className="cancel" type="button" onClick={cancelButton}>Cancel</button>
            <button className="save" type="button" onClick={saveButton}>Save</button>
        </div>
        <label>TITLE</label>
        <input type="text" onChange={(e) => onTitle(e.target.value)}/>
        <label>DESCRIPTION</label>
        <textarea onChange={(e) => onDescription(e.target.value)}></textarea>
        <label>DUE DATE</label>
        <input type="date" onChange={(e) => onDate(e.target.value)}/>
      </form>
    </div>
  );
}

export default Form;
