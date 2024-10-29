import {useEffect,useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import api from '../../services/api'
import './filme-info.css'
import {toast} from 'react-toastify'

function Filme() {
const {id} = useParams()
const navigate = useNavigate()
const [filme,setFilme] = useState({})
const [loading,setLoading] = useState(true)

useEffect(() => { 
  //                      CARREGAR FILMES
  async function loadFilme(){
    await api.get(`/movie/${id}`, {
      params:{
        api_key:"4918b57fe5bca39d62d74a18826d997d",
        language:'pt-BR',
        page:1,
      }
    })
    .then((response)=> {
      setFilme(response.data)
      setLoading(false)
    })
    .catch(()=> {
      console.log('Filme nao encontrado.')
      navigate('/',{replace: true})
      return;
    })
  }
  loadFilme()

  return () => { //desmontar componentes
    console.log('Componente desmontado')
  }
}, [navigate,id])

  //                          SALVAR FILMES

function salvarFilme(){
  const minhaLista = localStorage.getItem('@primeflix');

  let filmesSalvos = JSON.parse(minhaLista) || []

  const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id)

  if(hasFilme){
    toast.warn('Esse filme já está na LISTA!')
    return;
  }

  filmesSalvos.push(filme)
  localStorage.setItem('@primeflix', JSON.stringify(filmesSalvos))
  toast.success('Filme Salvo com SUCESSO!')
}
//                                LOADING
if(loading){
  return(
    <div className='filme-info'>
      <h1>Carregando detalhes...</h1>
    </div>
  )
}

  return(
    <div className='filme-info'>
      <h1> {filme.title}   </h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}  alt={filme.title} />
      <h3>Sinopse</h3>
      <span>{filme.overview}  </span>

      <strong>Avaliação: {filme.vote_average} / 10 </strong>
      
    <div className='area-buttons'>
    <button  onClick={salvarFilme} >Salvar</button>
    <button> <a target='_blank' rel="external noreferrer" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a> </button>
    </div>


    </div>
  )
}

export default Filme;
