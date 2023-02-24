"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakeProduct = void 0;
class ProductImpl {
    constructor(id, name, description, price, stock, slug, dateArrived) {
        this.productId = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.slug = slug;
        this.dateArrived = dateArrived;
    }
    updateStock(newStock) {
        this.stock = newStock;
    }
    updatePrice(newPrice) {
        this.price = newPrice;
    }
}
const buildMakeProduct = (prodId, date) => {
    return function makeProduct({ name, description, price, stock }) {
        const slug = name.split(' ').join('').toLowerCase();
        return Object.freeze(new ProductImpl(prodId, name, description, price, stock, slug, date.toISOString()));
    };
};
exports.buildMakeProduct = buildMakeProduct;
