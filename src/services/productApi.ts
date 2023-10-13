import { Products, Product } from '@/common/types';
import { PRODUCT_API_HOST } from '@/common/constants';

const getProducts = async (): Promise<Products> => {
  const response = await fetch(PRODUCT_API_HOST);

  if (!response.ok) {
    throw new Error('Unable to fetch products');
  }

  const body = await response.json();

  return body.products;
};

const getProduct = async (id: string): Promise<Product> => {
  const products = await getProducts();
  const numberId = parseInt(id);

  if (isNaN(numberId)) {
    throw new Error('Invalid product id');
  }

  const product = products.find((product) => product.id === numberId);

  if (!product) {
    throw new Error('There is no such product');
  }

  return product;
};

export { getProducts, getProduct };
