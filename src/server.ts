import express from 'express';
import 'reflect-metadata';
import './database';
import { router } from './routes';

const app = express();

app.listen(3001, () => console.log('Server is running'));

app.use(express.json())

app.use(router)