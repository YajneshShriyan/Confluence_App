const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
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
  Like.init(
    {
      user_id: DataTypes.UUID,
      page_id: {
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      modelName: 'Like',
      tableName: 'likes',
    }
  );
  return Like;
};
