"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateProductsUseCaseImpl {
    constructor(db) {
        this.productDb = db;
    }
    runUseCase(newProd, slug) {
        return this.productDb.updateOneBySlug(newProd, slug);
    }
}
function makeUpdateProductsUC(db) {
    return new UpdateProductsUseCaseImpl(db);
}
exports.default = makeUpdateProductsUC;
