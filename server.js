// Importa e configura o dotenv para carregar variáveis de ambiente do arquivo .env
require('dotenv').config();

// Importa e configura o Express
const express = require('express');
const app = express();

// Importa e configura o Mongoose para trabalhar com o MongoDB
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(() => {
  // Quando a conexão com o banco de dados estiver estabelecida, emite o evento 'pronto'
  app.emit('pronto');
})
.catch(e => console.log(e));

// Importa e configura a sessão para armazenar dados do usuário durante a sessão
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

// Importa as rotas do aplicativo
const routes = require('./routes');

// Importa o módulo path para lidar com caminhos de arquivos
const path = require('path');

// Importa o módulo csurf para proteção contra CSRF
const csrf = require('csurf');

// Importa nossos próprios middlewares
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

// Configura o uso de middlewares no Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

// Configura a sessão
const sessionOptions = session({
  secret: process.env.SESSION_SECRET,
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // Tempo de vida do cookie da sessão em milissegundos (uma semana)
    httpOnly: true
  }
});
app.use(sessionOptions);
app.use(flash());

// Configura o motor de visualização e as pastas de visualização
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Configura o uso de proteção CSRF
app.use(csrf());

// Configura nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);

// Configura as rotas do aplicativo
app.use(routes);

// Define um evento para quando o servidor estiver pronto para aceitar conexões
app.on('pronto', () => {
  // Inicia o servidor na porta 3000
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});
