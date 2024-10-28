import {useState, useEffect} from 'react'

function App(){
  const [input,setInput] = useState('')
  const [tarefas,setTarefas] = useState([
    'Pagar a conta da luz',
    'Comprar Um frigorifico'
  ]);


//  localStorage.getItem => Para ir buscar/renderizar os dados que estao na memoria do browser 

useEffect(()=>{
  const tarefasStorage = localStorage.getItem('@tarefa')
  if(tarefasStorage){
    setTarefas(JSON.parse(tarefasStorage))
    //console.log('Cheguei ao getItems' + ' = '+ tarefasStorage)
  }
},[])

//  localStorage.setItem => para gravar os dados 
  useEffect(()=>{
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))

  },[tarefas])

  
  function handleRegister(e){
    e.preventDefault();
    
    setTarefas([...tarefas, input]);
    setInput('')
  }

  return(
    <div>
      <h1>Cadastrar Utilizador</h1>

      <form onSubmit={handleRegister}  >
        <label>Nome da Tarefa: </label><br/>
        <input 
         placeholder='Digite uma tarefa'
         value={input}
         onChange={ (e)=> setInput(e.target.value) }
         /><br/>
        <button type='submit'>Registrar</button>
      </form>

    <br/><br/>

    <ul>
  {tarefas.map((tarefa)=> (
    <li key={tarefa} >{tarefa} </li>
  ))}    

    </ul>

    </div>
  )
}

export default App;


