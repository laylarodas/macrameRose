module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
        tableName: 'categories',
        timestamps: false
    };
    const Category = sequelize.define(alias, cols, config);

    Category.associate = function (models) {
        //relacion 1:N
        //1 categoria ---> tiene muchos productos
        Category.hasMany(models.Product,{
            as:'products',
            foreignKey: 'categoryId',
            onDelete:'SET NULL'
        });
    }

    return Category
}