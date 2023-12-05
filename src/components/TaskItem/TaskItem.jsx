import React from 'react'
import moment from 'moment-timezone'
import './TaskItem.css';
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const TaskItem = ({task, deleteTask, editTask}) => {


  return (
    <div className='container-item'>
      <h3>{task.title}</h3>
      <p className='description'>{task.description}</p>
      <span>{task.date}</span>
      <button onClick={() => editTask(task.id)} className='btnn2'><MdEdit /></button>
      <button onClick={() => deleteTask(task.id)} className='btnn'><MdDeleteForever /></button>
      
    </div>
  )
}

export default TaskItem