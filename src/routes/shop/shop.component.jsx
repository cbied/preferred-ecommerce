import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategoriesAsync } from '../../store/categories/categories.actions'
import { Routes, Route } from 'react-router-dom'
import CategoriesPreivew from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchCategoriesAsync())
    }, [dispatch])


    return (
        <Routes>
            <Route index element={ <CategoriesPreivew />} />
            <Route path=':category' element={ <Category /> } />
        </Routes>
    )
        
}

export default Shop;

