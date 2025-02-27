import React, { useEffect, useState } from 'react'

function Sidebar({showHandle,elements,editButton}) {


  return (
    <aside className='sidebar'>
        <ul className='texts'>
        <h2>YOUR PROJECTS</h2>
        <button onClick={showHandle}>Add Project</button>
        </ul>
        <div className='tasks'>
          {elements.map((element,index) =>(
            <ul key={index} className='task'>
              <h2 onClick={() => editButton(element.id)}>{element.title}</h2>
            </ul>
          ))}
        </div>
    </aside>
  )
}

export default Sidebar