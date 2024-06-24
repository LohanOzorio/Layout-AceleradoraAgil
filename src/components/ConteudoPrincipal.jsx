import './ConteudoPrincipal.css'
import TarefaDia from './TarefaDia'
import TarefaNoite from './TarefaNoite'

function ConteudoPrincipal() {
  return (

    <div className='Principal-Container'>
      
      <div className='Titulo'> 
        <h1>Lista de tarefas</h1>
      </div>

      <div className='Container-Tarefa'>
        
             <TarefaDia></TarefaDia>
        
            <TarefaNoite></TarefaNoite>

        
      </div>
    
    </div>
    
  )
}
export default ConteudoPrincipal 