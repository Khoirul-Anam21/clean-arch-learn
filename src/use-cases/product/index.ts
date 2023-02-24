import productDataAccess from "../../data-access";
import makeAddProductUC from "./add-product";
import makeDeleteProductUC from "./delete-product";
import makeGetProductsUC from "./get-products";
import makeUpdateProductsUC from "./update-product";


const addProductUseCase = makeAddProductUC(productDataAccess);
const getProductsUseCase = makeGetProductsUC(productDataAccess);
const updateProductsUseCase = makeUpdateProductsUC(productDataAccess);
const deleteProductsUseCase = makeDeleteProductUC(productDataAccess);

const productService = Object.freeze({
    addProductUseCase,
    getProductsUseCase,
    updateProductsUseCase,
    deleteProductsUseCase
});

export default productService;