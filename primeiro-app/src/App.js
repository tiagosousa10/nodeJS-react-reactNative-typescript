import {useState, useTransition} from 'react'

function App(){
  const [nome,setNome] = useState('');
  const [email,setEmail] = useState('');
  const [idade,setIdade] = useState(0);

  const [user,setUser] = useState({})


  function handleRegister(e){
    e.preventDefault();
    alert('Utilizador REGISTADO com SUCESSO!!!')


    setUser({
      nome:nome,
      email:email,
      idade:idade
    })
  }

  return(
    <div>
      <h1>Cadastrar Utilizador</h1>

      <form onSubmit={handleRegister}  >
        <label>Nome: </label><br/>
        <input 
         placeholder='Digite o nome'
         value={nome}
         onChange={ (e)=> setNome(e.target.value) }
         /><br/>


        <label>Email: </label><br/>
        <input 
         placeholder='Digite o Email'
         value={email}
         onChange={ (e)=> setEmail(e.target.value) }/><br/>


        <label>Idade: </label><br/>
        <input 
         placeholder='Digite o Idade'
         value={idade}
         onChange={ (e)=> setIdade(e.target.value) }/><br/>


        <button type='submit'>Registrar</button>
      </form>




    <br/><br/>

    <div>
      <span>Bem vindo: {user.nome}</span> <br/>
      <span>Idade: {user.idade}</span><br/>
      <span>Email: {user.email} </span><br/>

    </div>

    </div>
  )
}

export default App;


