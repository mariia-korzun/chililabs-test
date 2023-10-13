import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Products from '@/app/page';
import fetchMock from 'jest-fetch-mock';
import mock from '../mock';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
  fetchMock.mockResponse(JSON.stringify(mock));
});

describe('check products page components', () => {
  it('should have filter', async () => {
    render(await Products());

    const filter = screen.getByTestId('filter-container');

    expect(filter).toBeInTheDocument();
  });

  it('should have products list', async () => {
    render(await Products());

    const productsList = screen.getByTestId('list-element');

    expect(productsList).toBeInTheDocument();
  });

  it('should have pagination', async () => {
    render(await Products());

    const productsList = screen.getByTestId('pagination-element');

    expect(productsList).toBeInTheDocument();
  });
});

describe('check filter work', () => {
  it('should have 3 products with meat category', async () => {
    render(await Products());

    fireEvent.change(screen.getByTestId('filter-element'), { target: { value: 'meat' } });

    await waitFor(() => {
      expect(screen.getAllByTestId('list-item-element')).toHaveLength(3);
    });
  });

  it('should show message that there is no such products', async () => {
    render(await Products());

    fireEvent.change(screen.getByTestId('filter-element'), { target: { value: 'ujufsdjfh' } });

    await waitFor(() => {
      expect(screen.getByTestId('list-empty-message-element')).toBeInTheDocument();
    });
  });
});

describe('check products on products page', () => {
  it('click on products on products page leads to product detail page', async () => {
    render(await Products(), { wrapper: MemoryRouterProvider });

    fireEvent.click(screen.getAllByTestId('list-item-element')[0]);

    expect(mockRouter.asPath).toEqual('/product/1');
  });
});
