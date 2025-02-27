import React from 'react'
import logo from "../assets/logo.png";

function MainDiv({showHandle}) {
  return (
    <div className="project">
    <img src={logo} />
    <h2>No Project Selected</h2>
    <p>Select a project or get started with new one</p>
    <button onClick={showHandle}>Create new project</button>
  </div>
  )
}

export default MainDiv