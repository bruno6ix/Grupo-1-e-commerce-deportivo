module.exports = (sequelize, dataTypes) => {
    let Size = sequelize.define("Size",
    {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        Size: {
            type: dataTypes.STRING(45),
            allowNull: false
        }
    },
    {tableName: 'Size',  timestamps: false})
        Size.associate = function (models) {

            Size.belongsToMany(models.Size, {
                as: "Sizes",
                through: "sizes_has_products", 
                foreignKey: 'Product_Id',
                otherKey: "Size_Id"
            })
        }
        return Size
    };