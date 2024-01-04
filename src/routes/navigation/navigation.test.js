import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test/test.utils'; 
import Navigation from './navigation.component';

describe('Navigation Component', () => {
    test('it should render SIGN IN and not SIGN OUT if currentUser is null', () => {  
        renderWithProviders(<Navigation />, {
            preloadedstate: {
                user: {
                    currentUser: null
                }
            }
        })
        const signInLinkElement =  screen.getByText(/sign in/i);
        expect(signInLinkElement).toBeInTheDocument();
        const signOutLinkElement =  screen.queryByText(/sign out/i);
        expect(signOutLinkElement).toBeNull();
    })

    test('it should render SIGN OUT and not SIGN IN if currentUser is signed in', () => {  
        renderWithProviders(<Navigation />, {
            preloadedstate: {
                user: {
                    currentUser: {
                        id: 1,
                        createdAt: 'date',
                        displayName: 'John Smith',
                        email: 'johnsmith@gmail.com'
                    }
                }
            }
        })
        const signOutLinkElement =  screen.getByText(/sign out/i);
        expect(signOutLinkElement).toBeInTheDocument();
        const signInLinkElement =  screen.queryByText(/sign in/i);
        expect(signInLinkElement).toBeNull();
    })

    test('it should render cart dropdown if isCartOpen is true', () => {
        const initCartItems = [
            { id: 1, name: 'Item 1', imageUrl: 'url', price: 10, quantity: 1 },
            { id: 2, name: 'Item 2', imageUrl: 'url', price: 15, quantity: 2 }
        ]
        renderWithProviders(<Navigation />, {
            preloadedstate: {
                cart: {
                    cartItems: initCartItems,
                    isCartOpen: true
                }
            }
        })
        const goToCheckoutText = screen.getByText(/go to checkout/i);
        expect(goToCheckoutText).toBeInTheDocument();
    })

    test('it should not render cart dropdown if isCartOpen is false', () => {
        const initCartItems = [
            { id: 1, name: 'Item 1', imageUrl: 'url', price: 10, quantity: 1 },
            { id: 2, name: 'Item 2', imageUrl: 'url', price: 15, quantity: 2 }
        ]
        renderWithProviders(<Navigation />, {
            preloadedstate: {
                cart: {
                    cartItems: initCartItems,
                    isCartOpen: false
                }
            }
        })
        const goToCheckoutText = screen.queryByText(/go to checkout/i);
        expect(goToCheckoutText).toBeNull();
    })
})