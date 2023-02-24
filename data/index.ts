import fs from 'fs';
import { Product } from '../src/entities/product';
import path from 'path';

export interface DB {
    collect(): Product[];
    updateCollection(newCollection: Product[]): void;
}

class DBImpl implements DB {

    path: string;
    constructor(path: string) {
        this.path = path;
    }
    collect(): Product[] {
        try {
            const dbFile = fs.readFileSync(path.resolve(__dirname, this.path), 'utf-8');
            const dbData: Product[] = JSON.parse(dbFile);
            return dbData;
        } catch (error) {
            throw error;
        }
    }
    updateCollection(newCollection: Product[]): void {
        try {
            fs.writeFileSync(path.resolve(__dirname, this.path), JSON.stringify(newCollection), 'utf-8');
        } catch (error) {
            throw error;

        }
    }

}

function makeDb(path: string): DB {
    return new DBImpl(path);
}

const productDB: DB = makeDb('products.json');
export default productDB;