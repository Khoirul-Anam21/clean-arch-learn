import { ProductDataAccess } from "../../data-access";
import { Product } from "../../entities/product";

export interface AddProductUseCase{
    runUseCase(rawProduct: Product): Product;
}

class AddProductUseCaseImpl implements AddProductUseCase {
    productDb: ProductDataAccess;
    constructor(db: ProductDataAccess) {
        this.productDb = db;
    }
    runUseCase(rawProduct: Product): Product { // params jika butuh
        return this.productDb.insertOne(rawProduct);
    }
}

export default function makeAddProductUC(db: ProductDataAccess): AddProductUseCase{
    return new AddProductUseCaseImpl(db);
}