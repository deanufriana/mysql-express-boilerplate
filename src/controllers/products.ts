import { RequestHandler } from 'express';
import { Op } from 'sequelize';
import product from '../models/product';

export const getAllProduct: RequestHandler = (req, res) => {
    product.findAll()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            const error = new Error(err);
            throw error;
        })
}

export const createProduct: RequestHandler = (req, res) => {
    const { name, price, imageUrl, description } = req.body
    product
        .create({ name, price, imageUrl, description })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            const error = new Error(err);
            throw error;
        })
}

export const getProductByName: RequestHandler = (req, res) => {
    const { name } = req.body
    product.findAll({
        where: {
            [Op.like]: { name }
        }
    })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            const error = new Error(err);
            throw error;
        })
}

export const deleteProductByID: RequestHandler = (req, res) => {
    const { id } = req.body
    product.destroy({
        where: {
            [Op.and]: { id }
        }
    })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            const error = new Error(err);
            throw error;
        })
}