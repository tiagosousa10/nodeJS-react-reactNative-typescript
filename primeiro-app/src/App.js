import {useState} from 'react'
import { Nome } from "./components/Nome";

function App(){
const [aluno,setAluno] = useState('Programador')

function handleChangeName(nome){
  setAluno(nome)
}

  return(
    <div>
      <h1 >Componente App</h1><br/>
      <h2>Olá {aluno}  </h2>
      <button onClick={() => handleChangeName('Tiago')}>
        Mudar Nome
      </button>
      <br/>

    </div>
  )
}

export default App;


