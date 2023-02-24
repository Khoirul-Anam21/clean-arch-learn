import { ProductDataAccess } from "../../data-access";
import { Product } from "../../entities/product";

export interface UpdateProductsUseCase{
    runUseCase(newProd: Product, slug: string): Product;
}

class UpdateProductsUseCaseImpl implements UpdateProductsUseCase {
    productDb: ProductDataAccess;
    constructor(db: ProductDataAccess) {
        this.productDb = db
    }
    runUseCase(newProd: Product, slug: string): Product { // params jika butuh
        return this.productDb.updateOneBySlug(newProd, slug);
    }
}

export default function makeUpdateProductsUC(db: ProductDataAccess): UpdateProductsUseCase{
    return new UpdateProductsUseCaseImpl(db);
}