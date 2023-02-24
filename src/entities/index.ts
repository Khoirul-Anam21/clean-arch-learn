import { buildMakeProduct } from "./product";
const short = require('short-uuid');



const makeProduct = buildMakeProduct(short.generate(), new Date());

export default makeProduct;