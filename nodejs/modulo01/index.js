const express = require('express')

const server = express()

//Query Params = ?nome=NodeJS
//Route Params = /curso/2
//Request Body = {nome: 'Nodejs', tipo: 'Backend'}

// localhost:3000/curso/2
server.get('/curso/:id' , (req,res) => {
  const id = req.params.id;

  return res.json({curso:`Curso:  ${id}`})
})

server.listen(3000)
