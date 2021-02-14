import { Router } from 'express'
import { createProduct, deleteProductByID, getAllProduct, getProductByName } from '../controllers/products';
import { body } from 'express-validator'
import { isValidated } from '../middleware/isValidated';
import Product from '../models/product';
const router = Router()

router.get('/getAll', getAllProduct)
router.get('/getProductByName', getProductByName)

router.post('/create',
    [
        body('name').not().isEmpty().withMessage('name cannot be empty').trim(),
        body('price').isCurrency().withMessage('price must be number').trim()
    ],
    isValidated,
    createProduct
)

router.delete('/deleteProductByID',
    body('id').not().isEmpty().withMessage('ID cannot be empty')
        .custom(async (value) => {
            console.log(value)
            const user = await Product.findByPk(value)
            if (!user) {
                return Promise.reject('ID tidak ditemukan');
            }
        }),
    isValidated,
    deleteProductByID
)

export default router;