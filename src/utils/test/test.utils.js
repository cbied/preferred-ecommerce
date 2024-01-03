import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../store/root-reducer';

export function renderWithProviders(
    ui,
    {
        preloadedstate = {},
        store = createStore(rootReducer, preloadedstate),
        ...renderOptions
    } = {}  
) {
    const Wrapper = ({ children }) => {
        return (
            <Provider store={store}>
                {children}
            </Provider>
        )
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}