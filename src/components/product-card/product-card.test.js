import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from '../../utils/test/test.utils';
import ProductCard from "./product-card.component";

describe('ProductCard Component', () => {
    test('it should add the product item when ProductCard button is clicked', async () => {
        const mockProduct = {
            id: 1,
            name: 'Item 1',
            url: 'url',
            price: 10
        }

        const { store } = renderWithProviders(<ProductCard product={mockProduct} key={mockProduct.id}/>, {
            preloadedstate: {
                cart: {
                    cartItems: [],
                }
            }
        })

        const addToCartButtonElement = screen.getByText(/add to cart/i);
        await fireEvent.click(addToCartButtonElement);
        expect(store.getState().cart.cartItems.length).toBe(1);
    })
})