import './PageLayout.css'
import ConteudoPrincipal from './ConteudoPrincipal.jsx'
import MenuEsquerdo from './MenuEsquerdo'


function PageLayout () {
  return(
    <div className='Layout-Container'>
    
      <div className='Menu'>
        <MenuEsquerdo></MenuEsquerdo>
      </div>

      <div className='Principal'>
        <ConteudoPrincipal></ConteudoPrincipal>
      </div>
    
    </div>
  )
}

export default PageLayout
