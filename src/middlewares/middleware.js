// Middleware global para configurar variáveis locais comuns a todas as rotas
exports.middlewareGlobal = (req, res, next) => {
  // Configura variáveis locais para exibir mensagens de erro, sucesso e usuário logado em todas as views
  res.locals.errors = req.flash('errors');
  res.locals.success = req.flash('success');
  res.locals.user = req.session.user;
  next(); 
};

// Outro middleware que não faz nada além de chamar o próximo middleware
exports.outroMiddleware = (req, res, next) => {
  next(); 
};

// Middleware para lidar com erros de CSRF
exports.checkCsrfError = (err, req, res, next) => {
  if(err) {
    return res.render('404'); // Renderiza a página de erro 404 se houver erro CSRF
  }
  next(); 
};

// Middleware para adicionar um token CSRF a todas as respostas
exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken(); // Adiciona um token CSRF às variáveis locais
  next(); 
};

// Middleware para verificar se o usuário está autenticado antes de acessar uma rota protegida
exports.loginRequired = (req, res, next) => {
  if(!req.session.user) { // Verifica se não há um usuário na sessão
    // Se não houver usuário na sessão, redireciona para a página inicial com uma mensagem de erro
    req.flash('errors', 'Você precisa fazer login.');
    req.session.save(() => res.redirect('/'));
    return;
  }
  next(); 
};
