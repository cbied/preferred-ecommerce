import { INITIAL_CATEGORIES_STATE, categoriesReducer } from './categories.reducer';
import { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed } from './categories.actions';

describe('categories reducer', () => {
    it('should set isLoading to true when fetchCategoriesStart is called', () => {
        const expectedState = {
            ...INITIAL_CATEGORIES_STATE,
            isLoading: true
        }

        expect(categoriesReducer(INITIAL_CATEGORIES_STATE, fetchCategoriesStart())).toEqual(expectedState);
    })

    it('should set recieve categoriesArray payload when fetchCategoriesSuccess is called', () => {
        const mockData = [{
                title: 'womens',
                items: [
                    { id: 1, name: 'Product 1', imageUrl: 'url', price: 10},
                    { id: 2, name: 'Product 2', imageUrl: 'url', price: 10}
                ]}
        ] 
        const expectedState = {
            ...INITIAL_CATEGORIES_STATE,
            categories: mockData
        }

        expect(categoriesReducer(INITIAL_CATEGORIES_STATE, fetchCategoriesSuccess(mockData))).toEqual(expectedState);
    })

    it('should set recieve Error payload when fetchCategoriesFailed is called', () => {
        const mockError = new Error('Error fetching categories')
        const expectedState = {
            ...INITIAL_CATEGORIES_STATE,
            error: mockError
        }

        expect(categoriesReducer(INITIAL_CATEGORIES_STATE, fetchCategoriesFailed(mockError))).toEqual(expectedState);
    })


})