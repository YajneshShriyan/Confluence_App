const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Page extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Like, Appreciate }) {
      // define association here
      this.belongsTo(User, {
        as: 'user',
        foreignKey: 'user_id',
      });

      this.belongsToMany(User, {
        as: 'users',
        through: Like,
        foreignKey: 'page_id',
        otherKey: 'user_id',
      });

      this.hasMany(Like, {
        as: 'likes',
        foreignKey: 'page_id',
      });

      // Many-to-Many User-Appreciate-Page
      this.belongsToMany(User, {
        as: 'users_appr',
        through: Appreciate,
        foreignKey: 'page_id',
        otherKey: 'user_id',
      });

      this.hasMany(Appreciate, {
        as: 'apprs',
        foreignKey: 'page_id',
      });
    }
  }
  Page.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Page',
      tableName: 'pages',
    }
  );
  return Page;
};
