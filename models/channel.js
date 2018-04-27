export default (sequelize, DataTypes) => {
  const Channel = sequelize.define('channel', {
    name: DataTypes.STRING,
    public: DataTypes.BOOLEAN,
  });

  Channel.associate = (models) => {
    // 1 to M
    Channel.belongsTo(models.Team, {
      foreignKey: 'teamId',
    });
  };
  return Channel;
};