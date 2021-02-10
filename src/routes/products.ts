import { Router } from 'express'
import { createProduct, deleteProductByID, getAllProduct, getProductByName } from '../controllers/products';
const router = Router()

router.get('/getAll', getAllProduct)
router.get('/getProductByName', getProductByName)

router.post('/create', createProduct)
router.delete('/deleteProductByID', deleteProductByID)

export default router;