import Link from 'next/link';
import { Product } from '@/common/types';

type IProps = {
  item: Product;
};

const ListItem = ({ item: { name, id, category, currency, price } }: IProps) => {
  return (
    <Link href={`/product/${id}`} className="h-full block">
      <div
        data-testid="list-item-element"
        className="flex flex-col bg-white px-4 py-2 md:pr-9 md:pl-4 rounded-lg h-full min-w-[150px]"
      >
        <h3 className="mb-2 font-bold">{name}</h3>
        <div className="text-xs text-secondary mb-2">
          <span>category: </span>
          <span className="font-bold">{category}</span>
        </div>
        <p className="text-highlight text-lg mt-auto">
          {price}
          {currency}
        </p>
      </div>
    </Link>
  );
};

export default ListItem;
