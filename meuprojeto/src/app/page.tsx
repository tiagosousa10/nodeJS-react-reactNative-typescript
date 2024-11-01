interface DataProps{
  id:number,
  name:string,
  full_name:string,
  owner:{
    login:string,
    id:number,
    avatar_url:string,
    url:string
  }
}
async function delayFetch(url:string, delay:number){
  await new Promise(resolve => setTimeout(resolve,delay))
  const response = await fetch(url)
  return response.json()
}

/* async function getData(){
  const response= await fetch('https://api.github.com/users/devfraga/repos')
  return response.json()
}
 */

async function getData(){
  const data= await delayFetch("https://api.github.com/users/devfraga/repos",1000)
  return data
}

export default async function Home(){
  const data:DataProps[] = await getData()

  return(
    <main>
      <h1>Pagina Home</h1>
      <span>Seja bem vindo!</span>

      <br/>

      <h3>Meu repositorios:</h3>
      {data.map((item)=>(
        <div key={item.id} >
          <strong>Repositorio: </strong> <a href="">{item.name} </a>
          <br/> <br/>
        </div>
     ))}

    </main>
  )
}
