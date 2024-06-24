import './TarefaDia.css'

import React, {useState} from 'react';

const TarefaDia = () => {
  const [tasks, setTasks] = useState ([]);
  const [newTask, setNewTask] = useState('');

  const addTaskDia = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTaskDia = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index );
    setTasks(updatedTasks);
  };


  return (

    <div className='Dia-List'>
      <h2>Dia</h2>
      <div className='Task-Input'>
       <input 
         type='text'
         value= {newTask}
         onChange={(e) => setNewTask (e.target.value)}
         placeholder='Nova Tarefa'
      />
        <button onClick={addTaskDia}> Adicionar</button>
      </div>

      <ul>
        {tasks.map((tasks, index) => (

        <li key={index}>
          {tasks}
          <button onClick={() => deleteTaskDia(index)}>Excluir</button>
        </li>

      ))}
      </ul>
    </div>
  );
};

export default TarefaDia