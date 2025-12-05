import Sequelize from "sequelize";
import dataBaseConfig from '../config/database.js';
import Aluno from '../models/Aluno.js';

const models = [Aluno];

const connection = new Sequelize(dataBaseConfig);

models.forEach(model => model.init(connection));
