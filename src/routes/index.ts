import express from "express";
import makeExpressCallback from "../express-callback";
import productController from "../controllers";

const productRouter = express.Router();

productRouter.post('/products', makeExpressCallback(productController.postProduct).handleRequest);
productRouter.get('/products',  makeExpressCallback(productController.getProducts).handleRequest);
productRouter.put('/products/:id',  makeExpressCallback(productController.updateProducts).handleRequest);
productRouter.delete('/products/:id', makeExpressCallback(productController.deleteProducts).handleRequest);

export default productRouter;