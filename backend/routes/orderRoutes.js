const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Public routes
router.post('/', orderController.createOrder);

// Admin routes
router.get('/', orderController.getAllOrders);
router.get('/:id', orderController.getOrderById);
router.patch('/:id/status', orderController.updateOrderStatus);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
