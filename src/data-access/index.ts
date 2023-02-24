import productDB, { DB } from "../../data";
import makeProduct from "../entities";
import { Product } from "../entities/product";

export interface ProductDataAccess {
    selectAll(): Product[];
    insertOne(product: Product): Product;
    updateOneBySlug(newProduct: Product, slug: string): Product;
    deleteOneBySlug(slug: string): Product;
}

class ProductDataAccessImpl implements ProductDataAccess{

    productDB: DB;
    constructor(productDB: DB) {
        this.productDB = productDB;
    }

    selectAll(): Product[] {
        const products: Product[] = this.productDB.collect();
        return products;
    }

    insertOne(product: Product): Product {
        const products: Product[] = this.productDB.collect();
        const fixedProduct = makeProduct({ // auto fill ID dan Date
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock
        })
        products.push(fixedProduct);
        productDB.updateCollection(products);// rewrite kembali data json
        return fixedProduct;
    }

    updateOneBySlug(newProduct: Product, slug: string): Product {
        const products: Product[] = this.productDB.collect();
        const fixedProduct = makeProduct({
            name: newProduct.name,
            description: newProduct.description,
            price: newProduct.price,
            stock: newProduct.stock
        });
        const oldIndex = products.findIndex(product => product.slug === slug);
        if(oldIndex === -1){
            throw 'not found';
        }
        products[oldIndex] = fixedProduct;
        productDB.updateCollection(products);
        return fixedProduct;
    }

    deleteOneBySlug(slug: string): Product {
        const products: Product[] = this.productDB.collect();
        const index = products.findIndex(product => product.slug === slug);
        if(index === -1){
            throw 'not found';
        }
        products.splice(index, 1);
        productDB.updateCollection(products);
        return products[index];
    }
}

function makeProductDataAccess(db: DB): ProductDataAccess{
    return new ProductDataAccessImpl(db);
}

const productDataAccess: ProductDataAccess = makeProductDataAccess(productDB);
export default productDataAccess;