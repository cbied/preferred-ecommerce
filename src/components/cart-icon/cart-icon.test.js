import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test/test.utils';
import CartIcon from './cart-icon.component';

describe('CartIcon test', () => {
    test('Uses preloaded state to render', () => {
        const initCartItems = [
            { id: 1, name: 'Item 1', imageUrl: 'url', price: 10, quantity: 1 },
            { id: 2, name: 'Item 2', imageUrl: 'url', price: 15, quantity: 2 }
        ]

        renderWithProviders(<CartIcon />, {
            preloadedstate: {
                cart: {
                    cartItems: initCartItems,
                }
            }
        });

        // quantity is 3 between the two items
        const cartIconElement = screen.getByText('3');
        expect(cartIconElement).toBeInTheDocument();
    })
})