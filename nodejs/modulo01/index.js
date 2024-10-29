const express = require('express')

const server = express()

server.use(express.json())

//Query Params = ?nome=NodeJS
//Route Params = /curso/2
//Request Body = {nome: 'Nodejs', tipo: 'Backend'}

//CRUD -> Create, Read ,Update , Delete

const cursos = ['Node JS','Java Script','React Native']

server.get('/cursos', (req,res)=> {
  return res.json(cursos)
})

// localhost:3000/curso/2
server.get('/cursos/:index' , (req,res) => {
  const {index} = req.params

  return res.json(cursos[index])
})

//Criar um novo curso - POST
server.post('/cursos' , (req,res) => {
  const {name} = req.body;
  cursos.push(name)

  return res.json(cursos)
})


//Atualizar um curso - PUT
server.put('/cursos/:index',(req,res)=> {
  const {index} = req.params;
  const {name}= req.body

  cursos[index] = name;

  return res.json(cursos)
})


//  Remover um curso - DELETE
server.delete('/cursos/:index', (req,res) => {
  const {index} = req.params;
  cursos.splice(index,1)

  return res.send()
})
server.listen(3000)
