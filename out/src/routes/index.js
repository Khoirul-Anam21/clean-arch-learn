"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_callback_1 = __importDefault(require("../express-callback"));
const controllers_1 = __importDefault(require("../controllers"));
const productRouter = express_1.default.Router();
productRouter.post('/products', (0, express_callback_1.default)(controllers_1.default.postProduct).handleRequest);
productRouter.get('/products', (0, express_callback_1.default)(controllers_1.default.getProducts).handleRequest);
productRouter.put('/products/:slug', (0, express_callback_1.default)(controllers_1.default.updateProducts).handleRequest);
productRouter.delete('/products/:slug', (0, express_callback_1.default)(controllers_1.default.deleteProducts).handleRequest);
exports.default = productRouter;
