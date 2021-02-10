import { Sequelize } from 'sequelize'
const { DB_NAME, DB_PASS, DB_USER, DB_PORT, NODE_ENV, DB_HOST } = process.env

const sequelize = new Sequelize(DB_NAME as string, DB_USER as string, DB_PASS as string, {
    dialect: 'mysql',
    host: DB_HOST
})

export default sequelize;