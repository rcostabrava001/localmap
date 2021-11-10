//importações necessárias
import 'reflect-metadata';
//para gerenciar as requisiçoes
import express from 'express';
//para o banco de dados
import { createConnection } from 'typeorm';
//permitir acesso a api
import cors from 'cors';
//importação das controllers
import * as StoreController from './src/api/StoreController';
//porta onde vai rodar a app
const PORT = 3333;

//função asincrona que inicializa a app
async function startup() {
 //aguardar a criação da conexão com o bd
 await createConnection();
 //criando a app
 const app = express();
 //importação dos middlewares
 app.use(express.json());
 app.use(cors());
 //mapeando as rotas
 app.post('/store', StoreController.save);
 app.get('/store', StoreController.getAll);
 //função anonima passando a porta da app
 app.listen(PORT, () => {
  console.log(`servidor rodando na porta: ${PORT}!`);
 });
}

//executando o entrypoint
startup();