import { Product } from '@/common/types';

type IProps = { product: Product };

const ProductCard = ({ product: { name, category, description, currency, price } }: IProps) => {
  return (
    <div className="bg-white pl-6 py-4 pr-12 rounded-lg" data-testid="product-card-element">
      <h3 className="text-xl font-bold" data-testid="product-card-name">
        {name}
      </h3>
      <div className="text-sm text-secondary mb-5">
        <span>category: </span>
        <span className="font-bold">{category}</span>
      </div>
      <p className="mb-5" data-testid="product-card-description">
        {description}
      </p>
      <p className="text-highlight text-xl" data-testid="product-card-price">
        {price}
        {currency}
      </p>
    </div>
  );
};

export default ProductCard;
