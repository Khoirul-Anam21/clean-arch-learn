"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("../../data"));
const entities_1 = __importDefault(require("../entities"));
class ProductDataAccessImpl {
    constructor(productDB) {
        this.productDB = productDB;
    }
    selectAll() {
        const products = this.productDB.collect();
        return products;
    }
    insertOne(product) {
        const products = this.productDB.collect();
        const fixedProduct = (0, entities_1.default)({
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock
        });
        products.push(fixedProduct);
        data_1.default.updateCollection(products); // rewrite kembali data json
        return fixedProduct;
    }
    updateOneBySlug(newProduct, slug) {
        const products = this.productDB.collect();
        const fixedProduct = (0, entities_1.default)({
            name: newProduct.name,
            description: newProduct.description,
            price: newProduct.price,
            stock: newProduct.stock
        });
        const oldIndex = products.findIndex(product => product.slug === slug);
        if (oldIndex === -1) {
            throw 'not found';
        }
        products[oldIndex] = fixedProduct;
        data_1.default.updateCollection(products);
        return fixedProduct;
    }
    deleteOneBySlug(slug) {
        const products = this.productDB.collect();
        const index = products.findIndex(product => product.slug === slug);
        if (index === -1) {
            throw 'not found';
        }
        products.splice(index, 1);
        data_1.default.updateCollection(products);
        return products[index];
    }
}
function makeProductDataAccess(db) {
    return new ProductDataAccessImpl(db);
}
const productDataAccess = makeProductDataAccess(data_1.default);
exports.default = productDataAccess;
