import express from "express";
import makeExpressCallback from "../express-callback";
import productController from "../controllers";

const productRouter = express.Router();
const getHandler = makeExpressCallback(productController.getProducts).handleRequest();
const postHandler = makeExpressCallback(productController.postProduct).handleRequest();
const putHandler = makeExpressCallback(productController.updateProducts).handleRequest();
const deleteHandler = makeExpressCallback(productController.deleteProducts).handleRequest();

productRouter.post('/products', postHandler);
productRouter.get('/products', getHandler);
productRouter.put('/products/:slug',  putHandler);
productRouter.delete('/products/:slug', deleteHandler);

export default productRouter;