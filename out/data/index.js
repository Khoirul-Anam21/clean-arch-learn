"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class DBImpl {
    constructor(path) {
        this.path = path;
    }
    collect() {
        try {
            const dbFile = fs_1.default.readFileSync(path_1.default.resolve(__dirname, this.path), 'utf-8');
            const dbData = JSON.parse(dbFile);
            return dbData;
        }
        catch (error) {
            throw error;
        }
    }
    updateCollection(newCollection) {
        try {
            fs_1.default.writeFileSync(path_1.default.resolve(__dirname, this.path), JSON.stringify(newCollection), 'utf-8');
        }
        catch (error) {
            throw error;
        }
    }
}
function makeDb(path) {
    return new DBImpl(path);
}
const productDB = makeDb('products.json');
exports.default = productDB;
