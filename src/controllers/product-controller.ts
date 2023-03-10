import { Product } from "../entities/product";
import { ControllerFunc, HTTPRequest, HTTPResponse } from "../express-callback";
import { AddProductUseCase } from "../use-cases/product/add-product";
import { DeleteProductUseCase } from "../use-cases/product/delete-product";
import { GetProductsUseCase } from "../use-cases/product/get-products";
import { UpdateProductsUseCase } from "../use-cases/product/update-product";

interface ProductController {
    makePostProduct(useCase: AddProductUseCase): ControllerFunc;
    makeGetProducts(useCase: GetProductsUseCase): ControllerFunc;
    makeUpdateProduct(useCase: UpdateProductsUseCase): ControllerFunc;
    makeDeleteProduct(useCase: DeleteProductUseCase): ControllerFunc;
}

class ProductControllerImpl implements ProductController {
    makePostProduct(useCase: AddProductUseCase): ControllerFunc {
        return function (httpReq: HTTPRequest): HTTPResponse {
            try {
                const body = httpReq.body; //normal
                const postProduct = useCase.runUseCase(body);
                return {
                    headers: {
                        'Content-Type': 'application/json',
                        'Last-Modified': new Date().toUTCString()
                    },
                    statusCode: 201,
                    body: { postProduct }
                }
            } catch (error: any) {
                console.log(error);
                
                return {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    statusCode: 400,
                    body: {
                        error: error.message
                    }
                }
            }
        }

    }
    makeGetProducts(useCase: GetProductsUseCase): ControllerFunc {
        return function (_httpReq: HTTPRequest): HTTPResponse {
            try {
                const getProducts = useCase.runUseCase();
                return {
                    headers: {
                        'Content-Type': "application/json",
                    },
                    statusCode: 200,
                    body: getProducts
                }
            } catch (error: any) {
                return {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    statusCode: 404,
                    body: {
                        error: error.message
                    }
                }
            }
        }

    }
    makeUpdateProduct(useCase: UpdateProductsUseCase): ControllerFunc {
        return function (httpReq: HTTPRequest): HTTPResponse {
            try {
                const body = httpReq.body;
                const slug = httpReq.params.slug
                const updatedProduct = useCase.runUseCase(body, slug);
                return {
                    headers: {
                        'Content-Type': 'application/json',
                        'Last-Modified': new Date().toUTCString(),
                    },
                    statusCode: 200,
                    body: { updatedProduct }
                }
            } catch (error: any) {
                return {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    statusCode: 400,
                    body: {
                        error: error.message
                    }
                }
            }
        }

    }
    makeDeleteProduct(useCase: DeleteProductUseCase): ControllerFunc { //done
        return function (httpReq: HTTPRequest): HTTPResponse {
            try {
                const slug: string = httpReq.params.slug;
                const deletedProduct = useCase.runUseCase(slug);
                return {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    statusCode: 200,
                    body: {
                        "deletedProduct": deletedProduct
                    }
                }
            } catch (error: any) {
                return {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    statusCode: 400,
                    body: {
                        error: error.message
                    }
                }
            }

        }

    }

}

export default function makeProductController(): ProductController {
    return new ProductControllerImpl();
}