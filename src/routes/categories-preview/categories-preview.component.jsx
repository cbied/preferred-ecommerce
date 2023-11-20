import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selectors'
import { getCollectionAndDocuments } from '../../utils/firebase/firebase.utils'
import CategoryPreview from '../../components/category-preview/category-preview.component'

const CategoriesPreivew = () => {
    const categoriesMap = useSelector(selectCategoriesMap) 

    return (
        <Fragment>
        { 
            Object.keys(categoriesMap).map(title => {
                return <CategoryPreview key={title} title={title} products={categoriesMap[title]}/>
            })
        }
        </Fragment>
    )
}

export default CategoriesPreivew;