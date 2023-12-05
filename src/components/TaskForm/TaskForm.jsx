import React, { useState } from 'react'
import './TaskForm.css'
import { v4 as uuidv4 } from 'uuid';
import { TiPlus } from "react-icons/ti";

const TaskForm = ({addTask}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  }

  const handleCloseModal = () => {
    setIsOpen(false);
  }

  const handleSubmitTask = (e) => {
    e.preventDefault() //para que no recargue la pág cuando se manda el form
    const title = e.target.title.value
    const description = e.target.description.value
    const task = {title, description, date: new Date().toDateString(), id: uuidv4()}
    addTask(task)
    handleCloseModal()
  }

  return (
    <div>
      <button onClick={handleOpenModal} className='btn btn-green'>Nueva tarea</button>
      {
        isOpen 
        && 
        <div className='modal-background'>
          <div className='modal'>
            <h2>Nueva tarea</h2>
            <form onSubmit={handleSubmitTask}>
              <div className="input-container">
                {/* <label htmlFor="title">Ingresa el título de tu tarea</label> */}
                <input type="text" id='title' name='title' placeholder='Título' className='input'/>
              </div>
              <div className="input-container">
                {/* <label htmlFor="description">Ingresa una descripción</label> */}
                <textarea name="description" id="description"  placeholder='Descripción' className='input' ></textarea>
              </div>
              <div className='btn-container'>
                <button onClick={handleCloseModal} className='btn btn-red'>Cancelar</button>
                <button type='submit' className='btn btn-green'>Agregar</button>
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  )
}

export default TaskForm