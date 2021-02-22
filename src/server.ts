import express, { request, response } from 'express'

const app = express();

app.listen(3001, () => console.log('HEH'))

app.get('/', (request, response) => {
  return response.send('Hello World')
})

app.post('/', (request,response) => {
  return response.json({message: "Os dados foram recebidos com sucesso"})
})