import { Metadata } from 'next';
import { getProducts } from '@/services/productApi';
import { ProductsPage } from '@/components';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Products page'
};

export default async function Products() {
  const products = await getProducts();

  return <ProductsPage products={products} />;
}
