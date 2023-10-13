'use client';

import { Products } from '@/common/types';
import { useEffect, useState, Dispatch, ChangeEvent } from 'react';
import { FILTER_TIMEOUT } from '@/common/constants';

type IProps = {
  setItems: Dispatch<Products>;
  items: Products;
};

const Filter = ({ setItems, items }: IProps) => {
  const [filterValue, setFilterValue] = useState<string>('');

  useEffect(() => {
    let timerId = setTimeout(() => {
      filterItems();
    }, FILTER_TIMEOUT);

    return () => clearTimeout(timerId);
  }, [filterValue]); // eslint-disable-line react-hooks/exhaustive-deps

  const filterItems = (): void => {
    if (!filterValue) {
      setItems(items);
    } else {
      const regexFilter = new RegExp(filterValue, 'i');

      const filteredItems = items.filter(({ name, category }) => {
        return regexFilter.test(name) || regexFilter.test(category);
      });

      setItems(filteredItems);
    }
  };

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setFilterValue(target.value);
  };

  return (
    <div data-testid="filter-container">
      <input
        value={filterValue}
        type="text"
        onChange={onChange}
        placeholder="Enter filter..."
        className="p-3 w-72 h-12 outline-none rounded-lg text-center mb-2"
        data-testid="filter-element"
      />
    </div>
  );
};

export default Filter;
