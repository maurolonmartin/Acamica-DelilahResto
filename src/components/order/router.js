'user strict';

const router = require('express').Router();

const { searchOrder, createOrder, searchOrders } = require('./controllers/order.controller');
const { catchWrapperFn } = require('../../utils/cathWrapper');
const { isLoggin } = require('../../utils/middlewares/tokenhandler');
const { newOrderSchema, updateOrderSchema } = require('../../schemas/order.schema');
const { validateSchema } = require('../../utils/middlewares/validateSchema');

router.get('/order/:id', isLoggin, validateSchema(updateOrderSchema, 'params'), catchWrapperFn(searchOrder));
router.get('/orders', isLoggin, catchWrapperFn(searchOrders));
router.post('/order', isLoggin, validateSchema(newOrderSchema), catchWrapperFn(createOrder));

module.exports = router;