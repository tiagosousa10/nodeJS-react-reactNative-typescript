import {Link} from 'react-router-dom'

function Erro(){
  return(
    <div>
      <h2>ERRO ! A pagina não existe!</h2>
      <span>Encontramos estas paginas aqui: </span> <br/>
      <Link to="/">Home</Link> <br/>
      <Link to="/sobre">Sobre</Link><br/>
      <Link to="/contato">Contato</Link><br/>

    </div>
  )
}

export default Erro
