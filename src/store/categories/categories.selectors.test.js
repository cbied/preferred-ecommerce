import { selectCategories, selectCategoriesIsLoading, selectCategoriesMap } from './categories.selectors';

const mockState = {
    categories: {
        isLoading: false,
        categories: [{
            title: 'womens',
            items: [
                { id: 1, name: 'Product 1', imageUrl: 'url', price: 10},
                { id: 2, name: 'Product 2', imageUrl: 'url', price: 10}
            ]}
        ]
    }
}

describe('categories selectors', () => {
    test('selectCategories should return category data', () => {
        const categoriesSlice = selectCategories(mockState);
    
        expect(categoriesSlice).toEqual(mockState.categories.categories);
    })

    test('selectCategoriesIsLoading should return isLoading data', () => {
        const categoriesLoading = selectCategoriesIsLoading(mockState);
    
        expect(categoriesLoading).toEqual(mockState.categories.isLoading);
    })

    test('selectCategoriesMap should transform and return mapped category data', () => {
        const categoriesMapped = selectCategoriesMap(mockState);
        const mockMappedState = {
            'womens': [
            { id: 1, name: 'Product 1', imageUrl: 'url', price: 10},
            { id: 2, name: 'Product 2', imageUrl: 'url', price: 10}
            ]
        }
        expect(categoriesMapped).toEqual(mockMappedState);
    })
})