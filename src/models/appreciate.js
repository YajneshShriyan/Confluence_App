const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Appreciate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Page }) {
      // define association here
      this.belongsTo(User, {
        as: 'user',
        foreignKey: 'user_id',
      });

      this.belongsTo(Page, {
        as: 'page',
        foreignKey: 'page_id',
      });
    }
  }
  Appreciate.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      user_id: DataTypes.UUID,
      page_id: DataTypes.UUID,
      amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Appreciate',
      tableName: 'appreciates',
    }
  );
  return Appreciate;
};
