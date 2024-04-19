const mongoose = require('mongoose');
const validator = require('validator');

// Definição do Schema para o modelo de Contato utilizando Mongoose
const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true }, // Nome é obrigatório
  sobrenome: { type: String, required: false, default: '' }, // Sobrenome é opcional, com valor padrão ''
  email: { type: String, required: false, default: '' }, // Email é opcional, com valor padrão ''
  telefone: { type: String, required: false, default: '' }, // Telefone é opcional, com valor padrão ''
  criadoEm: { type: Date, default: Date.now }, // Data de criação com valor padrão de agora
});

// Cria o modelo de Contato com base no schema definido
const ContatoModel = mongoose.model('Contato', ContatoSchema);

// Função construtora Contato
function Contato(body) {
  this.body = body; // Armazena os dados recebidos do formulário
  this.errors = []; // Armazena os erros de validação
  this.contato = null; // Armazena o contato criado ou atualizado
}

// Método para registrar um novo contato
Contato.prototype.register = async function() {
  this.valida();
  if(this.errors.length > 0) return;
  this.contato = await ContatoModel.create(this.body);
};

// Método para validar os dados do contato
Contato.prototype.valida = function() {
  this.cleanUp();

  // Validação dos campos
  if(!this.body.nome) this.errors.push('Nome é um campo obrigatório.');
  if(!this.body.email && !this.body.telefone) {
    this.errors.push('Pelo menos um contato precisa ser enviado: e-mail ou telefone.');
  }
  if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
};

// Método para limpar valores não-string no objeto 'body'
Contato.prototype.cleanUp = function() {
  for(const key in this.body) {
    if(typeof this.body[key] !== 'string') {
      this.body[key] = '';
    }
  }

  // Filtra o objeto 'body' para conter apenas as chaves relevantes
  this.body = {
    nome: this.body.nome,
    sobrenome: this.body.sobrenome,
    email: this.body.email,
    telefone: this.body.telefone,
  };
};

// Método para editar um contato existente
Contato.prototype.edit = async function(id) {
  if(typeof id !== 'string') return;
  this.valida();
  if(this.errors.length > 0) return;
  this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true });
};

// Métodos estáticos para buscar, listar e deletar contatos
Contato.buscaPorId = async function(id) {
  if(typeof id !== 'string') return;
  const contato = await ContatoModel.findById(id);
  return contato;
};

Contato.buscaContatos = async function() {
  const contatos = await ContatoModel.find().sort({ criadoEm: -1 });
  return contatos;
};

Contato.delete = async function(id) {
  if(typeof id !== 'string') return;
  const contato = await ContatoModel.findOneAndDelete({_id: id});
  return contato;
};

// Exporta a função construtora Contato para uso em outros arquivos
module.exports = Contato;
