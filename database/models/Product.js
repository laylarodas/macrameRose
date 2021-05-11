module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        categoryId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        colorId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        sizeId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        discount: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        stock: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
    };
    let config = {
        timestamps: false,
        tableName: 'products'
    }
    const Product = sequelize.define(alias,cols,config);

    
    Product.associate = function (models) {
        //RELACION 1:N
        //muchos productos --> 1 categoria
        Product.belongsTo(models.Category,{
            as:'category',
            foreignKey: 'categoryId'
        });//la foreignKey va siempre en la tabla de muchos(1:N)

        Product.belongsTo(models.Color,{
            as:'color',
            foreignKey: 'colorId'
        });

        Product.belongsTo(models.Size,{
            as:'size',
            foreignKey: 'sizeId'
        });
    }
    return Product
};