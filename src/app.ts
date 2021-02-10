import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

import express, { NextFunction, Request, Response, json } from 'express';
import db from './utils/database';
import product from './routes/products';

const app = express()

app.use(json())

app.use('/product', product)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message })
})

db.sync({ force: false })
    .then(result => {
        app.listen(process.env.PORT || 8080)
    })
