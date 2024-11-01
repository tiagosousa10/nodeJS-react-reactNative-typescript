interface PageDatailProps{
    params:{
        id:string
    }
}

async function getData(id:string){
    console.log(id)
  const response= await fetch('https://api.github.com/users/devfraga/repos')
  return response.json()
}


export default async function RepositorioId({params}:PageDatailProps){
    const data = await getData(params.id) 
    
    return(
        <div>
            <h1>Pagina detalhes do repositorio {params.id} </h1>
        </div>
    )
}
