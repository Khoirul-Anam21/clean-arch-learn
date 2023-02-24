import { nanoid } from "nanoid";
import { buildMakeProduct } from "./product";


const makeProduct = buildMakeProduct(nanoid(), new Date());

export default makeProduct;