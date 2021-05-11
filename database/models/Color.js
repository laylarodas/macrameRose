module.exports = (sequelize, dataTypes) => {
    let alias = 'Color';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        }
    };
    let config = {
        tableName: 'colors',
        timestamps: false
    };
    const Color = sequelize.define(alias, cols, config);

    Color.associate = function (models) {
        //relacion 1:N
        //1 color ---> tiene muchos productos
        Color.hasMany(models.Product,{
            as:'products',
            foreignKey: 'colorId',
            onDelete:'SET NULL'
        });
    }

    return Color
}