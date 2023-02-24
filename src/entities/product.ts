export interface Product {
    productId: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    slug: string;
    dateArrived: string; //toISO

    updateStock(newStock: number): void;
    updatePrice(newPrice: number): void;
}

class ProductImpl implements Product {
    readonly productId: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    slug: string;
    dateArrived: string;

    constructor(id: string, name: string, description: string, price: number, stock: number, slug: string, dateArrived: string) {
        this.productId = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.slug = slug;
        this.dateArrived = dateArrived;
    }

    updateStock(newStock: number): void {
        this.stock = newStock;
    }
    updatePrice(newPrice: number): void {
        this.price = newPrice;
    }
}

type ProductFunc = ({ name, description, price, stock }: 
    { name: string, description: string, price: number, stock: number }) => Product;

export const buildMakeProduct = (prodId: string, date: Date): ProductFunc => {
    return function makeProduct({ name, description, price, stock }): Product {
        const slug = name.split(' ').join('').toLowerCase();
        return Object.freeze(new ProductImpl(prodId, name, description, price, stock, slug, date.toISOString()));
    };
}


