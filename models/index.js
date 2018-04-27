import Sequelize from "sequelize";

const sequelize = new Sequelize('social', 'rajeshbabu', '123455678', {
  dialect: 'postgres'
});

const models = {
    User: sequelize.import('./user'),
    Channel: sequelize.import('./channel'),
    Team: sequelize.import('./team'),
    Message: sequelize.import('./message'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.sequelize = sequelize;

export default models;