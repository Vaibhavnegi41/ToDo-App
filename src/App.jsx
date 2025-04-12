import NavBar from "./components/NavBar"
import Carousel from "./components/Carousel"
import TodoSection from "./components/TodoSection"
import Footer from "./components/Footer"
import AddTaskModal from "./components/AddTaskModal"

import { useState } from "react"


function App() {
  const ToDo = JSON.parse(localStorage.getItem("todosList")) || [];
  const [todos,setTodos]=useState(ToDo);
  const [isOpen,setIsOpen]=useState(false);

  function openModel(){
    setIsOpen(true);
  }
  function closeModel(){
    setIsOpen(false);
  }
  

  

  return (
    <div>

      {isOpen && <AddTaskModal closeModel={closeModel} setTodos={setTodos}/>}
      
      <NavBar/>
      
      <TodoSection openTheModal={openModel} todos={todos} setTodos={setTodos}/>
      <Footer/>
    </div>
  )
}

export default App
