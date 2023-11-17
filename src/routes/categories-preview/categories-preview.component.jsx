import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoriesMap } from '../../store/categories/categories.actions'
import { selectCategoriesMap } from '../../store/categories/categories.selectors'
import { getCollectionAndDocuments } from '../../utils/firebase/firebase.utils'
import CategoryPreview from '../../components/category-preview/category-preview.component'

const CategoriesPreivew = () => {

    const dispatch = useDispatch()
    const categoriesMap = useSelector(selectCategoriesMap) 

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCollectionAndDocuments('categories')
            dispatch(setCategoriesMap(categoryMap))
        } 

        getCategoriesMap()
    }, [dispatch])

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