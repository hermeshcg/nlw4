import express from 'express';
import 'reflect-metadata';
import './database';

const app = express();

app.listen(3001);

app.get('/', (request, response) => {
  return response.send('Hello World');
});

app.post('/', (request, response) => {
  return response.json({ message: 'Os dados foram recebidos com sucesso' });
});
