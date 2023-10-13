import { Product } from '@/common/types';
import { Header, ProductCard } from '@/components';

type IProps = { product: Product };

const ProductPage = ({ product }: IProps) => {
  return (
    <>
      <Header />
      <h2 className="text-3xl font-bold mt-5 mb-5">Product details</h2>
      <ProductCard product={product} />
    </>
  );
};

export default ProductPage;
