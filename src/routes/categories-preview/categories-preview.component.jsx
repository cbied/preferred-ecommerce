import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selectors'
import LoadingPage from '../../components/loading-page/loading-page.componet'
import CategoryPreview from '../../components/category-preview/category-preview.component'
import { SHOP_DATA } from '../../shop-data';

const CategoriesPreivew = () => {
    const categoriesMap = useSelector(selectCategoriesMap) 
    const categoriesIsLoading = useSelector(selectCategoriesIsLoading)
    const offlineData = Object.assign(SHOP_DATA)
    return (
        <Fragment>
            <LoadingPage isLoading={categoriesIsLoading} />
            {!categoriesMap ?
                Object.keys(offlineData).map(title => {
                    return <CategoryPreview key={title} title={title} products={categoriesMap[title]}/>
                }) :
                Object.keys(categoriesMap).map(title => {
                return <CategoryPreview key={title} title={title} products={categoriesMap[title]}/>
            })}
        </Fragment>
    )
}

export default CategoriesPreivew;