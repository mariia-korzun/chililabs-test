'use client';

import { Products } from '@/common/types';
import { useEffect, useState, Dispatch } from 'react';

type IProps = {
  setItems: Dispatch<Products>;
  items: Products;
  itemsPerPage: number;
};

const Pagination = ({ items, itemsPerPage, setItems }: IProps) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const pagesNumber = items.length / itemsPerPage;

  useEffect(() => {
    const pageId = pagesNumber < currentPage ? 0 : currentPage;

    setItems(getItemsPerPage(pageId));
    setCurrentPage(pageId);
  }, [items]); // eslint-disable-line react-hooks/exhaustive-deps

  const onPageButtonClick = (pageId: number): void => {
    setItems(getItemsPerPage(pageId));
    setCurrentPage(pageId);
  };

  const getItemsPerPage = (pageId: number): Products => {
    const startIndex = itemsPerPage * pageId;

    return items.slice(startIndex, startIndex + itemsPerPage);
  };

  const renderPageButtons = (pagesNumber: number): JSX.Element[] => {
    let pageButtons = [];

    for (let index = 0; index < pagesNumber; index++) {
      pageButtons.push(
        <button
          key={index}
          onClick={() => {
            onPageButtonClick(index);
          }}
          type="button"
          className={`${
            currentPage === index && 'shadow-md shadow-highlight'
          } mr-2 w-7 h-7 bg-white rounded-full`}
        >
          {index + 1}
        </button>
      );
    }

    return pageButtons;
  };

  return (
    <div className="mt-9" data-testid="pagination-element">
      {renderPageButtons(pagesNumber)}
    </div>
  );
};

export default Pagination;
