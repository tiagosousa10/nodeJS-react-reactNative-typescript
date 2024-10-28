import { useEffect,useState } from "react";
import api from '../../services/api'
import {Link} from 'react-router-dom'
import './home.css'
//  https://api.themoviedb.org/3/movie/11?api_key=4918b57fe5bca39d62d74a18826d997d&language=pt-BR

function Home() {
const [filmes,setFilmes] = useState([])
  

useEffect(()=> {

  async function loadFilmes(){
    const response = await api.get("movie/now_playing", {
      params:{
        api_key:"4918b57fe5bca39d62d74a18826d997d",
        language:'pt-BR',
        page:1,
      }
    })
   // console.log(response.data.results.slice(0,10))
   setFilmes(response.data.results.slice(0,10)) // enviar os filmes recebidos para setFilmes(filmes)
  }

  loadFilmes()
})
  return(
    <div  className="container">
      <div className="lista-filmes">
    {filmes.map((filme) => {
      return(
        <article  key={filme.title}>
          <strong>
            {filme.title}
          </strong>
          <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
          <Link  to={`/filme/${filme.id}`} >Acessar</Link>
        </article>
      )
    })}
      </div>
    </div>
  )
}

export default Home;
