"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("../use-cases/product"));
const product_controller_1 = __importDefault(require("./product-controller"));
const productControllerObj = (0, product_controller_1.default)();
const postProduct = productControllerObj.makePostProduct(product_1.default.addProductUseCase);
const getProducts = productControllerObj.makeGetProducts(product_1.default.getProductsUseCase);
const updateProducts = productControllerObj.makeUpdateProduct(product_1.default.updateProductsUseCase);
const deleteProducts = productControllerObj.makeDeleteProduct(product_1.default.deleteProductsUseCase);
const productController = Object.freeze({
    postProduct,
    getProducts,
    updateProducts,
    deleteProducts
});
exports.default = productController;
