const express = require('express')

const server = express()

server.use(express.json())

//Query Params = ?nome=NodeJS
//Route Params = /curso/2
//Request Body = {nome: 'Nodejs', tipo: 'Backend'}

//CRUD -> Create, Read ,Update , Delete

const cursos = ['Node JS','Java Script','React Native']

//Middleware Global
server.use((req,res,next)=> {
  console.log(`URL CHAMADA: ${req.url}`)

  return next()
})

//middleware checkCurso -> name
function checkCurso(req,res,next){
  if(!req.body.name){
    return res.status(400).json({error:'Nome do curso obrigatorio'})
  }

  return next()
}

//middleware checkIndexCurso
function checkIndexCurso(req,res,next){
  const curso = cursos[req.params.index]
  if(!curso){
    return res.status(400).json({error:'O curso NAO EXISTE'})

  }
  req.curso = curso;

  return next()
}

server.get('/cursos', (req,res)=> {
  return res.json(cursos)
})

// localhost:3000/curso/2
server.get('/cursos/:index' , checkIndexCurso,(req,res) => {
  return res.json(req.curso)
})

//Criar um novo curso - POST + middleware checkCurso
server.post('/cursos' , checkCurso, (req,res) => {
  const {name} = req.body;
  cursos.push(name)

  return res.json(cursos)
})


//Atualizar um curso - PUT
server.put('/cursos/:index',checkCurso,checkIndexCurso,(req,res)=> {
  const {index} = req.params;
  const {name}= req.body

  cursos[index] = name;

  return res.json(cursos)
})


//  Remover um curso - DELETE
server.delete('/cursos/:index',checkIndexCurso, (req,res) => {
  const {index} = req.params;
  cursos.splice(index,1)

  return res.send()
})
server.listen(3000)
