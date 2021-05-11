module.exports = (sequelize, dataTypes) => {
    let alias = 'Size';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: true
        }
    };
    let config = {
        tableName: 'sizes',
        timestamps: false
    };
    const Size = sequelize.define(alias, cols, config);

    Size.associate = function (models) {
        //relacion 1:N
        //1 tamaño ---> tiene muchos productos
        Size.hasMany(models.Product,{
            as:'products',
            foreignKey: 'sizeId',
            onDelete:'SET NULL'
        });
    }

    return Size
}