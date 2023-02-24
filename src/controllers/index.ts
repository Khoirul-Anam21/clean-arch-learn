import productService from "../use-cases/product";
import makeProductController from "./product-controller";


const productControllerObj = makeProductController();

const postProduct = productControllerObj.makePostProduct(productService.addProductUseCase);
const getProducts = productControllerObj.makeGetProducts(productService.getProductsUseCase);
const updateProducts = productControllerObj.makeUpdateProduct(productService.updateProductsUseCase);
const deleteProducts = productControllerObj.makeDeleteProduct(productService.deleteProductsUseCase);

const productController = Object.freeze({
    postProduct,
    getProducts,
    updateProducts,
    deleteProducts
});

export default productController;
