import './TarefaNoite.css'
import React, {useState} from 'react';

const TarefaNoite = () => {
  const [tasks, setTasks] = useState ([]);
  const [newTask, setNewTask] = useState('');

  const addTaskNoite = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTaskNoite = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index );
    setTasks(updatedTasks);
  };


  return (

    <div className='Noite-List'>
      <h2>Noite</h2>
      <div className='Task-Input'>
       <input 
         type='text'
         value= {newTask}
         onChange={(e) => setNewTask (e.target.value)}
         placeholder='Nova Tarefa'
      />
        <button onClick={addTaskNoite}> Adicionar</button>
      </div>

      <ul>
        {tasks.map((tasks, index) => (

        <li key={index}>
          {tasks}
          <button onClick={() => deleteTaskNoite(index)}>Excluir</button>
        </li>
        
      ))}
      </ul>
    </div>
  );
};

export default TarefaNoite;