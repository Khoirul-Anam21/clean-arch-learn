"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nanoid_1 = require("nanoid");
const product_1 = require("./product");
const makeProduct = (0, product_1.buildMakeProduct)((0, nanoid_1.nanoid)(), new Date());
exports.default = makeProduct;
