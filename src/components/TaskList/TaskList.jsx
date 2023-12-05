import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import './TaskList.css'

const TaskList = ({tasks, deleteTask,editTask}) => {
  return (
    <div className='container'>
      {
        tasks.length == 0
        ? <h2 className='message'>Aún no has ingresado tareas</h2>
        : tasks.map(task => (
          <TaskItem task={task} key={task.id} deleteTask={deleteTask} editTask={editTask}/>
        ))
      }
    </div>
  )
}

export default TaskList