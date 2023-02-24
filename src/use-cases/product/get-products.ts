import { ProductDataAccess } from "../../data-access";
import { Product } from "../../entities/product";

export interface GetProductsUseCase{
    runUseCase(): Product[];
}

class GetProductsUseCaseImpl implements GetProductsUseCase {
    productDb: ProductDataAccess;
    constructor(db: ProductDataAccess) {
        this.productDb = db;
    }
    runUseCase(): Product[] { // params jika butuh
        return this.productDb.selectAll();
    }
}

export default function makeGetProductsUC(db: ProductDataAccess): GetProductsUseCase{
    return new GetProductsUseCaseImpl(db);
}