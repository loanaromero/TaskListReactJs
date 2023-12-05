import React, { useEffect, useState } from 'react'
import './App.css'
import { TaskForm, TaskList, Title } from './components'
import DarkMode from './components/DarkModel/DarkMode'

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );
  const [currentTasks, setCurrentTasks] = useState([]);
  const [searchString, setSearchString] = useState('');

  // Modifica la estructura de las tareas para incluir un nuevo campo 'completed'
  const initialTask = {
    id: '',
    title: '',
    completed: false, // Nueva propiedad para controlar el estado de tachado
  };

  const [currentTask, setCurrentTask] = useState({ ...initialTask });

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId) => {
    alert('Estamos trabajando en esta sección');
  };

  const handleChangeFilter = (e) => {
    setSearchString(e.target.value);
  };

  const toggleTask = (taskId) => {
    // Actualiza el estado de 'completed' para el task correspondiente
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    setCurrentTasks(
      tasks.filter((task) =>
        task.title.toLowerCase().includes(searchString.toLowerCase())
      )
    );
  }, [searchString, tasks]);

  // Función para establecer la tarea actual al hacer clic en un TaskItem
  const handleTaskClick = (taskId) => {
    setCurrentTask(tasks.find((task) => task.id === taskId) || initialTask);
  };

  return (
    <>
      <DarkMode />
      <Title />
      <div className='header-container'>
        <input
          type='text'
          placeholder='Buscar nota'
          value={searchString}
          onChange={handleChangeFilter}
          className='app-input'
        />
        <TaskForm addTask={addTask} />
      </div>
      <TaskList
        tasks={currentTasks}
        deleteTask={deleteTask}
        editTask={editTask}
        toggleTask={toggleTask} // Pasa la función para tachar/destachar como prop
        onTaskClick={handleTaskClick} // Pasa la función para manejar clics en TaskItem
        currentTask={currentTask} // Pasa la tarea actual para controlar el estado de tachado
      />
    </>
  );
}

export default App;