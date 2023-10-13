import { Metadata } from 'next';
import { getProduct } from '@/services/productApi';
import { ProductPage } from '@/components';

type IProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params: { id } }: IProps): Promise<Metadata> {
  const product = await getProduct(id);

  return {
    title: `Product: ${product.name}`,
    description: `${product.description}`
  };
}

export default async function Product({ params: { id } }: IProps) {
  const product = await getProduct(id);

  return <ProductPage product={product} />;
}
