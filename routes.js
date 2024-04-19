const express = require('express');
const route = express.Router();

// Importa os controladores
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

// Importa o middleware de autenticação
const { loginRequired } = require('./src/middlewares/middleware');

// Rota da página inicial
route.get('/', homeController.index);

// Rotas de login
route.get('/login/index', loginController.index); // Rota para exibir o formulário de login
route.post('/login/register', loginController.register); // Rota para registrar um novo usuário
route.post('/login/login', loginController.login); // Rota para fazer login
route.get('/login/logout', loginController.logout); // Rota para fazer logout

// Rotas de contato
route.get('/contato/index', loginRequired, contatoController.index); // Rota para exibir a lista de contatos
route.post('/contato/register', loginRequired, contatoController.register); // Rota para registrar um novo contato
route.get('/contato/index/:id', loginRequired, contatoController.editIndex); // Rota para exibir o formulário de edição de contato
route.post('/contato/edit/:id', loginRequired, contatoController.edit); // Rota para editar um contato
route.get('/contato/delete/:id', loginRequired, contatoController.delete); // Rota para excluir um contato

module.exports = route;
