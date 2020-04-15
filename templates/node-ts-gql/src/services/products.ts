import { GQLProduct } from './../schemas.d';

const PRODUCTS: GQLProduct[] = [];

export async function getProduct(id: string) {
    return PRODUCTS.find(p => p.id === id);
}

export async function getAllProducts() {
    return PRODUCTS;
}

export async function addProduct(name: string, text?: string) {
    const newProduct: GQLProduct = {
        id: PRODUCTS.length.toString(),
        name,
        text,
        createdAt: new Date()
    }

    PRODUCTS.push(newProduct);

    return newProduct;
}