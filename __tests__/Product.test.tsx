import { render, screen } from '@testing-library/react';
import Product from '@/app/product/[id]/page';
import fetchMock from 'jest-fetch-mock';
import mock from '../mock';

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
  fetchMock.mockResponse(JSON.stringify(mock));
});

describe('check product page component', () => {
  it('check product card name', async () => {
    render(await Product({ params: { id: '1' } }));

    const name = screen.getByTestId('product-card-name');

    expect(name).toHaveTextContent('Apple');
  });

  it('check product card description', async () => {
    render(await Product({ params: { id: '10' } }));

    const id = screen.getByTestId('product-card-description');

    expect(id).toHaveTextContent('A decadent dark chocolate bar with almonds.');
  });

  it('check product card price', async () => {
    render(await Product({ params: { id: '5' } }));

    const price = screen.getByTestId('product-card-price');

    expect(price).toHaveTextContent('2.05EUR');
  });
});
