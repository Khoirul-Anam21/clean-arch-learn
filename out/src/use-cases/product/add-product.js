"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AddProductUseCaseImpl {
    constructor(db) {
        this.productDb = db;
    }
    runUseCase(rawProduct) {
        return this.productDb.insertOne(rawProduct);
    }
}
function makeAddProductUC(db) {
    return new AddProductUseCaseImpl(db);
}
exports.default = makeAddProductUC;
