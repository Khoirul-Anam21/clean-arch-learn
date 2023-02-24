import { HTTPRequest, HTTPResponse } from "../express-callback";
import { AddProductUseCase } from "../use-cases/product/add-product";
import { DeleteProductUseCase } from "../use-cases/product/delete-product";
import { GetProductsUseCase } from "../use-cases/product/get-products";
import { UpdateProductsUseCase } from "../use-cases/product/update-product";

interface ProductController {
    makePostProduct(useCase: AddProductUseCase): Function;
    makeGetProducts(useCase: GetProductsUseCase): Function;
    makeUpdateProduct(useCase: UpdateProductsUseCase): Function;
    makeDeleteProduct(useCase: DeleteProductUseCase): Function;
}

class ProductControllerImpl implements ProductController{
    makePostProduct(useCase: AddProductUseCase): Function {
        return function(request: HTTPRequest): HTTPResponse{
            throw ''
        }
        
    }
    makeGetProducts(useCase: GetProductsUseCase): Function {
        return function(request: HTTPRequest): HTTPResponse{
            throw ''
        }
        
    }
    makeUpdateProduct(useCase: UpdateProductsUseCase): Function {
        return function(request: HTTPRequest): HTTPResponse{
            throw ''
        }
        
    }
    makeDeleteProduct(useCase: DeleteProductUseCase): Function {
        return function(request: HTTPRequest): HTTPResponse{
            throw ''
        }
        
    }
    
}

export default function makeProductController(): ProductController {
    return new ProductControllerImpl();
}