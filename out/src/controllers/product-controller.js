"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductControllerImpl {
    makePostProduct(useCase) {
        return function (httpReq) {
            try {
                const request = httpReq.body;
                const productReq = JSON.parse(request);
                const postProduct = useCase.runUseCase(productReq);
                return {
                    headers: {
                        'Content-Type': 'application/json',
                        'Last-Modified': new Date().toUTCString()
                    },
                    statusCode: 201,
                    body: { postProduct }
                };
            }
            catch (error) {
                return {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    statusCode: 400,
                    body: {
                        error: error.message
                    }
                };
            }
        };
    }
    makeGetProducts(useCase) {
        return function (_httpReq) {
            try {
                const getProducts = useCase.runUseCase();
                return {
                    headers: {
                        'Content-Type': "application/json",
                    },
                    statusCode: 200,
                    body: getProducts
                };
            }
            catch (error) {
                return {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    statusCode: 404,
                    body: {
                        error: error.message
                    }
                };
            }
        };
    }
    makeUpdateProduct(useCase) {
        return function (httpReq) {
            try {
                const request = httpReq.body;
                const slug = httpReq.params.slug;
                const productReq = JSON.parse(request);
                const updatedProduct = useCase.runUseCase(productReq, slug);
                return {
                    headers: {
                        'Content-Type': 'application/json',
                        'Last-Modified': new Date().toUTCString(),
                    },
                    statusCode: 200,
                    body: { updatedProduct }
                };
            }
            catch (error) {
                return {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    statusCode: 400,
                    body: {
                        error: error.message
                    }
                };
            }
        };
    }
    makeDeleteProduct(useCase) {
        return function (httpReq) {
            try {
                const slug = httpReq.params;
                const deletedProduct = useCase.runUseCase(slug);
                return {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    statusCode: 200,
                    body: {
                        "deletedProduct": deletedProduct
                    }
                };
            }
            catch (error) {
                return {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    statusCode: 400,
                    body: {
                        error: error.message
                    }
                };
            }
        };
    }
}
function makeProductController() {
    return new ProductControllerImpl();
}
exports.default = makeProductController;
