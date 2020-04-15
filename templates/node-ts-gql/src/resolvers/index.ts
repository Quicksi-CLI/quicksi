import { GQLResolver } from './../schemas.d';
import * as products from '../services/products';

export default {
    Query: {
        product: async (_, { id }) => {
            return await products.getProduct(id);
        },
        products: async (_, {}) => {
            return await products.getAllProducts();
        }
    },
    Mutation: {
        addProduct: async (_, { name, text }) => {
            return await products.addProduct(name, text);
        }
    }
} as GQLResolver