"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetProductsUseCaseImpl {
    constructor(db) {
        this.productDb = db;
    }
    runUseCase() {
        return this.productDb.selectAll();
    }
}
function makeGetProductsUC(db) {
    return new GetProductsUseCaseImpl(db);
}
exports.default = makeGetProductsUC;
