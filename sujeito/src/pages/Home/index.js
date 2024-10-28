import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      
      <h1>Home</h1>
      <Link to="/sobre">Sobre</Link> <br></br>
      <Link to="/contato">Contato</Link> <br></br>
      <hr/>

      <Link to="/produto/123456">Acessar Produto - 123456</Link>
      </div>
  )
}

export default Home;
