import React from "react";
import { useState,useRef} from "react";
import "./css/creating.css";
import Sidebar from "./Sidebar";
import Form from "./Form";
import EditMenu from "./EditMenu";
import MainDiv from "./MainDiv";
import Modal from "./Modal";

function Createing() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    project: [],
  });

  const [editElements, setEditElements] = useState([]);
  const [elements, setElements] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState();
  const [task, setTask] = useState("");
  const openRef = useRef()

  const showHandle = () => {
    setProjectsState((prevElement) => {
      return {
        ...prevElement,
        selectedProject: null,
      };
    });
  };

  const cancelButton = () => {
    setProjectsState((prevElement) => {
      return {
        ...prevElement,
        selectedProject: undefined,
      };
    });
  };
  const saveButton = () => { 
    if(title.trim() === "" || description.trim() === "" || date === ""){
      openRef.current.showModal()
    }else{
      setProjectsState((prevElement) => {
        return {
          ...prevElement,
          selectedProject: undefined,
        };
      });
      const updatedElements = {
        id: elements.length + 1,
        title: title,
        description: description,
        date: date,
      };
      setElements((prevElements) => [...prevElements, updatedElements]);
    }    
  };

  const editButton = (id) => {
    setProjectsState(prevElement =>{
      return{...prevElement,selectedProject:"edit"}
    })
    const findedElements = elements.find((element) => element.id === id);
    setEditElements([findedElements]);
  };

  const addTask = (id) => {
    setElements((prevElement) =>
      prevElement.map((element) =>
        element.id === id ? { ...element, task } : element
      )
    );
    setEditElements((prevElement) =>
      prevElement.map((element) =>
        element.id === id ? { ...element, task } : element
      )
    );
  };
  const deleteTask = (id) => {
    setElements((prevElement) =>
      prevElement.filter((element) => element.id !== id)
    );
    setProjectsState(prevElement =>{
      return{...prevElement,selectedProject:undefined}
    })
  };

  let content;

  if (projectsState.selectedProject === undefined) {
    content = <MainDiv showHandle={showHandle} />;
  } else if (projectsState.selectedProject === null) {
    content = (
      <Form
        onDate={setDate}
        onDescription={setDescription}
        onTitle={setTitle}
        saveButton={saveButton}
        cancelButton={cancelButton}
      />
    );
  } else if (projectsState.selectedProject === "edit") {
    content = (
      <EditMenu
        editElements={editElements}
        setTask={setTask}
        addTask={addTask}
        task={task}
        deleteTask={deleteTask}
        elements={elements}
      />
    );
  }



  return (
    <>
      <Sidebar
        showHandle={showHandle}
        elements={elements}
        editButton={editButton}
      />
      {content}
      <Modal ref={openRef}/>
    </>
  );
}

export default Createing;
