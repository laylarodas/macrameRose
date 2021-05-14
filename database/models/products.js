'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.categories,{
        as: 'category',
        foreignKey: 'categoryId'
      });
      this.belongsTo(models.colors,{
        as: 'color',
        foreignKey: 'colorId'
      });
      this.belongsTo(models.sizes,{
        as: 'size',
        foreignKey: 'sizeId'
      });
    }
  };
  products.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    discount: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    colorId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};