import { DataTypes } from 'sequelize'
import db from '../utils/database';

const Product = db.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
})

export default Product;