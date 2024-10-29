const express = require('express')

const server = express()

//Query Params = ?nome=NodeJS
//Route Params = /curso/2
//Request Body = {nome: 'Nodejs', tipo: 'Backend'}


const cursos = ['Node JS','Java Script','React Native']

// localhost:3000/curso/2
server.get('/curso/:index' , (req,res) => {
  const {index} = req.params

  return res.json(cursos[index])
})

server.listen(3000)
