import { AnyAction } from 'redux';
import { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed } from './categories.actions';
import { Categories } from './categories.types';

export type CategoriesState = {
    readonly categories: Categories[];
    readonly isLoading: boolean;
    readonly error: Error | null;
}

const INITIAL_STATE: CategoriesState = {
    categories: [],
    isLoading: false,
    error: null
}

export const categoriesReducer = (
    state = INITIAL_STATE,
    action: AnyAction
    ): CategoriesState => {
    if(fetchCategoriesStart.match(action)) {
        return { ...state, isLoading: true }
    }
    
    if(fetchCategoriesSuccess.match(action)) {
        return { ...state, isLoading: false, categories: action.payload }
    }
    
    if(fetchCategoriesFailed.match(action)) {
        return { ...state, isLoading: false, error: action.payload }
    } 
    
    return state
}