const Contato = require('../models/ContatoModel');

// Controlador para registrar um novo contato
exports.register = async (req, res) => {
  try {
    const contato = new Contato(req.body);
    await contato.register();

    if(contato.errors.length > 0) {
      // Se houver erros, redireciona de volta à página anterior exibindo os erros
      req.flash('errors', contato.errors);
      req.session.save(() => res.redirect('back'));
      return;
    }

    // Se o registro for bem-sucedido, redireciona para a página de detalhes do contato
    req.flash('success', 'Contato registrado com sucesso.');
    req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
    return;
  } catch(e) {
    console.log(e);
    // Em caso de erro, renderiza a página de erro 404
    return res.render('404');
  }
};

// Controlador para renderizar a página de edição de um contato
exports.editIndex = async (req, res) => {
  // Verifica se o ID do contato foi fornecido nos parâmetros da URL
  if(!req.params.id) return res.render('404');

  // Busca o contato pelo ID fornecido
  const contato = await Contato.buscaPorId(req.params.id);
  if(!contato) return res.render('404');

  // Renderiza a página de edição de contato com os detalhes do contato
  res.render('contato', { contato });
};

// Controlador para editar um contato existente
exports.edit = async (req, res) => {
  try {
    // Verifica se o ID do contato foi fornecido nos parâmetros da URL
    if(!req.params.id) return res.render('404');

    // Cria uma nova instância de Contato com os dados recebidos da requisição
    const contato = new Contato(req.body);
    // Chama o método de edição do contato
    await contato.edit(req.params.id);

    if(contato.errors.length > 0) {
      // Se houver erros, redireciona de volta à página anterior exibindo os erros
      req.flash('errors', contato.errors);
      req.session.save(() => res.redirect('back'));
      return;
    }

    // Se a edição for bem-sucedida, redireciona para a página de detalhes do contato
    req.flash('success', 'Contato editado com sucesso.');
    req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
    return;
  } catch(e) {
    console.log(e);
    // Em caso de erro, renderiza a página de erro 404
    res.render('404');
  }
};

// Controlador para excluir um contato
exports.delete = async (req, res) => {
  // Verifica se o ID do contato foi fornecido nos parâmetros da URL
  if(!req.params.id) return res.render('404');

  // Chama a função de exclusão do ContatoModel com base no ID fornecido
  const contato = await Contato.delete(req.params.id);
  if(!contato) return res.render('404');

  // Se a exclusão for bem-sucedida, exibe uma mensagem de sucesso e redireciona de volta à página anterior
  req.flash('success', 'Contato apagado com sucesso.');
  req.session.save(() => res.redirect('back'));
  return;
};
