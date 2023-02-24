"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeleteProductsUseCaseImpl {
    constructor(db) {
        this.productDb = db;
    }
    runUseCase(slug) {
        return this.productDb.deleteOneBySlug(slug);
    }
}
function makeDeleteProductUC(db) {
    return new DeleteProductsUseCaseImpl(db);
}
exports.default = makeDeleteProductUC;
