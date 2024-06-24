import './MenuEsquerdo.css'
import Icon from '../assets/UsuarioIcon.jpg'

function MenuEsquerdo (){
  return (
    <div className='Container-Menu'>
      
        <div className='Icon'>
        <img src={Icon} alt="Icone do usuario" id='imgIcon'/>
        </div>


        <div className='Nome-Generico'>
            <h1>Nome Genérico</h1>
        </div>


        <div className='Biografia'>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod     tempor             incididunt ut labore et dolore magna aliqua. Felis eget nunc lobortis mattis. Sit           amet justo donec enim diam vulputate ut. Quam pellentesque nec nam aliquam sem et           </p>
           </div>

          <div className='Links'>
           
            <li><a href="#" id='L1'>Link1</a></li>
            <li><a href="#" id='L2'>Link2</a></li>
            <li><a href="#" id='L3'>Link3</a></li>
            <li><a href="#" id='L4'>Link4</a></li>
          
          </div>
      
    </div>
  )
} 

export default MenuEsquerdo