import { ProductDataAccess } from "../../data-access";
import { Product } from "../../entities/product";

export interface DeleteProductUseCase{
    runUseCase(slug: string): Product;
}

class DeleteProductsUseCaseImpl implements DeleteProductUseCase {
    productDb: ProductDataAccess;
    constructor(db: ProductDataAccess) {
        
    }
    runUseCase(slug: string): Product { // params jika butuh
        return this.productDb.deleteOneBySlug(slug);
    }
}

export default function makeDeleteProductUC(db: ProductDataAccess): DeleteProductUseCase {
    return new DeleteProductsUseCaseImpl(db);
}