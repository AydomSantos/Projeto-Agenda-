const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

// Define o schema do modelo de Login utilizando o Mongoose
const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true }, // Campo de email obrigatório
  password: { type: String, required: true } // Campo de senha obrigatório
});

// Cria o modelo de Login com base no schema definido
const LoginModel = mongoose.model('Login', LoginSchema);

// Classe Login que lida com a autenticação e registro de usuários
class Login {
  constructor(body) {
    // Inicializa o objeto Login com o corpo da requisição, uma array de erros e uma propriedade de usuário
    this.body = body; // Armazena os dados do formulário de login
    this.errors = []; // Armazena os erros de validação
    this.user = null; // Armazena o usuário criado após o registro
  }

  // Método assíncrono para autenticar o usuário
  async login(){
    // Executa a validação dos dados de login
    this.valida();

    // Se houver erros de validação, retorna sem autenticar o usuário
    if(this.errors.length > 0) return;

    // Procura o usuário no banco de dados pelo email fornecido
    this.user = await LoginModel.findOne({ email: this.body.email });

    // Verifica se o usuário foi encontrado
    if(!this.user){
      this.errors.push('Usuário não cadastrado');
      return;
    } 

    // Compara a senha fornecida com a senha armazenada no banco de dados
    if(!bcryptjs.compareSync(this.body.password, this.user.password)){
      this.errors.push('Senha inválida');
      return;
    }
  }

  // Método assíncrono para registrar um novo usuário
  async register() {
    // Executa a validação dos dados de registro
    this.valida();

    // Se houver erros de validação, retorna sem registrar o usuário
    if(this.errors.length > 0) return;

    // Verifica se o usuário já existe no banco de dados
    await this.userExists();

    // Hash da senha antes de armazená-la no banco de dados
    this.hashPassword();

    try {
      // Tenta criar o usuário no banco de dados
      this.user =  await LoginModel.create(this.body);
    } catch(e) {
      console.log(e); // Se houver erro, loga no console
    }
  }

  // Método para validar os dados do usuário
  valida() {
    // Limpa os dados recebidos do formulário antes da validação
    this.cleanUp();

    // Verifica se o email fornecido é válido
    if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');

    // Verifica se a senha possui o comprimento adequado
    if(this.body.password.length < 3 || this.body.password.length >= 50) {
      this.errors.push('A senha precisa ter entre 3 e 50 caracteres.');
    } 
  }

  // Método para limpar valores não-strings no objeto 'body'
  cleanUp() {
    for (const key in this.body) {
      if (this.body.hasOwnProperty(key) && typeof this.body[key] !== 'string') {
        // Se o valor não for uma string, define como uma string vazia
        this.body[key] = '';
      }
    }
    // Filtra o objeto 'body' para conter apenas as chaves 'email' e 'password'
    this.body = { email: this.body.email, password: this.body.password };
  }

  // Método assíncrono para verificar se o usuário já existe no banco de dados
  async userExists() {
    // Procura um usuário com o mesmo email no banco de dados
    if (await LoginModel.findOne({email: this.body.email})) this.errors.push('Usuário já existe');
  }

  // Método para gerar o hash da senha
  hashPassword() {
    const salt = bcryptjs.genSaltSync();
    this.body.password = bcryptjs.hashSync(this.body.password, salt);
  }
}

// Exporta a classe Login para uso em outros arquivos
module.exports = Login;
