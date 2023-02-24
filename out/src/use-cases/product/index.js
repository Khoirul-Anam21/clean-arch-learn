"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_access_1 = __importDefault(require("../../data-access"));
const add_product_1 = __importDefault(require("./add-product"));
const delete_product_1 = __importDefault(require("./delete-product"));
const get_products_1 = __importDefault(require("./get-products"));
const update_product_1 = __importDefault(require("./update-product"));
const addProductUseCase = (0, add_product_1.default)(data_access_1.default);
const getProductsUseCase = (0, get_products_1.default)(data_access_1.default);
const updateProductsUseCase = (0, update_product_1.default)(data_access_1.default);
const deleteProductsUseCase = (0, delete_product_1.default)(data_access_1.default);
const productService = Object.freeze({
    addProductUseCase,
    getProductsUseCase,
    updateProductsUseCase,
    deleteProductsUseCase
});
exports.default = productService;
