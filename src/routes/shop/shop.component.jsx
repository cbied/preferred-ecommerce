import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCategories } from '../../store/categories/categories.actions'
import { getCollectionAndDocuments } from '../../utils/firebase/firebase.utils'
import { Routes, Route } from 'react-router-dom'
import CategoriesPreivew from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCollectionAndDocuments('categories')
            dispatch(setCategories(categoriesArray))
        } 

        getCategoriesMap()
    }, [dispatch])

    return (
        <Routes>
            <Route index element={ <CategoriesPreivew />} />
            <Route path=':category' element={ <Category /> } />
        </Routes>
    )
}

export default Shop;

