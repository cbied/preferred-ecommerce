import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategoriesStart } from '../../store/categories/categories.actions'
import { Routes, Route } from 'react-router-dom';
import LoadingPage from '../../components/loading-page/loading-page.componet';

const CategoriesPreivew = lazy(() => import('../categories-preview/categories-preview.component'));
const Category = lazy(() => import('../category/category.component'));

const Shop = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchCategoriesStart())
    }, [dispatch])


    return (
        <Suspense fallback={<LoadingPage />}>
            <Routes>
                <Route index element={ <CategoriesPreivew />} />
                <Route path=':category' element={ <Category /> } />
            </Routes>
        </Suspense>
    )
        
}

export default Shop;

