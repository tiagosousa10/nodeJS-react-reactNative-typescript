import {useParams} from 'react-router-dom'

function Produto(){
const {id} = useParams()

  return(
    <div>
      <h2>DETALHE DO PRODUTO</h2>
      <span>
       meuProduto é {id}

      </span>
    </div>
  )
}

export default Produto;
