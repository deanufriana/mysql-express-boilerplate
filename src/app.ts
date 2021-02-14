import dotenv from 'dotenv';
dotenv.config();

import express, { NextFunction, Request, Response, json } from 'express';
import product from './routes/products';

const app = express()

app.use(json())

app.use('/product', product)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message })
    res.status(404).json({ message: 'Url was not found' })
})

export default app
