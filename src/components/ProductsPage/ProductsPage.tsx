'use client';

import { Products } from '@/common/types';
import { List, Filter, Pagination } from '@/components';
import { useState } from 'react';
import { PRODUCTS_PER_PAGE } from '@/common/constants';

type IProps = { products: Products };

const ProductsPage = ({ products }: IProps) => {
  const [filteredProducts, setFilteredProducts] = useState<Products>(products);
  const [currentPageProducts, setCurrentPageProducts] = useState<Products>(
    products.slice(0, PRODUCTS_PER_PAGE)
  );

  return (
    <>
      <h2 className="text-3xl font-bold mt-5 mb-5">List of products</h2>
      <Filter items={products} setItems={setFilteredProducts} />
      <List items={currentPageProducts} />
      <Pagination
        items={filteredProducts}
        setItems={setCurrentPageProducts}
        itemsPerPage={PRODUCTS_PER_PAGE}
      />
    </>
  );
};

export default ProductsPage;
