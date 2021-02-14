import app from './app'
import db from './middleware/database';

db.sync({ force: false, logging: false })
    .then(result => {
        module.exports = app
        app.listen(process.env.PORT || 8080)
    })