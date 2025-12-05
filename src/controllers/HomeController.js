import Aluno from "../models/Aluno.js";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Gustavo',
      sobrenome: 'Bodziak',
      email: 'GustavoTeste@email.com',
      idade: 22,
      peso: 84.2,
      altura: 1.84
    });

    res.json({
      success: true,
      novoAluno
    });
  }
}

export default new HomeController;
