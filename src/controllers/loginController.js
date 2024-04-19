// Importa o modelo de Login
const Login = require('../models/LoginModel');

// Controlador para renderizar a página de login ou página de usuário logado
exports.index = (req, res) => {
  // Verifica se há um usuário na sessão
  if(req.session.user) return res.render('login-logado'); // Se houver, renderiza a página de usuário logado
  return res.render('login'); // Caso contrário, renderiza a página de login
};

// Controlador responsável pelo registro de usuários
exports.register = async function(req, res) {
  try {
    // Cria uma instância da classe Login com os dados recebidos da requisição (req.body)
    const login = new Login(req.body);
    
    // Executa o método de registro assíncrono da classe Login
    await login.register();

    // Verifica se ocorreram erros durante a validação
    if (login.errors.length > 0) {
      // Se houver erros, redireciona de volta à página anterior exibindo os erros
      res.flash('errors', login.errors);
      req.session.save(function () {
        return res.redirect('back');
      });
      return;
    }

    // Redireciona de volta à página anterior exibindo a mensagem de sucesso
    res.flash('success', 'Seu usuário foi criado');
    req.session.save(function () {
      return res.redirect('back');
    });
  } catch (e) {
    // Se ocorrer algum erro, renderiza a página de erro 404
    return res.render('404');
  }
};

// Controlador responsável pelo login de usuários
exports.login = async function(req, res) {
  try {
    // Cria uma instância da classe Login com os dados recebidos da requisição (req.body)
    const login = new Login(req.body);
    
    // Executa o método de login assíncrono da classe Login
    await login.login();

    // Verifica se ocorreram erros durante a validação
    if (login.errors.length > 0) {
      // Se houver erros, redireciona de volta à página anterior exibindo os erros
      res.flash('errors', login.errors);
      req.session.save(function () {
        return res.redirect('back');
      });
      return;
    }

    // Define o usuário na sessão
    req.session.user = login.user;
    req.session.save(function () {
      return res.redirect('back');
    });
  } catch (e) {
    // Se ocorrer algum erro, renderiza a página de erro 404
    return res.render('404');
  }
};

// Controlador responsável pelo logout de usuários
exports.logout = function(req, res) {
  // Destroi a sessão do usuário
  req.session.destroy();
  // Redireciona para a página inicial
  res.redirect('/');
};

/*

exports.register = async function(req, res) {
  try {
    const login = new Login(req.body);
    await login.register();

    if(login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function() {
        return res.redirect('back');
      });
      return;
    }

    req.flash('success', 'Seu usuário foi criado com sucesso.');
    req.session.save(function() {
      return res.redirect('back');
    });
  } catch(e) {
    console.log(e);
    return res.render('404');
  }
};

*/


/*



exports.login = async function(req, res) {
  try {
    const login = new Login(req.body);
    await login.login();

    if(login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function() {
        return res.redirect('back');
      });
      return;
    }

    req.flash('success', 'Você entrou no sistema.');
    req.session.user = login.user;
    req.session.save(function() {
      return res.redirect('back');
    });
  } catch(e) {
    console.log(e);
    return res.render('404');
  }
};

*/



